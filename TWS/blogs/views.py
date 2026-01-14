from django.shortcuts import render
import os
from django.http import Http404
from django.conf import settings
# Create your views here.
def blogs(request):
    return render(request,"blogs/blogs.html")

def blog_page(request, slug):
    template_name = f"blogs/blogs_pages/{slug}.html"
    try:
        return render(request, template_name)
    except:
        raise Http404("Blog not found")

