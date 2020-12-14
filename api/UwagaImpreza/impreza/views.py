
from django.http import Http404
from .models import Local
from .models import User

from .serializers import LocalSerializer
from .serializers import UserSerializer
from .serializers import UserAvatarSerializer

from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response


class LocalApi(APIView):

    def get(self, request, *args, **kwargs):
        cords = Local.objects.all()
        serializer = LocalSerializer(cords, many=True)
        return Response(serializer.data)

    def post(self, request, *args, **kwargs):
        serializer = LocalSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class LocalDetalisApi(APIView):

    def get_local(self, pk):
        try:
            return Local.objects.get(pk=pk)
        except:
            raise Http404

    def get(self, request, pk, *args, **kwargs):
        cords = self.get_local(pk)
        serializer = LocalSerializer(cords)
        return Response(serializer.data)

    def put(self, request, pk, *args, **kwargs):
        cords = self.get_local(pk)
        serializer = LocalSerializer(cords, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk, *args, **kwargs):
        cords = self.get_local(pk)
        cords.delete()
        return Response(status=status.HTTP_202_NO_CONTENT)


class UserApi(APIView):

    def get(self, request, *args, **kwargs):
        cords = User.objects.all()
        serializer = UserSerializer(cords, many=True)
        return Response(serializer.data)

    def post(self, request, *args, **kwargs):
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class UserDetalisApi(APIView):

    def get_user(self, pk):
        try:
            return User.objects.get(pk=pk)
        except:
            raise Http404

    def get(self, request, pk, *args, **kwargs):
        cords = self.get_user(pk)
        serializer = UserSerializer(cords)
        return Response(serializer.data)

    def put(self, request, pk, *args, **kwargs):
        cords = self.get_local(pk)
        serializer = UserSerializer(cords, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk, *args, **kwargs):
        cords = self.get_local(pk)
        cords.delete()
        return Response(status=status.HTTP_202_NO_CONTENT)


class UserAvatarUpload(APIView):
    # parser_classes = [MultiPartParser, FormParser]
    # permission_classes = [IsAuthenticated]

    def post(self, request, format=None):
        serializer = UserAvatarSerializer(data=request.data, instance=request.user)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)