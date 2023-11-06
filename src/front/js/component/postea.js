import React, { useState, useRef, useContext } from "react";
import "../../styles/post.css";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";


export const Postea = () => {
    const {actions} = useContext(Context)
    const [post, setPost] = useState({
        title:"",
        description:"",
        img:""
    })
    const navigate = useNavigate()

    const handleSignup = async (e) => {
        e.preventDefault()
        console.log(post.title,post.description,post.img)
        if (post.title === "" || post.description === "" || post.img === "") {
            console.log("Faltan datos")
          } 
        else{
            const post = await actions.post(post.title,post.description,post.img);
            if (post == true) {
                // await showToastAndNavigate();
                navigate('/admin/yourpost', { replace: true });          
            }
            else {
                console.log(post);
            }
    }};

    const [img_uploaded, setImg_uploaded] = useState(false)

    const fileInputRef = useRef(null);

    const uploadFile = async (e) => {
        const file = e.target.files[0];
        if (file != null) {
            let data = new FormData();
            data.append('img', file);
            const img = await actions.img_upload(data)
            
            if (img.message == "Max image size is 10MB"){ 
                console.log("error")
                img_uploaded == true? setImg_uploaded(false):""
            } else if (img.message == "exito"){
                setImg_uploaded(true)
                setPost({...post, img: img.img})
            } else {
                img_uploaded == true? setImg_uploaded(false):
                console.log("error")
            }
        }
      };

    return (
        <section className="container-fluid postea-container">
            <h1 className="post-encabezado">Publica tu post</h1>
            <form onSubmit={(e) => handleSignup(e)}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label post-title">Título</label>
                    <input type="text" className="form-control" id="exampleFormControlInput1" value={post.title} onChange={(data)=> {setPost({...post, title: data.target.value})}}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label post-title" >Contenido</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" value={post.description} onChange={(data)=> {setPost({...post, description: data.target.value})}}></textarea>
                </div>
                <div className="mb-3 add-product-upload">
                    <label htmlFor="formFile" className="form-label">Añade tu imagen</label>
                    <input className="form-control" type="file" id="formFile" ref={fileInputRef} onChange={(e) => {uploadFile(e)}}/>
                </div>
                <button type="submit" className="btn post-submit">Enviar</button>
            </form>
        </section>
    )
}