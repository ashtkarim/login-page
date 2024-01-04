from flask import Flask
from flask_bcrypt import Bcrypt
from flask_cors import CORS

app = Flask(__name__)
#app.config['MONGO_URI'] = 'mongodb://mongo_db:secret@localhost:27017/'
app.config['SECRET_KEY'] = 'b6t9GEbYFXMCqYb8V6B0'
bcrypt = Bcrypt(app)

CORS(app)

from routes.auth import auth
app.register_blueprint(auth)

if __name__ == '__main__':
    app.run(debug=True)
