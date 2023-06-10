from django.db import models

# Create your models here.

class Client(models.Model):
    name = models.CharField(max_length=200)
    email = models.CharField(max_length=200)
    document_number = models.CharField(max_length=51)
    birthdate = models.DateField()
    created_date = models.DateField(auto_now_add=True)

    def __str__(self):
        return self.name