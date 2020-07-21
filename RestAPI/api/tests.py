from django.test import TestCase,Client
from django.urls import reverse
from .models import Etudiant

import json

class TestEtudiant(TestCase):

    def test_etudiant_list(self):
        response = self.client.get('/etudiant/')
        self.assertEqual(response.status_code, 200)

    def test_ajout_etudiant(self):
        response = self.client.get('/etudiant/')
        self.assertEqual(response.status_code, 200)
