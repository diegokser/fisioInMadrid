import React, { useContext, useEffect, useState} from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { Actions } from "@cloudinary/url-gen";
import "../../styles/post.css";

// export const UserBlog = () => {
//     const params = useParams()
//     const [post, setPost] = useState([]);
//     const {store, actions} = useContext(Context)

//     useEffect(()=> {
//         actions.blog(params.id)
//     })

//     return(
//         <section className="container-fluid container-post">
//             <h1 className="title-especialidades" style={{ textAlign: "center" }}><span className="title-1">NUESTRO</span><span className="title-2"> BLOG</span></h1>
//             {store.blog ? (
//                 <div>
//                     <img src={store.blog.img} alt="foto post" className="img-post"/>                    
//                     <p className="date-post"> {new Date(store.blog.date).toLocaleDateString()}</p>
//                     <h2 className="title-post">{store.blog.title}</h2>
//                     <p className="description-post">{store.blog.description}</p>
//                 </div>
//                 ) : <h4 className="title-post pt-5">Nada que mostrar</h4>}
//         </section>
// )}

export const UserBlog = () => {
    const [post, setPost] = useState({});
    const params = useParams();
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch(
            `${process.env.BACKEND_URL}/api/post/${params.id}`,
            {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
              },
            }
          );
  
          if (response.ok) {
            const result = await response.json();
            setPost(result); 
          } else {
            console.error('Error al obtener el post:', response.statusText);
          }
        } catch (error) {
          console.error('Error al obtener el post:', error);
        }
      };
  
      fetchData();
    }, [params.id]);

    return (
      <section className="container-fluid container-post">
        <h1 className="title-especialidades" style={{ textAlign: 'center' }}>
          <span className="title-1">NUESTRO</span>
          <span className="title-2"> BLOG</span>
        </h1>
        {post.title ? (
          <div>
            <h2 className="title-post">{post.title}</h2>
            <img src={post.img} alt="foto post" className="img-post" />
            <p className="date-post" >{new Date(post.date).toLocaleDateString()}</p>
            <p className="description-post">{post.description}</p>
          </div>
          ) : <h4 className="title-post pt-5">Nada que mostrar</h4>} 
      </section>
    );
  };