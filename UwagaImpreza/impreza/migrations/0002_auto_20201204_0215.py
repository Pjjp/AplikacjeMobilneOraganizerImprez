# Generated by Django 3.1.4 on 2020-12-04 02:15

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('impreza', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='AgeSpan',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('min_age', models.IntegerField(default=1)),
                ('max_age', models.IntegerField(default=1)),
            ],
        ),
        migrations.CreateModel(
            name='Cordinates',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
            ],
        ),
        migrations.CreateModel(
            name='GeographicCords',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('direction', models.CharField(max_length=10)),
                ('degrees', models.IntegerField(default=1)),
                ('minutes', models.IntegerField(default=1)),
                ('seconds', models.IntegerField(default=1)),
            ],
        ),
        migrations.CreateModel(
            name='Guest',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=20)),
                ('description', models.CharField(max_length=30)),
                ('age', models.IntegerField(default=1)),
                ('sex', models.CharField(max_length=5)),
                ('image', models.ImageField(blank=True, null=True, upload_to='')),
                ('guest_location', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='guest_guest_created', to='impreza.cordinates')),
            ],
        ),
        migrations.CreateModel(
            name='Local',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('local_name', models.CharField(max_length=20)),
                ('date', models.DateField(auto_now=True)),
                ('local_location', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='local_local_created', to='impreza.cordinates')),
            ],
        ),
        migrations.CreateModel(
            name='RoomState',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('is_open', models.BooleanField()),
                ('member_count', models.IntegerField(default=1)),
                ('max_member_count', models.IntegerField(default=1)),
                ('is_selction', models.BooleanField()),
                ('age_span', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='impreza.agespan')),
            ],
        ),
        migrations.DeleteModel(
            name='Person',
        ),
        migrations.AddField(
            model_name='local',
            name='room_state',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='impreza.roomstate'),
        ),
        migrations.AddField(
            model_name='cordinates',
            name='ns',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='cordinates_ns_created', to='impreza.geographiccords'),
        ),
        migrations.AddField(
            model_name='cordinates',
            name='we',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='cordinates_we_created', to='impreza.geographiccords'),
        ),
        migrations.CreateModel(
            name='Host',
            fields=[
                ('guest_ptr', models.OneToOneField(auto_created=True, on_delete=django.db.models.deletion.CASCADE, parent_link=True, primary_key=True, serialize=False, to='impreza.guest')),
                ('host_location', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='impreza.cordinates')),
            ],
            bases=('impreza.guest',),
        ),
    ]
