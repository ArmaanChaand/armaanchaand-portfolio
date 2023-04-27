from django.db import models

# Create your models here.
class HomePage(models.Model):
    show_this  = models.BooleanField(default=False)
    desig_clr  = models.CharField(max_length=20, null=True, blank=True)
    desig      = models.CharField(max_length=20, null=True, blank=True)
    name       = models.CharField(max_length=100, null=True, blank=True)
    name_clr   = models.CharField(max_length=100, null=True, blank=True)
    profession = models.CharField(max_length=200, null=True, blank=True)
    portfolio  = models.TextField(null=True, blank=True)

class AboutPage(models.Model):
    show_this  = models.BooleanField(default=False)
    heading       = models.CharField(max_length=100, null=True, blank=True)
    sub_heading   = models.CharField(max_length=100, null=True, blank=True)
    paragraph     = models.TextField(null=True, blank=True)

    def __str__(self):
        return self.heading

class SkillsPage(models.Model):
    show_this  = models.BooleanField(default=False)
    heading       = models.CharField(max_length=100, null=True, blank=True)
    sub_heading   = models.CharField(max_length=100, null=True, blank=True)
    paragraph     = models.TextField(null=True, blank=True)

    def __str__(self):
        return self.heading

class ProjectsPage(models.Model):
    show_this  = models.BooleanField(default=False)
    heading       = models.CharField(max_length=150, null=True, blank=True)

    def __str__(self):
        return self.heading

class ContactPage(models.Model):
    show_this  = models.BooleanField(default=False)
    heading       = models.CharField(max_length=150, null=True, blank=True)

    def __str__(self):
        return self.heading

class ProjectItem(models.Model):
    show_this  = models.BooleanField(default=False)
    name        = models.CharField(max_length=100, null=True, blank=True)
    para        = models.TextField(null=True, blank=True)
    github_url  = models.URLField(null=True, blank=True)
    project_url = models.URLField(null=True, blank=True)
    skills = models.CharField(max_length=150, null=True, blank=True)
    
    def __str__(self):
        return self.name

class SocialMedia(models.Model):
    show_this  = models.BooleanField(default=False)
    icon        = models.TextField(null=True, blank=True)
    link        = models.URLField(null=True, blank=True)
    inNewTab    = models.BooleanField(default=True)

    def __str__(self):
        return self.link

class Messages(models.Model):
    Name = models.CharField(max_length=200, null=False, blank=False)
    Email = models.EmailField(null=False, blank=False)
    Message = models.TextField(null=False, blank=False)

    def __str__(self):
        return self.Email