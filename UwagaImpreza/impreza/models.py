from django.db import models

# Create your models here.

class GeographicCords(models.Model):
    direction = models.CharField(max_length=10) ## north or south, east or west
    degrees = models.IntegerField(default=1)
    minutes = models.IntegerField(default=1)
    seconds = models.IntegerField(default=1)

class Cordinates(models.Model):
    ns = models.ForeignKey(GeographicCords, null=True, on_delete= models.SET_NULL, related_name='%(class)s_ns_created')
    we = models.ForeignKey(GeographicCords, null=True, on_delete= models.SET_NULL, related_name='%(class)s_we_created')

class AgeSpan(models.Model):
    min_age = models.IntegerField(default=1)
    max_age = models.IntegerField(default=1)

class RoomState(models.Model):
    age_span = models.ForeignKey(AgeSpan, null=True, on_delete= models.SET_NULL)
    is_open = models.BooleanField()
    member_count = models.IntegerField(default=1)
    max_member_count = models.IntegerField(default=1)
    is_selction = models.BooleanField()

#
# MAIN_MODELS
#

class Local(models.Model):
    local_name = models.CharField(max_length=20)
    room_state = models.ForeignKey(RoomState, null=True, on_delete= models.SET_NULL)
    date = models.DateField(auto_now=True)
    local_location = models.ForeignKey(Cordinates, null=True, on_delete= models.SET_NULL, related_name='%(class)s_local_created')

class Guest(models.Model):
    name = models.CharField(max_length=20)
    description = models.CharField(max_length=30)
    age = models.IntegerField(default=1)
    sex = models.CharField(max_length=5)
    image = models.ImageField(null=True, blank=True)
    guest_location = models.ForeignKey(Cordinates, null=True, on_delete= models.SET_NULL, related_name='%(class)s_guest_created')

class Host(Guest):
    host_location = models.ForeignKey(Cordinates, null=True, on_delete= models.SET_NULL)