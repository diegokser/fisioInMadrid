import React, { useState, useContext, useEffect } from "react";
import "../../styles/postea.css";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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

      const handlePost = async (e) => {
        e.preventDefault();
    
        // Procesamiento de la descripción para mantener los saltos de línea
        const processedDescription = post.description.replace(/\n/g, '<br />');
        const processedPost = { ...post, description: processedDescription };
    
        if (processedPost.title === "" || processedPost.description === "" || processedPost.img === "") {
            console.log("Faltan datos");
            toast.error('Faltan datos');
        } else {
            try {
                const result = await actions.post(processedPost.title, processedPost.description, processedPost.img);
                if (result === true) {
                    toast.success('Post publicado!', {
                        onClose: () => {
                            navigate('/admin/blogs', { replace: true });
                        }
                    });
                } else {
                    console.log(result);
                    toast.error(result);
                }
            } catch (error) {
                console.error("Error en la solicitud API:", error);
                toast.error(error);
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
            <form onSubmit={(e) => handlePost(e)} encType="multipart/form-data">
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
                <Link to="/admin/blogs" className="btn btn-danger ms-3">Cancelar</Link>
                <ToastContainer
                position="bottom-right"
                autoClose={1000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
                onClose="resolve"
                />
            </form>
        </section>
    )
}