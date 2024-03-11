from django.contrib.auth import get_user_model
from django.test import TestCase
from django.urls import reverse

from news.forms import RedactorCreationForm, RedactorUpdateForm


class RedactorFormsTests(TestCase):

    def setUp(self) -> None:
        self.redactor = get_user_model().objects.create_user(
            username="test",
            password="Password123!"
        )
        self.client.force_login(self.redactor)

    def test_redactor_creation_form_with_years_of_experience_is_valid(self):
        form_data = {
            "username": "new-redactor",
            "password1": "Redactor12test!",
            "password2": "Redactor12test!",
            "first_name": "Test_first",
            "last_name": "Test_last",
            "years_of_experience": 7
        }
        form = RedactorCreationForm(data=form_data)
        self.assertTrue(form.is_valid())
        self.assertEqual(form.cleaned_data, form_data)

    def test_create_redactor(self):
        form_data = {
            "username": "new-redactor",
            "password1": "Redactor12test!",
            "password2": "Redactor12test!",
            "first_name": "Test_first",
            "last_name": "Test_last",
            "years_of_experience": 7
        }

        self.client.post(reverse("news:redactor-create"), data=form_data)
        new_redactor = get_user_model().objects.get(
            username=form_data["username"]
        )
        self.assertEqual(new_redactor.first_name, form_data["first_name"])
        self.assertEqual(new_redactor.last_name, form_data["last_name"])
        self.assertEqual(
            new_redactor.years_of_experience,
            form_data["years_of_experience"]
        )


class ExperienceValidationTests(TestCase):
    @staticmethod
    def update_form(test_years_of_experience):
        return RedactorUpdateForm(
            data={
                "username": "Test_username",
                "years_of_experience": test_years_of_experience,
                "first_name": "Test_first",
                "last_name": "Test_last",
            }
        )

    def test_years_of_experience_is_valid(self):
        self.assertTrue(self.update_form(5).is_valid())
