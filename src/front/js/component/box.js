import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

export const Box = () =>{
    const { store, actions } = useContext(Context);
    const navigate = useNavigate()
    const location = useLocation();

    return(
        <div className="list-group">
            <Link
                to="/admin/post"
                className={`list-group-item list-group-item-action box-list ${location.pathname === '/admin/post' ? 'active' : ''}`}
                aria-current="true"
            >
                Publica tu post
            </Link>
            <Link
                to="/admin/blogs"
                className={`list-group-item list-group-item-action box-list ${location.pathname === '/admin/blogs' ? 'active' : ''}`}
            >
                Tu blog
            </Link>
            <Link
                to="/admin/password"
                className={`list-group-item list-group-item-action box-list ${location.pathname === '/admin/password' ? 'active' : ''}`}
            >
                Cambiar contraseña
            </Link>
            <button
                className="list-group-item list-group-item-action box-list ${location.pathname === '/companyProfile' ? 'active' : ''}"
                onClick={() => {
                  actions.logout();
                  navigate("/admin/login", { replace: true });
                }}
              >
                <i className="fa-solid fa-right-from-bracket"></i> Sign out
              </button>
        </div>
    )
}