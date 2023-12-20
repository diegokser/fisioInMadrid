import React, { useContext, useEffect, useState } from "react";
import { Box } from "../component/box";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/signup.css";


export const ChangePassword = () => {
    const { store, actions } = useContext(Context);
    const navigate = useNavigate()
    const [user, setUser] = useState({
        password:"",
        password2:""
    })

    const handleSignup = async (e) => {
        e.preventDefault()
        if ( user.password === "" || user.password2 === "") {
            console.log("Faltan datos")
          } else if (user.password != user.password2){
            console.log("Las contraseñas no son iguales")
          }
        else{
            const register = await actions.changePassword(user.password);
            if (register == true) {
                // await showToastAndNavigate();
                navigate('/admin/login', { replace: true });          
            }
            else {
                console.log(register);
            }
    }};

    useEffect(() => {
        
        if(!actions.isloged()){
            navigate("/admin/login", { replace: true });
        }		  
    
      }, []);

    return(
        <section className="container-fluid password-container">
            <div className="row row-password">
                <div className="col-12 col-md-3">
                    <Box />
                </div>
                <div className="col-12 col-md-9 password-section">
                    <h1 className="signup-title">Cambia tu contraseña</h1>
                        <form className="signup-all" onSubmit={(e) => handleSignup(e)}>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Nueva contraseña</label>
                                <input type="password" className="form-control" id="exampleInputPassword1" pattern="^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).{8,}$" value={user.password} onChange={(data) => {setUser({...user, password: data.target.value})}} required/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword2" className="form-label">Repite la contraseña</label>
                                <input type="password" className="form-control" id="exampleInputPassword2" value={user.password2} onChange={(data) => {setUser({...user, password2: data.target.value})}} required/>
                                <div id="Help" className="form-text">Las contraseñas tienen que coincidir, tener mínimo 8 caracteres, 1 mayúscula, 1 minúscula y 1 número</div>
                            </div>
                            <button type="submit" className="btn signup-submit">Enviar</button>
                        </form>
                </div>
            </div>
        </section>
    )
}