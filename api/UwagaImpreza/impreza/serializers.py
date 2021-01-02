
from .models import (
    GeographicCords,
    Cordinates,
    AgeSpan,
    RoomState,
    Local,
    User,
)

from rest_framework import serializers


class GeographicCordsSerializer(serializers.ModelSerializer):

    class Meta:
        model = GeographicCords
        fields = '__all__'


class CordinatesSerializer(serializers.ModelSerializer):

    ns = GeographicCordsSerializer(
        many=False,
        read_only=True,
    )
    we = GeographicCordsSerializer(
        many=False,
        read_only=True,
    )

    class Meta:
        model = Cordinates
        fields = ['ns', 'we']


class AgeSpanSerializer(serializers.ModelSerializer):

    class Meta:
        model = AgeSpan
        fields = '__all__'


class RoomStateSerializer(serializers.ModelSerializer):

    age_span = AgeSpanSerializer(
        many=False,
        read_only=True,
    )

    class Meta:
        model = RoomState
        fields = [
            'age_span', 'is_open', 'member_count',
            'max_member_count', 'is_selction']


from django.contrib.auth.hashers import make_password


def validate_password(value: str) -> str:
    return make_password(value)


class UserSerializer(serializers.ModelSerializer):

    location = CordinatesSerializer(
        many=False,
        read_only=True,
    )

    class Meta:
        model = User
        fields = [
            'password', 'username', 'email', 'description', 'age',
            'sex', 'avatar', 'location']

    password = serializers.DateField(validators=[validate_password])


class LocalSerializer(serializers.ModelSerializer):

    local_location = CordinatesSerializer(
        many=False,
        read_only=True,
    )
    room_state = RoomStateSerializer(
        many=False,
        read_only=True,
    )
    guests = UserSerializer(
        # many=True,
        many=False,
        read_only=True,
    )
    host = UserSerializer(
        many=False,
        read_only=True,
    )

    class Meta:
        model = Local
        fields = [
            'local_name', 'room_state', 'date',
            'local_location', 'guests', 'host']

    def create(self, validated_data):
        guests = validated_data.pop('guests')
        local = Local.objects.create(**validated_data)
        for guest_data in guests:
            User.objects.create(local=local, **guest_data)
        return local


class UserAvatarSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["avatar"]

    def save(self, *args, **kwargs):
        if self.instance.avatar:
            self.instance.avatar.delete()
        return super().save(*args, **kwargs)
