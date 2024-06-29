import os

class Config:
    SECRET_KEY = os.environ.get('SECRET_KEY') or 'YassineMeriem60641939'
    SQLALCHEMY_DATABASE_URI = os.environ.get('DATABASE_URL') or 'postgresql://zenzilla_user:Bsxvyym1DGc36rX1rLQmjafvO6b1FpYt@dpg-cpvtimmehbks73e34ip0-a:5432/zenzilla'
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    SESSION_TYPE = 'filesystem'
