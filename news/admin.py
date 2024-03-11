from django.contrib import admin
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from django.contrib.auth.models import Group

from news.models import Redactor, Newspaper, Topic


admin.site.unregister(Group)


@admin.register(Redactor)
class CustomUserAdmin(BaseUserAdmin):
    search_fields = ["username", "email"]
    list_display = [
        "username",
        "email",
        "first_name",
        "last_name",
        "years_of_experience"
    ]


@admin.register(Newspaper)
class NewspaperAdmin(admin.ModelAdmin):
    search_fields = ["title", "publishers__username"]
    list_display = ["title", "topic", "published_date"]


@admin.register(Topic)
class TopicAdmin(admin.ModelAdmin):
    search_fields = ["name"]
    list_display = ["name"]
