from django.db import models


class Etudiant(models.Model):
    matricule = models.CharField(max_length=7, blank=False, default="xxxxx" )
    nom = models.CharField(max_length=30)
    prenom = models.CharField(max_length=30)
    email = models.EmailField()
    groupe = models.CharField(max_length=5, blank=False, default="xCyz")

    def __str__(self):
        return self.matricule

    class Meta :
        ordering = ['nom']













# Create your models here.
