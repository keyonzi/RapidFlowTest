from django.shortcuts import render
from django.http import Http404
from django.http import HttpResponse

from .models import Intersection
from .models import Approach
from .models import Editors
from django.views.generic import TemplateView


def home(request):
    intersections = Intersection.objects.all()
    approaches = Approach.objects.all()
    context = Editors.objects.all()

    # for app in approaches:


    # return HttpResponse('<p> This is test</p>')
    return render(request, 'home.html',  # the name of the template you want
                  {
        'inters': intersections,   # data passed as a dictionary, the keys must be strings
        'appro': approaches,  # data passed as a dictionary, the keys must be strings
        'qs': context,
    })


# Creating views
class EditorChartView(TemplateView):
    template_name = 'editors/chart.html'

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context["qs"] = Editors.objects.all()
        return context