import React, { useState, useContext, useEffect } from "react";
import "../../styles/postea.css";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

export const Postea = () => {
    const {actions} = useContext(Context)
    const [post, setPost] = useState({
        title:"",
        description:"",
        img: ""
    })
    const navigate = useNavigate()

    const [imgUpload, setImgUpload] = useState((false))

    const uploadFile = async (e) => {
        const file = e.target.files[0];
        if (file != null) {
            let data = new FormData();
            data.append('img', file);
            const img = await actions.img_upload(data)
                if (img.message == "exito"){
                        setPost({...post, img: img.img})
                        setImgUpload(true)
                } else {
                    imgUpload == true? setImgUpload(false): console.log(img.message);
                }
        }
      };

      const handleSignup = async (e) => {
        e.preventDefault();
        console.log(post);
        if (post.title === "" || post.description === "" || post.img === "") {
            console.log("Faltan datos");
        } else {
            try {
                const result = await actions.post(post.title, post.description, post.img);
                if (result === true) {
                    navigate('/admin/blogs', { replace: true });
                } else {
                    console.log(result);
                }
            } catch (error) {
                console.error("Error en la solicitud API:", error);
            }
        }
    };

    const [isDisabled, setIsDisabled] = useState(true);

    useEffect(() => {
        if (post.title !== '' && post.description !== '' && post.img !== '') {
            setIsDisabled(false);
        } else {
            setIsDisabled(true);
        }
    }, [post.title, post.description, post.img]);

    return (
        <section className="container-fluid postea-container">
            <h1 className="post-encabezado">Publica tu post</h1>
            <form onSubmit={(e) => handleSignup(e)} encType="multipart/form-data">
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
                    <input className="form-control" type="file" id="formFile" onChange={(e) => { uploadFile(e) }} />
                </div>
                <button type="submit" className="btn post-submit" disabled={isDisabled}>Enviar</button>
            </form>
        </section>
    )
}