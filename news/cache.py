import pickle
import datetime

from django.contrib.auth import get_user_model

from news.models import Newspaper, Topic


TRAVEL_TOPIC_ID = 7


def set_cache(key, data):
    cache_file = f"cache/{key}.pickle"
    with open(cache_file, "wb") as pickle_file:
        pickle.dump(data, pickle_file)


def get_cache(key):
    cache_file = f"cache/{key}.pickle"
    try:
        with open(cache_file, "rb") as pickle_file:
            cache_data = pickle.load(pickle_file)
    except OSError:
        return None
    return cache_data


def set_all_cache(cmd=""):
    last_cached = get_cache("last_cached")
    last_update = get_cache("last_update")

    if not last_cached or cmd == "now" or last_cached < last_update:
        set_cache("last_update", datetime.datetime.now())

        index_news = Newspaper.objects.exclude(topic=TRAVEL_TOPIC_ID)[:7]
        set_cache("index_news", index_news)

        topic_list = Topic.objects.all()
        set_cache('topic_list', topic_list)

        topic_dict = dict()
        for item in topic_list.values():
            for key, value in item.items():
                topic_dict[item["id"]] = item["name"]
            set_cache('topic_dict', topic_dict)

        topics_last_news = {
            topic.name.lower(): Newspaper.objects.filter(topic=topic.id)[:5]
            for topic in topic_list
        }
        set_cache("topics_last_news", topics_last_news)

        info = {
            "num_news": Newspaper.objects.count(),
            "num_redactors": get_user_model().objects.count(),
            "num_topics": Topic.objects.count()
        }
        set_cache("info", info)

        set_cache("last_cached", datetime.datetime.now())
