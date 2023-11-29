"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Blog
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import create_access_token, jwt_required, get_jwt_identity
import argon2
from datetime import datetime
import os #No se bien el porque
import cloudinary
import cloudinary.uploader
import cloudinary.api
import json


ph = argon2.PasswordHasher()

api = Blueprint('api', __name__)

cloudinary.config(
    cloud_name=os.getenv('CLOUDINARY_CLOUD_NAME'),
    api_key=os.getenv('CLOUDINARY_API_KEY'),
    api_secret=os.getenv('CLOUDINARY_API_SECRET'),
    # api_preset=os.getenv('CLOUDINARY_PRESET'),
    secure=True
)

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
    
    if email != "fisioinmadrid@gmail.com":
        return jsonify({"message": "Correo electrónico no permitido"}), 400
    
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
                    return jsonify({"email": email, "token":token, "user_data": {"id": user.id}, "message": "Inicio de sesión realizado con éxito"}),200
                else:
                    return jsonify({"message": "Contraseña incorrecta"}), 401
            except argon2.exceptions.VerifyMismatchError:
                    return jsonify({"message": "Contraseña incorrecta"}), 401
            
@api.route('/admin/change/<int:UserId>', methods=['PUT'])
@jwt_required()
def change_password():
    data = request.get_json()
    user = User.query.get(id)

    if not user:
        return jsonify({"message": "User not found"}), 404

    if "password" in data:
        user.password = data.get("password")

    hashed_password = ph.hash(user.password)
    print(hashed_password)

    db.session.commit()
    return jsonify({"message": "Password updated successfully"}), 200

@api.route('/admin/post', methods=['POST'])
@jwt_required()
def post():
    data = request.get_json()
    title = data.get("title")
    description = data.get ("description")
    img = data.get("img")
    user_id = get_jwt_identity()
    fecha = datetime.today().strftime('%Y-%m-%d')

    if not title or not description:
        return ({"message": "Faltan datos"}), 401
    print(img)
    addPost = Blog(title = title, description = description, img = img, user_id = user_id, fecha = fecha)
    db.session.add(addPost)
    db.session.commit()

    return jsonify({"message": "Post add successful"}), 200



@api.route("/postimg", methods=['POST'])
def img_upload():
    try:
        file_to_upload = request.files['img']

        if file_to_upload:
            # Nombre de la carpeta en Cloudinary
            folder_name = 'fisioin'
            
            upload_result = cloudinary.uploader.upload(file_to_upload, folder=folder_name)
            
            if upload_result:
                return jsonify({"message": "exito", "img": upload_result.get("secure_url")}), 200

    except Exception as ex:
        print(ex)

    return jsonify({"message": "error"}), 400
