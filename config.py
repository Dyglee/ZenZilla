# config.py

import os

class Config:
    SECRET_KEY = os.environ.get('SECRET_KEY') or 'YassineMeriem60641939'
    SQLALCHEMY_DATABASE_URI = 'mysql+mysqlconnector://root:YassineMeriem60641939@localhost/zenzilla'
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    SESSION_TYPE = 'filesystem'
