from django.contrib.auth import get_user_model
from django.test import TestCase
from django.urls import reverse

from news.tests.test_config import REDACTOR_LIST_URL, TOPIC_LIST_URL


class PublicAccessTest(TestCase):
    def test_public_redactor_list(self):
        response = self.client.get(REDACTOR_LIST_URL)
        self.assertNotEqual(response.status_code, 200)

    def test_public_topic_list(self):
        response = self.client.get(TOPIC_LIST_URL)
        self.assertNotEqual(response.status_code, 200)

    def test_public_redactor_detail(self):
        self.redactor = get_user_model().objects.create_user(
            username="redactor",
            password="Redactor1test!",
            years_of_experience=7,
        )
        redactor_detail_url = reverse("news:redactor-detail", args=[self.redactor.id])
        response = self.client.get(redactor_detail_url)
        self.assertNotEqual(response.status_code, 200)
