from datetime import datetime

from news.cache import get_cache, set_all_cache


def news_info(request):
    set_all_cache()

    info = get_cache("info")
    topic_list = get_cache('topic_list')
    topic_dict = get_cache('topic_dict')
    topics_last_news = get_cache("topics_last_news")

    num_visits = request.session.get("num_visits", 0)
    today = datetime.now()
    request.session["num_visits"] = num_visits + 1

    return {
        "topic_list": topic_list,
        "topic_dict": topic_dict,
        "topics_last_news": topics_last_news,
        "info": info,
        "num_visits": request.session.get("num_visits"),
        'today': today,
    }
