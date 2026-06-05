from django.contrib import admin
from django.urls import path

from .views import home,about,contact,skills,projects,education

urlpatterns = [
    path('', home, name="home"),
    path('about/', about, name="about"),
    path('contact/', contact, name="contact"),
    path('skills/', skills, name="skills"),
    path('projects/', projects, name="projects"),
    path('education/', education, name="education"),
]