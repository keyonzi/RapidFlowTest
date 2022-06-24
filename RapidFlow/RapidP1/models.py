from django.db import models


class Intersection(models.Model):
    name = models.CharField(max_length=50, blank=True)
    traffic = models.IntegerField(default=0, blank=True)
    a1 = models.CharField(max_length=50, blank=True)
    a1_num = models.IntegerField(default=0, blank=True)
    a2 = models.CharField(max_length=50, blank=True)
    a2_num = models.IntegerField(default=0, blank=True)
    a3 = models.CharField(max_length=50, blank=True)
    a3_num = models.IntegerField(default=0, blank=True)
    a4 = models.CharField(max_length=50, blank=True)
    a4_num = models.IntegerField(default=0, blank=True)

    def __str__(self):
        return self.name


class Approach(models.Model):
    name = models.CharField(max_length=50)
    traffic = models.IntegerField(default=0)
    d1 = models.CharField(max_length=50)
    d1_num = models.IntegerField(default=0)
    d2 = models.CharField(max_length=50)
    d2_num = models.IntegerField(default=0)
    d3 = models.CharField(max_length=50)
    d3_num = models.IntegerField(default=0)
    d4 = models.CharField(max_length=50)
    d4_num = models.IntegerField(default=0)

    def __str__(self):
        return self.name


#defining a simple class
class Editors(models.Model):
    editor_name = models.CharField(max_length=200)
    num_users = models.IntegerField()

    def __str__(self):
        return "{}-{}".format(self.editor_name, self.num_users)

