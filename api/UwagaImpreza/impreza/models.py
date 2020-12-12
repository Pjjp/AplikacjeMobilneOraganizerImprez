from django.db import models
from django.conf import settings
#
# BASIC_MODELS
#


class GeographicCords(models.Model):
    direction = models.CharField(max_length=10) ## north or south, east or west
    degrees = models.IntegerField(default=1)
    minutes = models.IntegerField(default=1)
    seconds = models.IntegerField(default=1)

    def __str__(self):
        return f'CordinatesDirection: {self.direction}'


class Cordinates(models.Model):
    ns = models.ForeignKey(GeographicCords, null=True, on_delete= models.SET_NULL, related_name='%(class)s_ns_created')
    we = models.ForeignKey(GeographicCords, null=True, on_delete= models.SET_NULL, related_name='%(class)s_we_created')

    def __str__(self):
        return f'Cordinates: {self.ns}, {self.we}'


class AgeSpan(models.Model):
    min_age = models.IntegerField(default=1)
    max_age = models.IntegerField(default=1)

    def __str__(self):
        return f'AgeSpan: {self.min_age}: {self.max_age}'


class RoomState(models.Model):
    age_span = models.ForeignKey(AgeSpan, null=True, on_delete= models.SET_NULL)
    is_open = models.BooleanField()
    member_count = models.IntegerField(default=1)
    max_member_count = models.IntegerField(default=1)
    is_selction = models.BooleanField()

    def __str__(self):
        return f'RoomWith: {self.age_span}'

#
# MAIN_MODELS
#


class Local(models.Model):
    local_name = models.CharField(max_length=20)
    room_state = models.ForeignKey(RoomState, null=True, on_delete= models.SET_NULL)
    date = models.DateField(auto_now=True)
    local_location = models.ForeignKey(Cordinates, null=True, on_delete= models.SET_NULL, related_name='%(class)s_local_created')

    def __str__(self):
        return self.local_name


class Guest(models.Model):

    SEX_CHOICES = (
        ('male', 'Male'),
        ('female', 'Female'),
    )

    name = models.CharField(max_length=20)
    # email = models.EmailField(unique=True)
    email = models.EmailField(null=True, blank=True)
    description = models.CharField(max_length=3000)
    age = models.IntegerField(default=1)
    sex = models.CharField(max_length=10, choices=SEX_CHOICES)
    avatar = models.ImageField(upload_to='images/%Y/%m/%d', blank=True)
    location = models.ForeignKey(
        Cordinates, null=True, on_delete=models.CASCADE,
        related_name='%(class)s_guest_created')

    def __str__(self):
        return self.name


class Host(Guest):
    # host_location = models.ForeignKey(Cordinates, null=True, on_delete= models.SET_NULL)

    def __str__(self):
        return self.name


class File(models.Model):
    file = models.FileField(blank=False, null=False)
    
    def __str__(self):
        return self.file.name
