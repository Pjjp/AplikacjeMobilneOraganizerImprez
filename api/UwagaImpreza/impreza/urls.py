from django.urls import path

from . import views
from rest_framework.urlpatterns import format_suffix_patterns

urlpatterns = [
    path('', views.LocalApi.as_view()),
    path('<int:pk>', views.LocalDetalisApi.as_view()),
]

urlpatterns = format_suffix_patterns(urlpatterns)
