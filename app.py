import logging
import json  # Import the json module
from flask import Flask, render_template, request, session, redirect, url_for, jsonify
from flask_session import Session
from flask_socketio import SocketIO
from config import Config
from werkzeug.security import generate_password_hash, check_password_hash
from extensions import db
from models.user import User
from decorators import login_required

# Configure logging
logging.basicConfig(level=logging.DEBUG)
logger = logging.getLogger(__name__)

app = Flask(__name__)
app.config.from_object(Config)

# Initialize extensions
db.init_app(app)
Session(app)
socketio = SocketIO(app)

@app.before_first_request
def create_tables():
    db.create_all()

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/home')
@login_required
def home():
    return render_template('home.html')

@app.route('/preferences')
@login_required
def preferences():
    return render_template('preferences.html')

@app.route('/sessions')
@login_required
def sessions():
    return render_template('sessions.html')

@app.route('/api/signup', methods=['POST'])
def signup():
    try:
        data = request.get_json()
        logger.debug("Signup data received: %s", data)
        username = data.get('username')
        email = data.get('email')
        password = generate_password_hash(data.get('password'))

        if User.query.filter_by(email=email).first():
            logger.error("User with email %s already exists", email)
            return jsonify({'error': 'User already exists'}), 400

        new_user = User(username=username, email=email, password=password)
        db.session.add(new_user)
        db.session.commit()

        session['user_id'] = new_user.id
        return jsonify({'id': new_user.id, 'username': new_user.username, 'email': new_user.email}), 201
    except Exception as e:
        logger.error("Error in signup: %s", e, exc_info=True)
        return jsonify({'error': 'Signup failed'}), 500

@app.route('/api/login', methods=['POST'])
def login():
    try:
        data = request.get_json()
        logger.debug("Login data received: %s", data)
        email = data.get('email')
        password = data.get('password')

        user = User.query.filter_by(email=email).first()
        if user and check_password_hash(user.password, password):
            session['user_id'] = user.id
            return jsonify({'id': user.id, 'username': user.username, 'email': user.email}), 200
        logger.error("Invalid credentials for email %s", email)
        return jsonify({'error': 'Invalid credentials'}), 400
    except Exception as e:
        logger.error("Error in login: %s", e, exc_info=True)
        return jsonify({'error': 'Login failed'}), 500


@app.route('/api/current_user', methods=['GET'])
def current_user():
    user_id = session.get('user_id')
    if user_id:
        user = User.query.get(user_id)
        return jsonify({'id': user.id, 'username': user.username, 'email': user.email}), 200
    return jsonify({'error': 'Not authenticated'}), 401

@app.route('/api/savePreferences', methods=['POST'])
def save_preferences():
    if 'user_id' not in session:
        return jsonify({'error': 'Not authenticated'}), 401
    
    data = request.get_json()
    user_id = session['user_id']
    
    user = User.query.get(user_id)
    if not user:
        return jsonify({'error': 'User not found'}), 404

    user.preferences = json.dumps(data)  # Store preferences as JSON string
    db.session.commit()
    
    return jsonify({'message': 'Preferences saved successfully'}), 200

if __name__ == '__main__':
    socketio.run(app, debug=True)
