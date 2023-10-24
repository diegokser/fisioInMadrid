import React, { useState } from "react";
import "../../styles/post.css";


export const Postea = () => {
    const [post, setPost] = useState({
        title:"",
        description:"",
        img:""
    })

    return (
        <section className="container-fluid post-container">
            <h1 className="post-encabezado">Publica tu post</h1>
            <div className="mb-3">
                <label htmlFor="title" className="form-label post-title" value={post.title} onChange={(data)=> {setPost({...post, title: data.target.value})}}>Título</label>
                <input type="text" className="form-control" id="exampleFormControlInput1"/>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label post-title" value={post.description} onChange={(data)=> {setPost({...post, description: data.target.value})}}>Contenido</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <button type="submit" className="btn post-submit">Enviar</button>
        </section>
    )
}