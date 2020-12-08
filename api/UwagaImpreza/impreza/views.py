from django.shortcuts import render

from django.http import HttpResponse

def index(request):
    return HttpResponse('halo')

# Create your views here.
