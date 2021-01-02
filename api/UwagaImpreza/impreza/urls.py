from django.urls import path

from . import views
from rest_framework.urlpatterns import format_suffix_patterns
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)


urlpatterns = [
    path('location/', views.LocalApi.as_view()),
    path('location/<int:pk>', views.LocalDetalisApi.as_view()),
    path('user/', views.UserApi.as_view()),
    path('user/<int:pk>', views.UserDetalisApi.as_view()),
    path('', views.UserAvatarUpload.as_view()),
    path('agespan/', views.AgeSpanApi.as_view()),
    path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]

urlpatterns = format_suffix_patterns(urlpatterns)
