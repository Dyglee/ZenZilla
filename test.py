# test.py
import requests

base_url = 'http://127.0.0.1:5000/api'

signup_data = {
    'username': 'testuser111',
    'email': 'testuserr21@example.com',
    'password': 'password123'
}

login_data = {
    'email': 'testuserr21@example.com',
    'password': 'password123'
}

response = requests.post(f'{base_url}/signup', json=signup_data)
print('Signup response:', response.json())

response = requests.post(f'{base_url}/login', json=login_data)
print('Login response:', response.json())
