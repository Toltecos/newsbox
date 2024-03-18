from django.conf import settings
from django.db import models
from django.contrib.auth.models import AbstractUser


class Topic(models.Model):
    name = models.CharField(max_length=63)

    class Meta:
        ordering = ["id"]

    def __str__(self):
        return self.name


class Newspaper(models.Model):
    title = models.CharField(max_length=255)
    content = models.TextField()
    published_date = models.DateTimeField(auto_now_add=True)
    topic = models.ForeignKey(
        Topic,
        on_delete=models.CASCADE,
        related_name="news"
    )
    publishers = models.ManyToManyField(
        settings.AUTH_USER_MODEL,
        related_name="news"
    )

    class Meta:
        ordering = ["-published_date"]

    def __str__(self):
        return self.title


class Redactor(AbstractUser):
    years_of_experience = models.IntegerField(default=0)

    class Meta:
        ordering = ["id"]

    def __str__(self):
        return self.username
