from pymongo import MongoClient
mongo=MongoClient('mongodb://mongo_db:secret@localhost:27017/')
"""
mongo=PyMongo()

def init_app(app):
    mongo.init_app(app)
"""
def get_user_by_username(username):
    return mongo['db']['users'].find_one({'username': username})

def save_user(user):
    return mongo.db.users.insert_one(user)
