from django.contrib import admin
from django.contrib.auth.admin import UserAdmin

from .models import Professeur

admin.site.register(Professeur)
# Register your models here.
