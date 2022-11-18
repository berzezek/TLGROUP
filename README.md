## TLGROUP TECHNICAL PREVIEW

---

### To view the working version, you can visit [tlgroup.cn73530.tmweb.ru](http://tlgroup.cn73530.tmweb.ru)

### BACKEND

1. First, clone this repo to your local system. After you clone the repo, make sure
   to run the `setup.py` file, so you can install any dependencies you may need. To
   run the `setup.py` file, run the following command in your terminal.

```console
python3 -m vevn venv
source venv/bin/activate
pip install -r requirements.txt .
```

create backend.locale_settings.py with:

```python
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
        'HOST': '188.225.40.227',
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

```python
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('base.urls')),
    path('api/v1/', include('base.api.urls')),
]
```

3. Run ``python3 manage.py migrate`` to create the department and employees models.


4. Run ``python3 manage.py createsuperuser`` to create superuser.

   <em>Optional: Run ``python manage.py test`` to run test.</em>


5. Run ``python3 manage.py runserver`` to run server.
   Start the development server and visit http://127.0.0.1:8000/admin/
   to create, read, update or delete a department and employee (you'll need the Admin app enabled).

6. To create a department structure, you can go in a simpler way:
   Run `` python manage.py shell_plus``.

```bazaar
Python 3.10.6 (main, Nov  2 2022, 18:53:38) [GCC 11.3.0] on linux
Type "help", "copyright", "credits" or "license" for more information.
(InteractiveConsole)
>>> from base.utils import create_tl_base 
>>> create_tl_base()
```

    function create_tl_base(department_depth_level: Integer, max_division: Integer, employee_count: Integer)
    
        - department_depth_level - how many levels of departments will be created (default=5)

        - max_division - random divisions will be created in each department (default=random.randint(1, 3))

        - employee_count - how many employees will be created in each department (default=2000)

7. Visit [API DOCUMENTATION](https://documenter.getpostman.com/view/16706893/2s8YehVHSC) to view API documentation.

---

### Frontend:

    - update frontend/.env file with your backend url
      ``VITE_BASE_URL=http://127.0.0.1:8000/api/v1/``

    - cd frontend
    - npm install
    - npm run serve
    - visit http://localhost:5173

   For production build:

    - npm run build




