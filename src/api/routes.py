"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""

from flask import Flask, request, make_response, jsonify, url_for, Blueprint
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
import requests
import re

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
def change_password(UserId):
    data = request.get_json()
    user = User.query.get(UserId)

    if not user:
        return jsonify({"message": "User not found"}), 404

    if user:
        new_password = data.get("password")
        user.password = ph.hash(new_password)
        db.session.commit()

        return jsonify({"message": "Password updated successfully"}), 200
    else:
        return jsonify({"message": "Error trying to modify password"}), 400

@api.route('/admin/post', methods=['POST'])
@jwt_required()
def post():
    data = request.get_json()
    title = data.get("title")
    description = data.get ("description")
    img = data.get("img")
    user_id = get_jwt_identity()
    date = datetime.today().date().strftime('%Y-%m-%d')

    if not title or not description:
        return ({"message": "Faltan datos"}), 401
    print(img)
    addPost = Blog(title = title, description = description, img = img, user_id = user_id, date = date)
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


@api.route('/post', methods=['GET'])
def blogs():
    blog =  Blog.query.all()
    posts = []

    for post in blog:
        posts.append(post.serialize())

    return jsonify(posts), 200

@api.route('/post/<int:post_id>', methods=['GET'])
def get_post(post_id):
    post = Blog.query.filter_by(id = post_id).first()
    if not post:
        return jsonify({'message' : 'No se encuentra el post'})

    return jsonify(post.serialize()), 200

@api.route('/post/<int:post_id>', methods=['DELETE'])
@jwt_required()
def delete_post(post_id):
    post = Blog.query.filter_by(id = post_id).first()
    if post:
        db.session.delete(post)
        db.session.commit()
        return jsonify({'message': 'Post was deleted successfully'})
    else:
        return jsonify({'message': 'Error trying to delete post'}), 404

@api.route('/post/<int:post_id>', methods=['PUT'])
@jwt_required()
def put_post(post_id):
    post = Blog.query.get(post_id)

    if post:
        data = request.get_json()

        post.title = data.get("title")
        post.description = data.get("description")
        post.img = data.get("img")
        post.user_id = get_jwt_identity()
        post.date = datetime.today().date().strftime('%Y-%m-%d')

        if not post.title or not post.description:
            return jsonify({"message": "Faltan datos"}), 401

        db.session.commit()

        return jsonify({"message": "Post modified successfully"}), 200

    else:
        return jsonify({'message': 'Error trying to modify post'}), 404


@api.route('/set_cookie', methods=['POST'])
def cookies():
    response = make_response("Cookie consent set")
    response.set_cookie('cookie_consent', 'accepted', max_age=31536000)  # Max age of 1 year
    return response

import re

@api.route('/send_email', methods=['POST'])
def email():
    data = request.get_json()

    try:
        url = "https://api.mailersend.com/v1/email"

        headers = {
            "Authorization": f"Bearer {os.getenv('MAILERSEND_API_KEY')}",
            "Content-Type": "application/json"
        }

        # EMAIL PARA TI
        admin_payload = {
            "from": {
                "email": "noreply@fisioin.es",
                "name": "FisioIn Madrid"
            },
            "to": [
                {
                    "email": "fisioinmadrid@gmail.com",
                    "name": "FisioIn Madrid"
                }
            ],
            "subject": "Nueva solicitud de información",
            "text": f"""
Se ha recibido una nueva solicitud desde la web.

Nombre: {data.get('name', '')}
Email: {data.get('email', '')}
Teléfono: {data.get('phone', '')}

Mensaje:
{data.get('message', '')}
"""
        }

        admin_response = requests.post(
            url,
            json=admin_payload,
            headers=headers
        )

        print("ADMIN EMAIL:", admin_response.status_code)

        # EMAIL AL USUARIO (solo si parece válido)
        email_user = data.get("email", "")

        email_valid = re.match(
            r"^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$",
            email_user
        )

        user_status = "not_sent"

        if email_valid:
            user_payload = {
                "from": {
                    "email": "noreply@fisioin.es",
                    "name": "FisioIn Madrid"
                },
                "to": [
                    {
                        "email": email_user,
                        "name": data.get("name", "Usuario")
                    }
                ],
                "subject": "Hemos recibido tu solicitud",
                "text": f"""
Hola {data.get('name', '')},

Gracias por contactar con FisioIn Madrid.

Hemos recibido correctamente tu solicitud y nos pondremos en contacto contigo lo antes posible para ayudarte.

Resumen de tu consulta:

Nombre: {data.get('name', '')}
Teléfono: {data.get('phone', '')}

Mensaje:
{data.get('message', '')}

Un saludo,

FisioIn Madrid
"""
            }

            try:
                user_response = requests.post(
                    url,
                    json=user_payload,
                    headers=headers
                )
                user_status = user_response.status_code
                print("USER EMAIL:", user_status)

            except Exception as user_error:
                print("USER EMAIL ERROR:", user_error)
                user_status = "failed"

        return jsonify({
            "message": "Formulario enviado correctamente",
            "admin_email": admin_response.status_code,
            "user_email": user_status
        }), 200

    except Exception as e:
        print("ERROR EMAIL:", repr(e))
        return jsonify({"error": str(e)}), 500