from django.shortcuts import render
from users.models import Professeur
from users.serializer import AjoutProfesseurSerializers ,UserLoginSerializer,ProfesseurSerializers
from rest_framework.permissions import IsAuthenticated
from rest_framework.permissions import AllowAny
import json
import requests

from django.shortcuts import render
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.parsers import JSONParser
from rest_framework import viewsets
from django.core.exceptions import ValidationError

from rest_framework.authtoken.models import Token
from django.contrib.auth import authenticate


from rest_framework.generics import (
    CreateAPIView,
    ListAPIView,
)

class AjoutProfesseurView(CreateAPIView):
    # permission_classes = [IsAuthenticated]
    serializer_class = AjoutProfesseurSerializers
    queryset = Professeur.object.all()

@api_view(['GET'])
def porfile_professeur(request, pk):
        try:
            professeur = Professeur.object.get(pk=pk)
        except Professeur.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)
        if request.method == 'GET':
            serializer = ProfesseurSerializers(professeur)
            return Response(serializer.data)

@api_view(['GET'])
def professeur(request):
    if request.method == 'GET':
        list = Professeur.object.all()
        serialize = ProfesseurSerializers(list, many=True)
        return Response(serialize.data)

@api_view(['POST'])
def login(request):
    if request.method == 'POST':
        data = JSONParser().parse(request)
        serialize = UserLoginSerializer(data=data)
        if serialize.is_valid():
            print(serialize.data.get('username'))
            username = serialize.data.get('username')
            password = serialize.data.get('password')
            user = Professeur.object.all().filter(email=username).first()
            if user is not None:
                if user.check_password(password):
                    # user = authenticate(username=username,password=password)
                    url = '/professeur/'+ str(user.id)+'/'
                    if user.is_admin == True:
                        is_admin = True
                    else:
                        is_admin = False

                    data = {'profile': url
                        ,'is_admin': is_admin}
                    return Response(data,status=status.HTTP_200_OK)
                else:
                    raise ValidationError('Mot de pass incorrecte')
            else :
                raise ValidationError('Nom d''utilisateur incorrecte')


class UserLoginAPIView(viewsets.ModelViewSet):
    permission_classes = [AllowAny]
    serializer_class = UserLoginSerializer

# Create your views here.
