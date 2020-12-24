from django.urls import path

from . import views
from rest_framework.urlpatterns import format_suffix_patterns

urlpatterns = [
    path('location/', views.LocalApi.as_view()),
    path('location/<int:pk>', views.LocalDetalisApi.as_view()),
    path('user/', views.UserApi.as_view()),
    path('user/<int:pk>', views.UserDetalisApi.as_view()),
    path('', views.UserAvatarUpload.as_view())
]

urlpatterns = format_suffix_patterns(urlpatterns)
