import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/signup.css";

export const Signup = () => {
    const {actions} = useContext(Context)
    const [user, setUser] = useState({
        email:"",
        password:"",
        password2:""
    })

    return(
        <div className="container-fluid signup-container">
            <h1 className="signup-title">Formulario de registro</h1>
            <form className="signup-all">
            <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label" value={user.email} onChange={(data) => {setUser({...user, email: data.target.value})}}>Email</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
            </div>
            <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label" value={user.password} onChange={(data) => {setUser({...user, password: data.target.value})}}>Contraseña</label>
                <input type="password" className="form-control" id="exampleInputPassword1"/>
            </div>
            <div className="mb-3">
                <label for="exampleInputPassword2" className="form-label"value={user.password2} onChange={(data) => {setUser({...user, password2: data.target.value})}}>Repite la contraseña</label>
                <input type="password" className="form-control" id="exampleInputPassword2"/>
                <div id="Help" className="form-text">Las contraseñas tienen que coincidir</div>
            </div>
            <button type="submit" className="btn signup-submit">Enviar</button>
            </form>
        </div>
    )
}