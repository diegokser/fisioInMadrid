"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required
import argon2


ph = argon2.PasswordHasher()

api = Blueprint('api', __name__)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200

@api.route('/admin/signup', methods=['POST'])
def signup():
    data = request.get_json()
    email=data.get("email")
    password=data.get("password")

    if not email and not password:
        return jsonify({"message": "faltan datos"}),400
    
    existe = User.query.filter_by(email=email).first()

    if existe:
        return jsonify({"message": "el usuario ya existe"}), 400
    
    hashed_password = ph.hash(password)
    print(hashed_password)
    
    addUsuario = User(email = email, password = hashed_password) #Aqui he cambiado por hashed_password porque asi guardamos la contraseña encriptada en lugar de la contraseña
    db.session.add(addUsuario)
    db.session.commit()

    return jsonify({"message": "Usuario añadido con exito"}), 200

@api.route('/admin/login', methods=['POST'])
def login():
    data = request.get_json()
    email=data.get("email")
    password=data.get("password")

    if not email or not password:
        return jsonify({"message": "missing mail o password"}),400
    else:
        ph = argon2.PasswordHasher()
        user = User.query.filter_by(email=email).first()

        if not user:
            return jsonify({"mesage": "email incorrecto"}), 400
        else: 
            try:
                if ph.verify(user.password, password):
                    token = create_access_token(identity=user.id)
                    return jsonify({"email": email, "token":token, "message": "Inicio de sesión realizado con éxito"}),200
                else:
                    return jsonify({"message": "Contraseña incorrecta"}), 401
            except argon2.exceptions.VerifyMismatchError:
                    return jsonify({"message": "Contraseña incorrecta"}), 401


# @api.route('/admin/info', methods=['POST'])
# def info():