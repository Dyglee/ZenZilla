ZenZilla Meditation App
Overview
ZenZilla is a web-based application designed to help users practice mindfulness and meditation. The app allows users to create accounts, set their preferences for meditation sessions, and track their meditation history. It provides guided sessions with background music and customizable session durations.

Features
User Authentication: Signup and login functionalities with validation.
Preferences Management: Users can set their preferences including background images, session duration, number of sessions per day, and interval between sessions.
Guided Meditation Sessions: Start meditation sessions with background music and visual cues.
Session History: Track completed sessions and view history.
Project Structure
app.py: The main application file that initializes the Flask app and handles routes and API endpoints.
models/user.py: Defines the User model for SQLAlchemy.
static/css/styles.css: CSS styles for the application.
static/js/scripts.js: JavaScript file handling client-side functionality.
templates/index.html: Homepage template.
templates/home.html: User home page template.
templates/preferences.html: Preferences management page template.
templates/meditating.html: Meditation session page template.
Requirements
Python 3.8+
Flask
Flask-Session
Flask-SocketIO
SQLAlchemy
MySQL
Installation
Clone the repository:

bash
Copier le code
git clone https://github.com/yourusername/zenzilla.git
cd zenzilla
Create and activate a virtual environment:

bash
Copier le code
python -m venv venv
source venv/bin/activate  # On Windows use `venv\Scripts\activate`
Install dependencies:

bash
Copier le code
pip install -r requirements.txt
Set up the database:

Ensure MySQL is installed and running.
Create a new database for the project.
Update config.py with your database credentials.
Initialize the database:

bash
Copier le code
flask db init
flask db migrate -m "Initial migration."
flask db upgrade
Run the application:

bash
Copier le code
flask run
Usage
Access the application:
Open your web browser and navigate to http://127.0.0.1:5000/.

Signup and Login:
Create an account and login to access the home page.

Set Preferences:
Navigate to the Preferences page to set your meditation preferences.

Start a Session:
Go to the Meditation page and start a session. You can pause and resume the session as needed.

View Session History:
Access the session history page to view completed sessions and their details.

API Endpoints
POST /api/signup: Register a new user.
POST /api/login: Login an existing user.
GET /api/current_user: Get details of the currently logged-in user.
POST /api/savePreferences: Save user preferences.
GET /api/getPreferences: Retrieve user preferences.