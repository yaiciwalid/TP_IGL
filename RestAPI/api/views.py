from django.shortcuts import render

from django.contrib.auth.models import User, Group
from rest_framework import viewsets
from .serializers import  EtudiantSerializer
from api.models import Etudiant
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.parsers import JSONParser

from rest_framework.authentication import SessionAuthentication, BasicAuthentication
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView

import json

from decimal import Decimal
from base64 import b64encode, b64decode
from json import dumps, loads, JSONEncoder
import pickle

class PythonObjectEncoder(JSONEncoder):
    def default(self, obj):
        if isinstance(obj, (list, dict, str, int, float, bool, type(None))):
            return super().default(obj)
        return {'_python_object': b64encode(pickle.dumps(obj)).decode('utf-8')}

def as_python_object(dct):
    if '_python_object' in dct:
        return pickle.loads(b64decode(dct['_python_object'].encode('utf-8')))
    return dct



@api_view(['GET'])
def list_group(request):
    list = Etudiant.objects.all()
    list_group = set()
    for etuiant in list:
        list_group.add(etuiant.groupe)
    print(list_group)
    j = dumps(list_group, cls=PythonObjectEncoder)
    return Response(loads(j, object_hook=as_python_object),status=status.HTTP_200_OK)




@api_view(['GET'])
def etudiant_goupe(request,group,format=None):
    if request.method == 'GET':
        list = Etudiant.objects.all().filter(groupe=group)
        serialize = EtudiantSerializer(list, many=True )
        return Response(serialize.data,status=status.HTTP_200_OK)



@api_view(['GET','POST'])
def etudiant_list(request , format=None):
    if request.method == 'GET':
        list = Etudiant.objects.all()
        serialize = EtudiantSerializer(list , many=True)
        return Response(serialize.data)
    elif request.method == 'POST' :
        data = JSONParser().parse(request)
        serialize = EtudiantSerializer(data=data)
        if serialize.is_valid():
            serialize.save()
            return Response(serialize.data, status=status.HTTP_200_OK)
        return Response(serialize.data, status=status.HTTP_400_BAD_REQUEST)







@api_view(['GET', 'PUT', 'DELETE'])
def etudiant_detail(request, pk, format=None) :
    try:
        etudiant = Etudiant.objects.get(pk=pk)
    except Etudiant.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = EtudiantSerializer(etudiant)
        return Response(serializer.data)
    elif request.method == 'PUT':
        data = JSONParser().parse(request)
        serializer = EtudiantSerializer(Etudiant, data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == "DELETE":
        etudiant.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)





class EtudiantViewSet(viewsets.ModelViewSet):
    permission_classes = [IsAuthenticated]
    authentication_classes = [SessionAuthentication,BasicAuthentication]
    queryset = Etudiant.objects.all()
    serializer_class = EtudiantSerializer




# Create your views here.
