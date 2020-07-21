from django.db import models

# Create your models here.

from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager


from django.conf import settings
from django.db.models.signals import post_save
from django.dispatch import receiver
from rest_framework.authtoken.models import Token



class ProfesseurManager(BaseUserManager):
     def create_user(self,email, username, Nom, Prenom,Group1, Module1, password=None):
         if not email:
             raise ValueError('Users must have an email')
         if not username:
             raise ValueError('Users must have an username')

         user = self.model(
                email    = self.normalize_email(email),
                username = username,
                Nom      = Nom,
                Prenom   = Prenom,
                Group1   = Group1,
                Module1  = Module1,
          )
         user.set_password(password)
         user.save(using = self._db)
         return user


     def create_superuser(self,email, username, Nom, Prenom,Group1, Module1, password=None):
         user = self.create_user(
             email=self.normalize_email(email),
             password = password,
             username=username,
             Nom=Nom,
             Prenom=Prenom,
             Group1 = Group1,
             Module1 = Module1,
         )
         user.is_admin  = True
         user.is_staff  = True
         user.superuser = True
         user.save(using=self._db)
         return user

class Professeur(AbstractBaseUser):
    email        = models.EmailField(verbose_name="email",unique=True)
    username     = models.CharField(max_length=30,unique=True)
    date_joined  = models.DateTimeField(verbose_name='date joined' ,auto_now_add=True)
    last_login   = models.DateTimeField(verbose_name='last login', auto_now=True)
    is_admin     = models.BooleanField(default=False,)
    is_active    = models.BooleanField(default=True)
    is_staff     = models.BooleanField(default=False)
    is_superuser = models.BooleanField(default=False)

    Nom      = models.CharField(max_length=30)
    Prenom   = models.CharField(max_length=30)



    Group1   =  models.CharField(max_length=10,)
    Group2   =  models.CharField(max_length=10,blank=True)
    Group3   =  models.CharField(max_length=10,blank=True)
    Group4   =  models.CharField(max_length=10,blank=True)

    Module1  = models.CharField(max_length=10)
    Module2  = models.CharField(max_length=10,blank=True)
    Module3  = models.CharField(max_length=10,blank=True)




    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username','Nom','Prenom','Group1','Module1']

    object = ProfesseurManager()

    def __str__(self):
        return self.email + ':' +  self.username

    def has_perm(self, perm , obj=None):
        return self.is_admin

    def has_module_perms(self, app_label):
        return True

@receiver(post_save, sender=settings.AUTH_USER_MODEL)
def create_auth_token(sender ,instance=None ,created=False, **kwargs):
    if created :
        Token.objects.create(user=instance)




