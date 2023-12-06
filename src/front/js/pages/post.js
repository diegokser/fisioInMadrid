import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/post.css";
import { Postea } from "../component/postea";
import { Box } from "../component/box";
import "../../styles/box.css";

export const Post = () => {
    const { store, actions } = useContext(Context);
    const navigate = useNavigate()

    useEffect(() => {
        
        if(!actions.isloged()){
            navigate("/admin/login", { replace: true });
        }		  
    
      }, []);

    return (
        <section className="container-fluid post-container">
            <div className="row">
                <div className="col-12 col-md-3">
                    <Box />
                </div>
                <div className="col-12 col-md-9">
                    <Postea /> 
                </div>
            </div>
        </section>
    )
}