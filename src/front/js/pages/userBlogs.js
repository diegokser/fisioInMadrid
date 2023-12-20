import React from "react";
import { Blogs } from "../component/blogs";
import "../../styles/home.css";


export const UserBlogs = () => {
    return(
        <section className="container-fluid" style={{ paddingTop: "2rem", paddingBottom: "2rem", backgroundColor: "#F4F9FC" }}>
            <h1 className="title-especialidades" style={{ textAlign: "center" }}><span className="title-1">NUESTRO</span><span className="title-2"> BLOG</span></h1>
            <div style={{padding: "2rem"}}>
                <Blogs /> 
            </div>
        </section>
    )
}