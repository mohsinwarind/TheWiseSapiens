from django.shortcuts import render
from pathlib import Path
from django.conf import settings
# Create your views here.
def about(request):
    return render(request, 'ngo/about.html')


def home(request):

    blog_dir = Path(settings.BASE_DIR) / "blogs/templates/blogs/blogs_pages"
    blog_count = len(list(blog_dir.glob("*.html")))-1
    print("Blog Count:", blog_count)
    return render(request, 'ngo/home.html', {'blog_count': blog_count})

def contact(request):
    return render(request,'ngo/contact.html')

def team(request):
    return render(request,"ngo/team.html")