from django.contrib.auth import get_user_model
from django.contrib.auth.mixins import LoginRequiredMixin
from django.db.models import Q
from django.urls import reverse_lazy
from django.views import generic

from news.forms import NewspaperForm, RedactorCreationForm, RedactorUpdateForm
from news.models import Newspaper, Topic
from news.cache import get_cache, set_all_cache


class IndexListView(generic.ListView):
    template_name = "news/index.html"
    context_object_name = 'index_news'

    def get_queryset(self):
        queryset = get_cache("index_news")
        return queryset


class TopicListView(LoginRequiredMixin, generic.ListView):
    model = Topic
    paginate_by = 10


class TopicCreateView(LoginRequiredMixin, generic.CreateView):
    model = Topic
    fields = "__all__"

    def get_success_url(self):
        set_all_cache("now")
        return reverse_lazy("news:topic-list")


class TopicUpdateView(LoginRequiredMixin, generic.UpdateView):
    model = Topic
    fields = "__all__"

    def get_success_url(self):
        set_all_cache("now")
        return reverse_lazy("news:topic-list")


class TopicDeleteView(LoginRequiredMixin, generic.DeleteView):
    model = Topic

    def get_success_url(self):
        set_all_cache("now")
        return reverse_lazy("news:topic-list")


class NewspaperListView(generic.ListView):
    model = Newspaper
    context_object_name = 'news_list'
    paginate_by = 5

    def get_queryset(self):
        queryset = Newspaper.objects.prefetch_related("publishers")
        search = self.request.GET.get("search")
        if search:
            return queryset.filter(
                Q(title__icontains=search) | Q(content__icontains=search)
            )
        return queryset


class TopicNewspaperListView(generic.ListView):
    model = Newspaper
    context_object_name = 'news_list'
    paginate_by = 5

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        topic_id = self.kwargs.get("topic_pk")
        context["topic_id"] = topic_id
        return context

    def get_queryset(self):
        topic_id = self.kwargs.get("topic_pk")
        return Newspaper.objects.select_related("topic").filter(topic=topic_id)


class NewspaperDetailView(generic.DetailView):
    model = Newspaper
    context_object_name = 'news'


class NewspaperCreateView(LoginRequiredMixin, generic.CreateView):
    model = Newspaper
    form_class = NewspaperForm

    def get_success_url(self):
        set_all_cache("now")
        return reverse_lazy("news:news-list")


class NewspaperUpdateView(LoginRequiredMixin, generic.UpdateView):
    model = Newspaper
    form_class = NewspaperForm

    def get_success_url(self):
        set_all_cache("now")
        return reverse_lazy("news:news-detail", kwargs={"pk": self.object.pk})


class NewspaperDeleteView(LoginRequiredMixin, generic.DeleteView):
    model = Newspaper

    def get_success_url(self):
        set_all_cache("now")
        return reverse_lazy("news:news-list")


class RedactorListView(LoginRequiredMixin, generic.ListView):
    model = get_user_model()
    paginate_by = 5


class RedactorDetailView(LoginRequiredMixin, generic.DetailView):
    model = get_user_model()


class RedactorCreateView(LoginRequiredMixin, generic.CreateView):
    model = get_user_model()
    form_class = RedactorCreationForm
    success_url = reverse_lazy("news:redactor-list")


class RedactorUpdateView(LoginRequiredMixin, generic.UpdateView):
    model = get_user_model()
    form_class = RedactorUpdateForm
    success_url = reverse_lazy("news:redactor-list")


class RedactorDeleteView(LoginRequiredMixin, generic.DeleteView):
    model = get_user_model()
    success_url = reverse_lazy("")
