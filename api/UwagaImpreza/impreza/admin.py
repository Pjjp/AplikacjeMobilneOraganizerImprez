from django.contrib import admin

from .models import GeographicCords
from .models import Cordinates
from .models import AgeSpan
from .models import RoomState
from .models import Local
from .models import Guest
from .models import Host

admin.site.register(GeographicCords)
admin.site.register(Cordinates)
admin.site.register(AgeSpan)
admin.site.register(RoomState)
admin.site.register(Local)
admin.site.register(Guest)
admin.site.register(Host)
