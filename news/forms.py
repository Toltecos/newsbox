from django import forms
from django.contrib.auth import get_user_model
from django.contrib.auth.forms import UserCreationForm
from django.core.exceptions import ValidationError

from news.models import Newspaper


class NewspaperForm(forms.ModelForm):
    publishers = forms.ModelMultipleChoiceField(
        queryset=get_user_model().objects.all(),
        widget=forms.CheckboxSelectMultiple,
    )

    class Meta:
        model = Newspaper
        fields = "__all__"


class RedactorCreationForm(UserCreationForm):
    class Meta(UserCreationForm.Meta):
        model = get_user_model()
        fields = UserCreationForm.Meta.fields + (
            "years_of_experience",
            "first_name",
            "last_name",
        )

    def clean_years_of_experience(self):
        return validate_years_of_experience(self.cleaned_data["years_of_experience"])


class RedactorUpdateForm(forms.ModelForm):
    class Meta:
        model = get_user_model()
        fields = ["username", "years_of_experience", "first_name", "last_name"]

    def clean_license_number(self):
        return validate_years_of_experience(self.cleaned_data["years_of_experience"])


def validate_years_of_experience(years_of_experience):
    if not isinstance(years_of_experience, int):
        raise ValidationError("Years of experience should be integer")
    return years_of_experience


class SearchForm(forms.Form):
    def __init__(self, search_field, search_query=None, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.fields[search_field] = forms.CharField(
            max_length=100,
            required=False,
            label="",
            initial=search_query,
            widget=forms.TextInput(attrs={"placeholder": f"Search by {search_field}"}),
        )
