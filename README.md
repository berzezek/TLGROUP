# TLGROUP TECHNICAL PREVIEW

## Table of Contents

- [Setup](#setup)
- [Usage](#usage)

## Setup

First, clone this repo to your local system. After you clone the repo, make sure
to run the `setup.py` file, so you can install any dependencies you may need. To
run the `setup.py` file, run the following command in your terminal.

```console
pip install -r requirements.txt .
```
create base.locale_settings.py with:

```
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

    
        
```

2. Include the polls URLconf in your project urls.py like this::

from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/v1/', include('base.api.urls')),
]


3. Run ``python manage.py migrate`` 
    (or ``python manage.py migrate`` on macOS or Linux) to create the department and employees models.


4. Start the development server and visit http://127.0.0.1:8000/admin/
   to create a department and employee (you'll need the Admin app enabled).


5. 'python manage.py runserver' to run server 


6. Visit https://documenter.getpostman.com/view/16706893/2s8YehVHSC to view API documentation.


This will install all the dependencies listed in the `setup.py` file. Once done
you can use the library wherever you want.

7. Frontend:

```console
cd frontend
npm install
npm run dev
```
for production:
```console
npm run build
```

## Usage

Here is a simple example of using the `TLGROUP` library to get data about an employee working in a department.


