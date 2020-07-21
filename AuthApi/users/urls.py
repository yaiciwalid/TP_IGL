from django.conf.urls import url
from django.contrib import admin
from django.urls import path , include


from users.views import AjoutProfesseurView , porfile_professeur,professeur
from rest_framework.authtoken.views import obtain_auth_token
from users.views import login


urlpatterns = [
    url(r'^register/$', AjoutProfesseurView.as_view(), name = 'register'),
    path('professeur/<int:pk>/', porfile_professeur ),
    path('professeur/', professeur),
    path('login/', login),

    # path('login/',obtain_auth_token,name='login'),

]