import React, { useState, useContext, useEffect } from "react";
import "../../styles/postea.css";
import { useNavigate, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const EditBlog = () => {
    const {store, actions} = useContext(Context)
    const [post, setPost] = useState({
        title:"",
        description:"",
        img: ""
    })
    const navigate = useNavigate()
    const params = useParams();

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
        console.log(params.id);
    
        if (post.title === "" || post.description === "" || post.img === "") {
            console.log("Faltan datos");
        } else {
            try {
                const token = store.jwt_token;
                const response = await fetch(
                    `${process.env.BACKEND_URL}/api/post/${params.id}`,
                    {
                        method: 'PUT',
                        headers: {
                            'Content-Type': 'application/json',
                            Authorization: "Bearer " + token,
                        },
                        body: JSON.stringify(post),  // Añade el cuerpo JSON con los datos actualizados del post
                    }
                );
    
                if (response.ok) {
                    const result = await response.json();
                    console.log('Post modificado:', result);
                    // Redirecciona a la página de administración de blogs
                    navigate('/admin/blogs', { replace: true });
                } else {
                    console.error('Error al modificar el post:', response.statusText);
                }
            } catch (error) {
                console.error('Error al modificar el post:', error);
            }
        }
    };

    const [isDisabled, setIsDisabled] = useState(true);

    useEffect(() => {
        if(!actions.isloged()){
            navigate("/admin/login", { replace: true });
        }
        if (post.title !== '' && post.description !== '' && post.img !== '') {
            setIsDisabled(false);
        } else {
            setIsDisabled(true);
        }
    }, [params.id, post.title, post.description, post.img]);

    return (
        <section className="container-fluid postea-container" style={{ padding: "4rem" }}>
            <h1 className="post-encabezado">Modifica tu post</h1>
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