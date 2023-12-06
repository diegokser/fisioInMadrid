import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/signup.css";
import { useNavigate } from "react-router-dom";

export const Login = () => {
    const {actions} = useContext(Context)
    const [user, setUser] = useState({})
    const navigate = useNavigate()

    const user_login = (event) => {
        setUser({
          ...user,
          email: event.target.id === "exampleInputEmail1" ? event.target.value : user.email.toLowerCase(),
          password: event.target.id === "exampleInputPassword1" ? event.target.value : user.password
        });
        console.log(user)
      };

    const submit_login = async (event) => {
        event.preventDefault()
        const result = await actions.login(user);
        if (result.success) navigate("/admin/post");
        else console.log("FATAL:", result.message);
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
                    <label htmlFor="exampleInputPassword1" className="form-label" onChange={(data) => {setUser({...user, password: data.target.value})}} >Contraseña</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" onChange={(e) => {user_login(e); }} required/>
                </div>
                <button type="submit" className="btn signup-submit">Enviar</button>
            </form>
        </section>
    )
}