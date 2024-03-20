import React, { useContext, useEffect, useState} from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
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

    const [posts, setPosts] = useState({});
    const [loading, setLoading] = useState(true);
  
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

      const fetchData1 = async () => {
        try {
            const response = await fetch(
                `${process.env.BACKEND_URL}/api/post`,
                {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );

            const result = await response.json();

            if (response.ok) {
                setPosts(result.map(post => ({ ...post, date: new Date(post.date).toLocaleDateString() })));
                // Se pone asi en lugar de setPosts(result) porque en JS en el front aparece la hora y así formatea la hora y escoge ese formato
            } else {
                console.error("Error al obtener las publicaciones:", result);
            }
        } catch (error) {
            console.error("Error al obtener las publicaciones:", error);
        } finally {
            setLoading(false); // Establece loading a false después de obtener los datos
        }
    };

      fetchData();
      fetchData1();
    }, [params.id]);

    return (
      <section className="container-fluid container-post">
        <h1 className="title-especialidades pb-3" style={{ textAlign: 'center' }}>
          <span className="title-1">NUESTRO</span>
          <span className="title-2"> BLOG</span>
        </h1>
        <div className="row">
          {post.title ? (
              <div className="all-post col-lg-9">
                <h2 className="title-post">{post.title}</h2>
                <img src={post.img} alt="foto post" className="img-post" />
                <div className="text-post">
                  <p className="date-post" >{new Date(post.date).toLocaleDateString()}</p>
                  <p className="description-post">{post.description}</p>
                </div>
              </div>
            ) : <h4 className="title-post pt-5">Nada que mostrar</h4>} 
                  <div className="col-3">
                    <div className="card other-posts">
                    <h4 className="title-last-posts">Últimas publicaciones</h4>
                    {posts.length > 0 && posts.map((p, index) => (
                    p.id !== post.id && index >= posts.length - 3 && (
                      <div className="row all-posts" key={p.id}>
                        <div className="col-md-3 all-img-posts">
                          <img src={p.img} alt="foto post" className="img-posts"/>
                        </div>
                        <div className="col-md-8 all-info-posts">
                          <div className="card-body">
                            <Link to={`/blog/${p.id}`} className="card-title title-posts" ><h6>{p.title}</h6></Link>
                            {/* <p className="card-text date-posts"><small>{new Date(p.date).toLocaleDateString()}</small></p> */}
                          </div>
                        </div>
                      </div>
                     )))}
                    </div>
                  </div>

        </div>
      </section>
    );
  };