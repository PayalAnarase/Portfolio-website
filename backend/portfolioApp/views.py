from django.shortcuts import render

from rest_framework import generics
from .models import *
from .serializers import *

# Create your views here.

class ProfileView(generics.ListAPIView):
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer
    
class SkillView(generics.ListAPIView):
    queryset = Skill.objects.all()
    serializer_class = SkillSerializer
    
class ProjectView(generics.ListAPIView):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer
    
class ExperienceView(generics.ListAPIView):
    queryset = Experience.objects.all()
    serializer_class = ExperienceSerializer
    
class EducationView(generics.ListAPIView):
    queryset = Education.objects.all()
    serializer_class = EducationSerializer
    
class CertificateView(generics.ListAPIView): 
    queryset = Certificate.objects.all()
    serializer_class = CertificateSerializer  
    
class ContactCreateView(generics.CreateAPIView):
    queryset = Contact.objects.all()  
    serializer_class = ContactSerializer
                       