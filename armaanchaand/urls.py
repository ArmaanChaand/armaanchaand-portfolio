"""
URL configuration for armaanchaand project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from django.views.generic import TemplateView
from home.views import ( GetHomeData, GetAboutData, GetSkillsData, GetProjectsData, 
                        GetContactData, GetAllProjects, GetAllSocials, sendEmail, getCSRFtoken
                )

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/home/', GetHomeData, name="homedata-api"),
    path('api/about/', GetAboutData, name="aboutdata-api"),
    path('api/skills/', GetSkillsData, name="skillsdata-api"),
    path('api/projects/', GetProjectsData, name="projectsdata-api"),
    path('api/contact/', GetContactData, name="contactdata-api"),
    path('api/allprojects/', GetAllProjects, name="projects-api"),
    path('api/allsocials/', GetAllSocials, name="socials-api"),
    path('api/getcsrf/', getCSRFtoken, name="getcsrf-api"),
    path('api/sendemail/', sendEmail, name="sendemail-api"),
    path("", TemplateView.as_view(template_name='index.html'), name="homepage"),
]
