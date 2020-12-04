from django.contrib import admin

from .models import Local
from .models import Guest
from .models import Host

# Register your models here.
admin.site.register(Local)
admin.site.register(Guest)
admin.site.register(Host)