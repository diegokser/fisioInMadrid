import React, { useContext, useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { Actions } from "@cloudinary/url-gen";
import "../../styles/post.css";

export const UserBlog = () => {
    const params = useParams()
    const [post, setPost] = useState([]);
    const {store, actions} = useContext(Context)

    useEffect(()=> {
        actions.blog(params.id)
    })

    return(
        <section className="container-fluid container-post">
            <h1 className="title-especialidades" style={{ textAlign: "center" }}><span className="title-1">NUESTRO</span><span className="title-2"> BLOG</span></h1>
            {store.blog ? (
                <div>
                    <img src={store.blog.img} alt="foto post" className="img-post"/>                    
                    <p className="date-post"> {new Date(store.blog.date).toLocaleDateString()}</p>
                    <h2 className="title-post">{store.blog.title}</h2>
                    <p className="description-post">{store.blog.description}</p>
                </div>
                ) : <h1 className="title-post">Nada que mostrar</h1>}
        </section>
)}

// export const UserBlog = () => {
//     const [post, setPost] = useState({})

// useEffect(() => {
//     const fetchData = async (id) => {
//         try {
//             const response = await fetch(
//                 `${process.env.BACKEND_URL}/api/post/${id}`,
//                 {
//                     method: "GET",
//                     headers: {
//                         "Content-Type": "application/json",
//                     },
//                 }
//             );

//             // Check if the response is successful (status code 2xx)
//             if (response.ok) {
//                 const result = await response.json();
//                 setPost({result});
//             } else {
//                 // If the response status is not okay, log the response text
//                 const errorText = await response.text();
//                 console.error("Error al obtener el post:", errorText);
//             }
//         } catch (error) {
//             console.error("Error al obtener el post:", error);
//         } 
//     };

//     fetchData();
// }, []);

//     return(
//         <section className="container-fluid">
//             <h1 className="title-especialidades" style={{ textAlign: "center" }}><span className="title-1">NUESTRO</span><span className="title-2"> BLOG</span></h1>
//             {post.map((postItem, index) => (
//                 <div key={index}>
//                     <img src={postItem.img} alt="foto post" className="imagen-post"/>                    
//                     <p>{postItem.date}</p>
//                     <h2>{postItem.title}</h2>
//                     <p>{postItem.description}</p>
//                 </div>
//             ))}
//         </section>
// )}