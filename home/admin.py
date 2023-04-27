from django.contrib import admin
from .models import (HomePage, AboutPage, SkillsPage, ProjectsPage, ContactPage, ProjectItem, SocialMedia, Messages)
# Register your models here.
admin.site.register(HomePage)
admin.site.register(AboutPage)
admin.site.register(SkillsPage)
admin.site.register(ProjectsPage)
admin.site.register(ContactPage)
admin.site.register(ProjectItem)
admin.site.register(SocialMedia)
admin.site.register(Messages)