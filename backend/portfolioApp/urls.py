from django.urls import path
from .views import *

urlpatterns = [
    path("profile/",ProfileView.as_view()),
    path("skills/",SkillView.as_view()),
    path("projects/",ProjectView.as_view()),
    path("experience/",ExperienceView.as_view()),
    path("education/",EducationView.as_view()),
    path("certificates/",CertificateView.as_view()),
    path("contact/",ContactCreateView.as_view()),
    
]
