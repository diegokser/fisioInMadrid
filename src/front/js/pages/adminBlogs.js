import React, { useContext, useEffect } from "react";
import { Box } from "../component/box";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import { BlogsEdit } from "../component/blogsEdit";
// import "../../styles/blogs.css";


export const AdminBlogs = () => {
    const { store, actions } = useContext(Context);
    const navigate = useNavigate()

    useEffect(() => {
        
        if(!actions.isloged()){
            navigate("/admin/login", { replace: true });
        }		  
    
      }, []);

    return(
        <section className="container-fluid post-container">
            <div className="row">
                <div className="col-12 col-md-3">
                    <Box />
                </div>
                <div className="col-12 col-md-9">
                    <BlogsEdit /> 
                </div>
            </div>
        </section>
    )
}