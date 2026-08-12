from django.db import models

# Create your models here.
class Profile(models.Model):
    full_name=models.CharField(max_length=100)
    title=models.CharField(max_length=150)
    short_intro=models.CharField(max_length=250)
    about=models.TextField()
    resume=models.FileField(upload_to="resume/")
    email=models.EmailField()
    phone=models.IntegerField(max_length=15)
    location=models.CharField(max_length=100)
    github=models.URLField()
    linkedin=models.URLField()
    view_project_link=models.CharField(
        max_length=100,
        default="#projects"
    )
    
    def __str__(self):
        return self.full_name
    
class Skill(models.Model):
    Category=(
        ("Frontend","Frontend"),
        ("Backend","Backend"),
        ("Database","Database"),
        ("Tools","Tools"),
        ("Language","Language")
    )    
    
    name=models.CharField(max_length=50)
    
    Category=models.CharField(max_length=20,choices=Category)
    
    percentage=models.IntegerField()
    
    icon=models.CharField(max_length=100)
    
    def __str__(self):
        return self.name
    
class Project(models.Model):
    title=models.CharField(max_length=100)
    description=models.TextField()
    image=models.ImageField(upload_to="images/projects/")
    github=models.URLField()
    technology=models.CharField(max_length=250)
    
    def __str__(self):
        return self.title
    
class Experience(models.Model):
    company=models.CharField(max_length=100)
    role=models.CharField(max_length=100)
    duration=models.CharField(max_length=50)
    description=models.TextField()
    
    def __str__(self):
        return self.company
    
class Education(models.Model):
    institute=models.CharField(max_length=200)
    degree=models.CharField(max_length=200)
    start_year=models.IntegerField()
    end_year=models.IntegerField()
    percentage=models.CharField(max_length=10, blank=True, null=True)
    Pointer=models.CharField(max_length=10,blank=True, null=True)
    
    def __str__(self):
        return self.degree
    
class Certificate(models.Model):
    title=models.CharField(max_length=150)
    image=models.ImageField(upload_to="certificates/")
    
    def __str__(self):        
        return self.title
    
class Contact(models.Model):
    name=models.CharField(max_length=100)
    email=models.EmailField()
    subject=models.CharField(max_length=200)
    message=models.TextField()
    def __str__(self):
        return self.name
    
  
    
        
        
        