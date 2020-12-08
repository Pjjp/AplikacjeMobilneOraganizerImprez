from django.urls import path

from . import views
from rest_framework.urlpatterns import format_suffix_patterns

urlpatterns = [
    path('location/', views.LocalApi.as_view()),
    path('location/<int:pk>', views.LocalDetalisApi.as_view()),
    path('guest/', views.GuestApi.as_view()),
    path('guest/<int:pk>', views.GuestDetalisApi.as_view()),
    path('host/', views.HostApi.as_view()),
    path('host/<int:pk>', views.HostDetalisApi.as_view()),
]

urlpatterns = format_suffix_patterns(urlpatterns)
