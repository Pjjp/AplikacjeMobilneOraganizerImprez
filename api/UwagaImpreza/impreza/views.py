
from django.http import Http404
from .models import Local
from .models import Guest
from .models import Host

from .serializers import LocalSerializer
from .serializers import GuestSerializer
from .serializers import HostSerializer
from .serializers import UserAvatarSerializer

from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.parsers import FileUploadParser


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


class GuestApi(APIView):

    def get(self, request, *args, **kwargs):
        cords = Guest.objects.all()
        serializer = GuestSerializer(cords, many=True)
        return Response(serializer.data)

    def post(self, request, *args, **kwargs):
        serializer = GuestSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class GuestDetalisApi(APIView):

    def get_guest(self, pk):
        try:
            return Guest.objects.get(pk=pk)
        except:
            raise Http404

    def get(self, request, pk, *args, **kwargs):
        cords = self.get_guest(pk)
        serializer = GuestSerializer(cords)
        return Response(serializer.data)

    def put(self, request, pk, *args, **kwargs):
        cords = self.get_local(pk)
        serializer = GuestSerializer(cords, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk, *args, **kwargs):
        cords = self.get_local(pk)
        cords.delete()
        return Response(status=status.HTTP_202_NO_CONTENT)

class HostApi(APIView):

    def get(self, request, *args, **kwargs):
        cords = Host.objects.all()
        serializer = HostSerializer(cords, many=True)
        return Response(serializer.data)

    def post(self, request, *args, **kwargs):
        serializer = HostSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class HostDetalisApi(APIView):

    def get_host(self, pk):
        try:
            return Host.objects.get(pk=pk)
        except:
            raise Http404

    def get(self, request, pk, *args, **kwargs):
        cords = self.get_host(pk)
        serializer = HostSerializer(cords)
        return Response(serializer.data)

    def put(self, request, pk, *args, **kwargs):
        cords = self.get_host(pk)
        serializer = HostSerializer(cords, data=request.data)
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