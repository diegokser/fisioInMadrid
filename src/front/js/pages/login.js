import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/signup.css";

export const Login = () => {
    const {actions} = useContext(Context)
    const [user, setUser] = useState({})

    const user_login = (event) => {
        setUser({ ...user, [event.target.id]: event.target.value });
        console.log(user)
      };

    const submit_login = async (event) => {
        event.preventDefault()
        const loged = actions.login(user)
        if (loged == true) console.log("EXITO!")
        else console.log("FATAL")
    }

    return(
        <section className="container-fluid signup-container">
            <h1 className="signup-title">Log in</h1>
            <form className="signup-all" onSubmit={(e) => {submit_login(e);}}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label" onChange={(data) => {setUser({...user, email: data.target.value})}}>Email</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e) => {user_login(e); }} required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label" onChange={(e) => {user_login(e); }} required>Contraseña</label>
                    <input type="password" className="form-control" id="exampleInputPassword1"/>
                </div>
                <button type="submit" className="btn signup-submit">Enviar</button>
            </form>
        </section>
    )
}