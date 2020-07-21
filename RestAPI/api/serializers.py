from django.contrib.auth.models import User, Group
from rest_framework import serializers

from api.models import Etudiant





class EtudiantSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Etudiant
        fields = ['id','matricule','nom', 'prenom', 'email', 'groupe']

