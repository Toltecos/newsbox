from django.contrib.auth import get_user_model
from django.test import TestCase

from news.models import Topic, Newspaper


class ModelTests(TestCase):

    def test_topic_str(self):
        topic = Topic.objects.create(name="test")
        self.assertEqual(str(topic), topic.name)

    def test_redactor_str(self):
        redactor = get_user_model().objects.create(
            username="test",
            password="Test1234!",
            first_name="test_first",
            last_name="test_last",
        )
        self.assertEqual(str(redactor), redactor.username)

    def test_news_str(self):
        topic = Topic.objects.create(name="test")
        news = Newspaper.objects.create(title="Test", topic=topic)
        self.assertEqual(str(news), news.title)

    def test_create_redactor_with_years_of_experience(self):
        username = "test"
        password = "Test1234!"
        years_of_experience = 7
        redactor = get_user_model().objects.create_user(
            username=username,
            password=password,
            years_of_experience=years_of_experience,
        )
        self.assertEqual(redactor.username, username)
        self.assertEqual(redactor.years_of_experience, years_of_experience)
        self.assertTrue(redactor.check_password(password))
