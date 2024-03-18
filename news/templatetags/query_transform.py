from django import template

register = template.Library()


@register.simple_tag
def query_transform(request, **kwargs):
    updated = request.GET.copy()
    for key, value in kwargs.items():
        if value is not None:
            updated[key] = value
        else:
            updated.pop(key, 0)
    return updated.urlencode()


@register.filter(name="dict_key")
def dict_key(dictionary, key):
    if dictionary is not None and isinstance(dictionary, dict):
        return dictionary.get(key, "")
    else:
        return ""
