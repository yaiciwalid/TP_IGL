from rest_framework.serializers import (
    HyperlinkedIdentityField,
    ModelSerializer,
    SerializerMethodField,
    ValidationError,
    HyperlinkedModelSerializer
)

from django.db import models

from users.models import Professeur
from rest_framework.authtoken.models import Token


class ProfesseurSerializers(HyperlinkedModelSerializer):
    class Meta:
        model = Professeur
        fields = ['username',
                  'email',
                  'password',
                  'Nom',
                  'Prenom',
                  'Group1',
                  'Group2',
                  'Group3',
                  'Group4',
                  'Module1',
                  'Module2',
                  'Module3',
                  ]
        extra_kwargs = {"password" : {"write_only" : True}}







class AjoutProfesseurSerializers(ModelSerializer):
    email  = models.EmailField()
    email2 = models.EmailField(max_length=30)
    class Meta:
        model = Professeur
        fields = ['username',
                  'email',
                  'password',
                  'Nom',
                  'Prenom',
                  'Group1',
                  'Group2',
                  'Group3',
                  'Group4',
                  'Module1',
                  'Module2',
                  'Module3',
                  ]

        extra_kwargs = {"password" : {"write_only" : True}}


        def validate(self, data):
            return data

        def create(self,validated_data):
            username = validated_data['username']
            email    = validated_data['email']
            password = validated_data['password']
            Nom      = validated_data['Nom']
            Prenom   = validated_data['Prenom']
            Group1   = validated_data['Group1']
            Group2    = validated_data['Group2']
            Group3     = validated_data['Group3']
            Group4     = validated_data['Group4']
            Module1    = validated_data['Module1']
            Module2    = validated_data['Module2']
            Module3    = validated_data['Module3']
            token = Token

            user_obj = Professeur(
                username = username,
                email = email,
                Nom = Nom,
                Prenom = Prenom,
                Group1 = Group1,
                Group2 = Group2,
                Group3 = Group3,
                Group4 = Group4,
                Module1 = Module1,
                Module2 = Module2,
                Module3 = Module3,
                token = token
            )

            user_obj.set_password(password)
            user_obj.save()

            return validated_data

class UserLoginSerializer(HyperlinkedModelSerializer):
    username = models.CharField(max_length=30)
    # email = EmailField(label="Adresse mail" ,required=False,allow_blank=True)
    class Meta:
        model = Professeur
        fields = ['username','password'] #token
        # extra_kwargs = {"passwod": {"write_only": True}}

