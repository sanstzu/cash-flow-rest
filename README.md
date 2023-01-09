# Introduction
This project is made using React as the frontend and Django REST API as the backend.\
To run this project:
1. Install django, djangorestframework and django-cors-headers\
```pip install django djangorestframework django-cors-headers```
2. Install requierd dependency in `cash_flow_tracker\transaction-frontend`\
```npm install```
3. Migrate the database from the backend.
```python manage.py migrate```
4. Run the backend server by running `manage.py` in the `cash_flow_tracker` folder\
```python manage.py runserver```
5. Run the site in `cash_flow_tracker\transaction-frontend`\
```npm start```

To access the website, simply open `localhost:3000` with the backend hosted at `localhost:8000`
