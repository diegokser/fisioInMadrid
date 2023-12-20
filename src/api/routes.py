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
from flask_mail import Message, Mail
from sendgrid import SendGridAPIClient
from sendgrid.helpers.mail import Mail


ph = argon2.PasswordHasher()

api = Blueprint('api', __name__)

mail = Mail()

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

@api.route('/send_email', methods=['POST'])
def email():
    data = request.get_json()

    message = Mail(
        from_email='fisioinmadrid@gmail.com',
        to_emails='fisioinmadrid@gmail.com',
        subject='Sending with Twilio SendGrid is Fun',
        html_content=f'<strong>Nombre: {data.get("name")}</strong><br><strong>Email: {data.get("email")}</strong><br><strong>Nombre: {data.get("phone")}</strong><br>{data.get("message")}'
    )
    try:
        sg = SendGridAPIClient(os.environ.get('SENDGRID_API_KEY'))
        response = sg.send(message)
        print(response.status_code)
        print(response.body)
        print(response.headers)
        return "Correo enviado con éxito!"  # Añade esta línea para devolver una respuesta
    except Exception as e:
        print(e.message)
        return "Error al enviar el correo"  # Puedes personalizar este mensaje según sea necesario