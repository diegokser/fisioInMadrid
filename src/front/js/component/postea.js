import React, { useState } from "react";
import "../../styles/post.css";
import { useNavigate } from "react-router-dom";


export const Postea = () => {
    const [post, setPost] = useState({
        title:"",
        description:"",
        img:""
    })
    const [img_uploaded, setImg_uploaded] = useState(false)
    const navigate = useNavigate()

    const handleSignup = async (e) => {
        e.preventDefault()
        if (post.title === "" || post.description === "" || post.img === "") {
            console.log("Faltan datos")
          } 
        else{
            const post = await actions.post(post.title,post-description,post.img);
            if (post == true) {
                // await showToastAndNavigate();
                navigate('/admin/yourpost', { replace: true });          
            }
            else {
                console.log(post);
            }
    }};

    return (
        <section className="container-fluid postea-container">
            <h1 className="post-encabezado">Publica tu post</h1>
            <form onSubmit={(e) => handleSignup(e)}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label post-title" value={post.title} onChange={(data)=> {setPost({...post, title: data.target.value})}}>Título</label>
                    <input type="text" className="form-control" id="exampleFormControlInput1"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label post-title" value={post.description} onChange={(data)=> {setPost({...post, description: data.target.value})}}>Contenido</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <button type="submit" className="btn post-submit">Enviar</button>
            </form>
        </section>
    )
}