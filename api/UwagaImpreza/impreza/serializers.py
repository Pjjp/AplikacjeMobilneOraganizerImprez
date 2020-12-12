
from .models import (
    GeographicCords,
    Cordinates,
    AgeSpan,
    RoomState,
    Local,
    Guest,
    Host,
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


class LocalSerializer(serializers.ModelSerializer):

    local_location = CordinatesSerializer(
        many=False,
        read_only=True,
    )
    room_state = RoomStateSerializer(
        many=False,
        read_only=True,
    )

    class Meta:
        model = Local
        fields = ['local_name', 'room_state', 'date', 'local_location']


class GuestSerializer(serializers.ModelSerializer):

    location = CordinatesSerializer(
        many=False,
        read_only=True,
    )

    class Meta:
        model = Guest
        fields = [
            'name', 'email', 'description', 'age',
            'sex', 'avatar', 'location']


class HostSerializer(serializers.ModelSerializer):

    class Meta:
        model = Host
        fields = '__all__'


class UserAvatarSerializer(serializers.ModelSerializer):
    class Meta:
        model = Guest
        fields = ["avatar"]

    def save(self, *args, **kwargs):
        if self.instance.avatar:
            self.instance.avatar.delete()
        return super().save(*args, **kwargs)
