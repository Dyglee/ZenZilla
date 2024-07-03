# ZenZilla Meditation App

## Overview

ZenZilla is a web-based application designed to help users practice mindfulness and meditation. The app allows users to create accounts, set their preferences for meditation sessions, and track their meditation history. It provides guided sessions with background music and customizable session durations.

## Features

- **User Authentication:** Signup and login functionalities with validation.
- **Preferences Management:** Users can set their preferences including background images, session duration, number of sessions per day, and interval between sessions.
- **Guided Meditation Sessions:** Start meditation sessions with background music and visual cues.
- **Session History:** Track completed sessions and view history.

## Project Structure

- **app.py:** The main application file that initializes the Flask app and handles routes and API endpoints.
- **models/user.py:** Defines the User model for SQLAlchemy.
- **models/session.py:** Defines the Session model for SQLAlchemy.
- **static/css/styles.css:** CSS styles for the application.
- **static/js/scripts.js:** JavaScript file handling client-side functionality.
- **templates/index.html:** Homepage template.
- **templates/home.html:** User home page template.
- **templates/preferences.html:** Preferences management page template.
- **templates/meditating.html:** Meditation session page template.
- **config.py:** Configuration settings for the Flask application.

## Requirements

```text
Flask==2.0.3
Flask-SQLAlchemy==2.5.1
Flask-Session==0.4.0
Flask-SocketIO==5.1.1
mysql-connector-python==8.0.26
SQLAlchemy==1.4.35
Werkzeug==2.0.3
gunicorn==20.1.0
Flask-Migrate
eventlet
psycopg2-binary
```



## Usage

1. **Access the application:**
   Open your web browser and navigate to `https://zenzilla.onrender.com/`.

2. **Signup and Login:**
   Create an account and login to access the home page.

3. **Set Preferences:**
   Navigate to the Preferences page to set your meditation preferences.

4. **Start a Session:**
   Go to the Meditation page and start a session. You can pause and resume the session as needed.

5. **View Session History:**
   Access the session history page to view completed sessions and their details.


## API Endpoints

- **POST /api/signup:** Register a new user.
- **POST /api/login:** Login an existing user.
- **GET /api/current_user:** Get details of the currently logged-in user.
- **POST /api/savePreferences:** Save user preferences.
- **GET /api/getPreferences:** Retrieve user preferences.

## Development

1. **Clone the repository:**
    ```bash
    git clone https://github.com/DyGlee/zenzilla.git
    cd zenzilla
    ```

2. **Create and activate a virtual environment:**
    ```bash
    python -m venv venv
    source venv/bin/activate  # On Windows use `venv\Scripts\activate`
    ```

3. **Install dependencies:**
    ```bash
    pip install -r requirements.txt
    ```

4. **Set up the database:**
    - Ensure PostgreSQL is installed and running.
    - Create a new database for the project.
    - Update `config.py` with your database credentials.

5. **Initialize the database:**
    ```bash
    flask db init
    flask db migrate -m "Initial migration."
    flask db upgrade
    ```

6. **Run the application:**
    ```bash
    flask run
    ```


## Contributing

Contributions to ZenZilla are welcome! Please fork the repository and submit pull requests with your improvements.