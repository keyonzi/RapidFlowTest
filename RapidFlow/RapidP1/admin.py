from django.contrib import admin

from .models import Intersection
from .models import Approach

from .models import Editors

admin.site.register(Editors)


@admin.register(Intersection)
class IntersectionAdmin(admin.ModelAdmin):
    list_display = ['name', 'traffic']


@admin.register(Approach)
class ApproachAdmin(admin.ModelAdmin):
    list_display = ['name', 'traffic']
