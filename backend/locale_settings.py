from pathlib import Path
import sys
from .settings import DATABASES_AVAILABLE


BASE_DIR = Path(__file__).resolve().parent.parent

DEBUG = True

ALLOWED_HOSTS = ['tlgroup.cn73530.tmweb.ru']

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [BASE_DIR / '../dist/'],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]
DATABASES = {}
if 'test' in sys.argv:
    DATABASES['default'] = DATABASES_AVAILABLE['test']

else:
    DATABASES['default'] = DATABASES_AVAILABLE['remote']


