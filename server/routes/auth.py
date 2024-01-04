from flask import Blueprint, request, jsonify
from flask_bcrypt import Bcrypt
from models import get_user_by_username, save_user

auth = Blueprint('auth', __name__)
bcrypt = Bcrypt()

@auth.route('/signup', methods=['POST'])
def signup():
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')

    existing_user = get_user_by_username(username)
    if existing_user:
        return jsonify({'message': 'Username already exists'}), 400

    hashed_password = bcrypt.generate_password_hash(password).decode('utf-8')
    user = {'username': username, 'password': hashed_password}

    save_user(user)
    return jsonify({'message': 'User created successfully'}), 201

@auth.route('/signin', methods=['POST'])
def signin():
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')

    user = get_user_by_username(username)
    if not user or not bcrypt.check_password_hash(user['password'], password):
        return jsonify({'message': 'Invalid username or password'}), 401

    # Here, you can generate a JWT token and include it in the response
    # For simplicity, we'll just return a success message in this example
    return jsonify({'message': 'Signin successful!'}), 200
