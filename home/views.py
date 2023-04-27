from django.shortcuts import render
from django.http import JsonResponse
from django.middleware.csrf import get_token
from django.core.mail import send_mail
from .models import HomePage, AboutPage, SkillsPage, ProjectsPage, ContactPage, ProjectItem, SocialMedia
from .forms import MessageForm
# Create your views here.
def GetHomeData(request):
    try:
        home = HomePage.objects.filter(show_this=True)[0]
    except:
        home = HomePage.objects.get_or_create(id=1)[0]
    data = {
        "success": True,
        "homeData": {
            "desig_clr": home.desig_clr,
            "desig": home.desig,
            "name": home.name,
            "name_clr": home.name_clr,
            "profession": home.profession,
            "portfolio": home.portfolio
        },
    }
    return JsonResponse(data)

def GetAboutData(request):
    try:
        about = AboutPage.objects.filter(show_this=True)[0]
    except:
        about = AboutPage.objects.get_or_create(id=1)[0]

    data = {
        "success": True,
        "aboutData": {
            "heading": about.heading,
            "sub_heading": about.sub_heading,
            "paragraph": about.paragraph,
        }
    }
    return JsonResponse(data)

def GetSkillsData(request):
    try:
        skills = SkillsPage.objects.filter(show_this=True)[0]
    except:
        skills = SkillsPage.objects.get_or_create(id=1)[0]
    data = {
        "success": True,
        "skillsData": {
            "heading": skills.heading,
            "sub_heading": skills.sub_heading,
            "paragraph": skills.paragraph,
        }
    }
    return JsonResponse(data)

def GetProjectsData(request):
    try:
        projects = ProjectsPage.objects.filter(show_this=True)[0]
    except:
        projects = ProjectsPage.objects.get_or_create(id=1)[0]
    data = {
        "success": True,
        "projectsData": {
            "heading": projects.heading,
        }
    }
    return JsonResponse(data)

def GetContactData(request):
    try:
        contact = ContactPage.objects.filter(show_this=True)[0]
    except:
        contact = ContactPage.objects.get_or_create(id=1)[0]
    data = {
        "success": True,
        "contactData": {
            "heading": contact.heading,
        }
    }
    return JsonResponse(data)

def GetAllProjects(request):
    projects = ProjectItem.objects.filter(show_this=True)
    if not len(projects) == 0:
        projects_list = []
        for project in projects:
            projects_list.append({
                "name": project.name,
                "para": project.para,
                "github": project.github_url,
                "project_url": project.project_url,
                "skills": project.skills
            })
        data = {
            "success": True,
            "projects": projects_list
        }
        return JsonResponse(data)
    else:
        data = {
            "success": False,
            "projects": []
        }
        return JsonResponse(data)

def GetAllSocials(request):
    socials = SocialMedia.objects.filter(show_this=True)
    if not len(socials) == 0:
        socials_list = []
        for social in socials:
            socials_list.append({
                "icon": social.icon,
                "link": social.link,
                "inNewTab": social.inNewTab,
            })
        data = {
            "success": True,
            "socials": socials_list
        }
        return JsonResponse(data)
    else:
        data = {
            "success": False,
            "socials": []
        }
        return JsonResponse(data)

def getCSRFtoken(request):
    token = get_token(request)
    data = {
        "success": True,
        "token": token
    }
    return JsonResponse(data)

def sendEmail(request):
    if request.method == "POST":
        Name = request.POST.get("Name")
        Email = request.POST.get("Email")
        Message = request.POST.get("Message")
        form = MessageForm(request.POST)
        if form.is_valid():
            form.save()
        send_mail(
            "Test Message", 
            f"{Name} | {Email} | {Message}", 
            'auroraborealisac@gmail.com', 
            ['armaanchaand89@gmail.com'],
            fail_silently=False,
        )
        data = {
            "Name": Name,
            "Email": Email,
            "Message": Message,
        }
        return JsonResponse(data)