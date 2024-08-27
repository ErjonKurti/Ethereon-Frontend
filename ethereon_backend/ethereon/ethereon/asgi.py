"""
ASGI config for ethereon project.

It exposes the ASGI callable as a module-level variable named ``application``.

https://docs.djangoproject.com/en/5.0/howto/deployment/asgi/
"""

import os

from django.core.asgi import get_asgi_application

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'ethereon.settings')

application = get_asgi_application()
