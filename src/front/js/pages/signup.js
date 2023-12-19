import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/signup.css";
import { useNavigate } from "react-router-dom";

export const Signup = () => {
    const {actions} = useContext(Context)
    const navigate = useNavigate()
    const [user, setUser] = useState({
        email:"",
        password:"",
        password2:""
    })

    // const showToastAndNavigate = () => {
    //     return new Promise((resolve) => {
    //       toast.success('Sign up successfully', {         
    //         autoClose: 1000,
    //         onClose: resolve, // Resuelve la promesa cuando se cierra la notificación
    //       });
    //     });
    //   };
    

    const handleSignup = async (e) => {
        e.preventDefault()
        if (user.email === "" || user.password === "" || user.password2 === "") {
            console.log("Faltan datos")
          } else if (user.password != user.password2){
            console.log("Las contraseñas no son iguales")
          }
        else{
            const emailLowercase = user.email.toLowerCase();
            const register = await actions.signup(emailLowercase,user.password);
            if (register == true) {
                // await showToastAndNavigate();
                navigate('/admin/login', { replace: true });          
            }
            else {
                console.log(register);
            }
    }};

    return(
        <section className="container-fluid signup-container">
            <h1 className="signup-title">Formulario de registro</h1>
            <form className="signup-all" onSubmit={(e) => handleSignup(e)}>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  value={user.email} onChange={(data) => {setUser({...user, email: data.target.value})}} required />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Contraseña</label>
                <input type="password" className="form-control" id="exampleInputPassword1" pattern="^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).{8,}$" value={user.password} onChange={(data) => {setUser({...user, password: data.target.value})}} required/>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword2" className="form-label">Repite la contraseña</label>
                <input type="password" className="form-control" id="exampleInputPassword2" value={user.password2} onChange={(data) => {setUser({...user, password2: data.target.value})}} required/>
                <div id="Help" className="form-text">Las contraseñas tienen que coincidir, tener mínimo 8 caracteres, 1 mayúscula, 1 minúscula y 1 número</div>
            </div>
            <button type="submit" className="btn signup-submit">Enviar</button>
            </form>
        </section>
    )
}