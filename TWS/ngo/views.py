from django.shortcuts import render

# Create your views here.
def about(request):
    return render(request, 'ngo/about.html')


def home(request):
    return render (request,'ngo/home.html')

def contact(request):
    return render(request,'ngo/contact.html')

def team(request):
    return render(request,"ngo/team.html")