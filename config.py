import os

class Config:
    SECRET_KEY = os.environ.get('SECRET_KEY') or 'Bsxvyym1DGc36rX1rLQm'
    SQLALCHEMY_DATABASE_URI = os.environ.get('DATABASE_URL')
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    SESSION_TYPE = 'filesystem'
