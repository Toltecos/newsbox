from django.urls import path

from news.views import (
    IndexListView,
    NewspaperListView,
    NewspaperDetailView,
    NewspaperCreateView,
    NewspaperUpdateView,
    NewspaperDeleteView,
    TopicNewspaperListView,
    RedactorNewspaperListView,
    TopicListView,
    TopicCreateView,
    TopicUpdateView,
    TopicDeleteView,
    RedactorListView,
    RedactorDetailView,
    RedactorCreateView,
    RedactorUpdateView,
    RedactorDeleteView,
)


app_name = "news"

url_news = [
    path("", IndexListView.as_view(), name="index"),
    path("news/", NewspaperListView.as_view(), name="news-list"),
    path("news/<int:pk>/", NewspaperDetailView.as_view(), name="news-detail"),
    path(
        "news/topic/<int:topic_pk>/",
        TopicNewspaperListView.as_view(),
        name="topic-news-list",
    ),
    path(
        "news/redactor/<int:redactor_pk>/",
        RedactorNewspaperListView.as_view(),
        name="redactor-news-list",
    ),
    path(
        "news/create/",
        NewspaperCreateView.as_view(),
        name="news-create"
    ),
    path(
        "news/<int:pk>/update/",
        NewspaperUpdateView.as_view(),
        name="news-update"
    ),
    path(
        "news/<int:pk>/delete/",
        NewspaperDeleteView.as_view(),
        name="news-delete"
    ),
]

url_topic = [
    path(
        "topics/",
        TopicListView.as_view(),
        name="topic-list",
    ),
    path(
        "topics/create/",
        TopicCreateView.as_view(),
        name="topic-create",
    ),
    path(
        "topics/<int:pk>/update/",
        TopicUpdateView.as_view(),
        name="topic-update",
    ),
    path(
        "topics/<int:pk>/delete/",
        TopicDeleteView.as_view(),
        name="topic-delete",
    ),
]

url_redactor = [
    path(
        "redactors/",
        RedactorListView.as_view(),
        name="redactor-list"
    ),
    path(
        "redactors/<int:pk>/",
        RedactorDetailView.as_view(),
        name="redactor-detail"
    ),
    path(
        "redactors/create/",
        RedactorCreateView.as_view(),
        name="redactor-create"
    ),
    path(
        "redactors/<int:pk>/update/",
        RedactorUpdateView.as_view(),
        name="redactor-update",
    ),
    path(
        "redactors/<int:pk>/delete/",
        RedactorDeleteView.as_view(),
        name="redactor-delete",
    ),
]

urlpatterns = url_news + url_topic + url_redactor
