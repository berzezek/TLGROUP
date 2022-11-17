from pathlib import Path
import sys
from .settings import DATABASES_AVAILABLE


BASE_DIR = Path(__file__).resolve().parent.parent

DEBUG = True

ALLOWED_HOSTS = ['*']

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [BASE_DIR / 'frontend/dist/'],
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

DATABASES_AVAILABLE = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': BASE_DIR/'db.sqlite3',
    },
    'remote': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': 'cn73530_tlgroup',
        'USER': 'cn73530_tlgroup',
        'PASSWORD': 'Aa20102010',
        'HOST': 'localhost',
        'PORT': '3306',
    },
    'test': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': BASE_DIR/'test.sqlite3',
    },
}
if 'test' in sys.argv:
    DATABASES['default'] = DATABASES_AVAILABLE['test']

else:
    DATABASES['default'] = DATABASES_AVAILABLE['default']


