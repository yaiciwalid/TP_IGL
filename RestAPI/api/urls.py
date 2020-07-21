from django.urls import  path
from rest_framework.urlpatterns import format_suffix_patterns
from django.conf.urls import include
from django.contrib import admin


from api import views

urlpatterns =[
    path('admin/etudiant/doc/', include('django.contrib.admindocs.urls')),
    path('admin/etudiant/', admin.site.urls),
    path('etudiant/', views.etudiant_list),
    path('etudiant/<int:pk>', views.etudiant_detail),
    path('group/<group>',views.etudiant_goupe),
    path('groupes_list/',views.list_group)
]

urlpatterns = format_suffix_patterns(urlpatterns)