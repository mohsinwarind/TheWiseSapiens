from django.shortcuts import render
from django.http import Http404
# Create your views here.
def events(request):
    return render(request,"events/event.html")


def event(request,slug):
    template_name = f"events/{slug}.html"
    try:
        return render(request,template_name)
    except:
        return Http404

