import os

class Config:
    SECRET_KEY = os.environ.get('SECRET_KEY') or 'YassineMeriem60641939'
    SQLALCHEMY_DATABASE_URI = os.environ.get('DATABASE_URL') or 'mysql+mysqlconnector://root:YassineMeriem60641939@localhost/zenzilla'
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    SESSION_TYPE = 'filesystem'
    SQLALCHEMY_ENGINE_OPTIONS = {
        'pool_pre_ping': True,
        'pool_recycle': 1800,
        'connect_args': {
            'connect_timeout': 10
        }
    }
