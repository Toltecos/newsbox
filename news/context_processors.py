from datetime import datetime

from django.contrib.auth import get_user_model

from news.models import Topic, Newspaper


def news_info(request):
    num_news = Newspaper.objects.count()
    num_redactors = get_user_model().objects.count()
    num_topics = Topic.objects.count()
    num_visits = request.session.get("num_visits", 0)
    today = datetime.now()
    request.session["num_visits"] = num_visits + 1

    topic_list = Topic.objects.all()

    return {
        "topic_list": topic_list,
        "num_news": num_news,
        "num_redactors": num_redactors,
        "num_topics": num_topics,
        "num_visits": request.session.get("num_visits"),
        'today': today,
    }
