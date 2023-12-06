from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(3000), unique=False, nullable=False)

    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            # do not serialize the password, its a security breach
        }
    
class Blog (db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(120), unique=False, nullable=False)
    description = db.Column(db.String(100000), unique=False, nullable=False)
    img = db.Column(db.String(10000000), unique=False, nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    # fecha = db.Column (db.DateTime, unique=False, nullable=False) ESTO ALMACENA FECHA Y HORA
    date = db.Column(db.Date, unique=False, nullable=False)

    def __repr__(self):
        return f'<Blog {self.id}>'

    def serialize(self):
        return {
            "id": self.id,
            "title": self.title,
            "description": self.description,
            "img":self.img,
            "user_id":self.user_id,
            "date":self.date
        }