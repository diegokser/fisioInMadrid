import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

export const Box = () =>{
    const { store, actions } = useContext(Context);
    const navigate = useNavigate()
    return(
        <div className="list-group">
            <Link to="/admin/post" className="list-group-item list-group-item-action box-list active" aria-current="true">
                Publica tu post
            </Link>
            <Link to="/admin/blogs" className="list-group-item list-group-item-action box-list">Tu blog</Link>
            <button
                className="list-group-item list-group-item-action"
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