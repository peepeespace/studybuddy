from django.db import models
from django.contrib.auth.models import AbstractUser
from django.utils.translation import ugettext_lazy as _
from django.conf import settings


class User(AbstractUser):
    username = models.CharField(max_length=200, blank=True, null=True)
    email = models.EmailField(_('email address'), unique=True)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username', 'first_name', 'last_name']

    def __str__(self):
        return f'{self.username}'


class UserProfile(models.Model):
    user = models.OneToOneField(
        settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='profile')
    sex = models.CharField(max_length=10, blank=True, null=True)
    dob = models.DateField(blank=True, null=True)
    phone = models.CharField(max_length=20, blank=True, null=True)
    address = models.CharField(max_length=255, blank=True, null=True)
    pictures = models.CharField(max_length=300, blank=True, null=True)
    is_teacher = models.BooleanField(blank=True, null=True)

    def __str__(self):
        return f'{self.user.username} profile'


class Lecture(models.Model):
    users = models.ManyToManyField(User, blank=True, null=True)
    name = models.CharField(max_length=155)
    lecture_code = models.CharField(max_length=50, unique=True)
    teacher = models.ForeignKey(User,
                                on_delete=models.SET_NULL,
                                related_name='lectures',
                                blank=True,
                                null=True)
    images = models.CharField(max_length=300, blank=True, null=True)
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)
