import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/blogs.css";

export const Blogs = () => {

// Otra forma de hacerlo mediante la store y actions. Usando AppContext
//     const { store } = useContext(Context);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         setTimeout(() => {
//             setLoading(false);
//         }, 2000);
//     }, []); 

//     return (
//         <section className="container-fluid container-blog">
//             <div className="row row-blog">
//                 {loading ? (
//                 <div className="container-fluid">
//                     <h1 style={{ textAlign: "center", color: "rgb(5,76,132)"}}>Cargando...</h1>
//                 </div>
//             ) :store.blogs.length > 0 ? (
//                     store.blogs.map((post, index) => (
//                         <div className="card col-12 col-md-4 card-blog" key={index}>
//                             <Link to={`/blog/${post.id}`}><img src={post.img} className="card-img-top img-blog" alt="imagen de post"/></Link>
//                             <div className="card-body">
//                                 <Link to={`/blog/${post.id}`} className="card-title title-blog" ><h5>{post.title}</h5></Link>
//                                 <p className="card-text date-blog">{post.date}</p>
//                             </div>
//                         </div>
//                     ))
//                 ) : (
//                     <div className="container-fluid">
//                         <h1 style={{ textAlign: "center", color: "rgb(5,76,132)"}} >No hay post publicados</h1>
//                     </div>
//                 )}
//             </div>
//         </section>
//     );
// };

    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
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
    }, []);

    return (
        <section className="container-fluid container-blog">
            <div className="row row-blog">
                {loading ? (
                    <p style={{ textAlign: "center", color: "rgb(5,76,132)"}}>Cargando...</p>
                ) : posts.length > 0 ? (
                    posts.map((post, index) => (
                        <div className="card col-12 col-sm-5 col-md-4 card-blog" key={index}>
                            <Link to={`/blog/${post.id}`}><img src={post.img} className="card-img-top img-blog" alt="imagen de post"/></Link>
                            <div className="card-body">
                                <Link to={`/blog/${post.id}`} className="card-title title-blog" ><h5>{post.title}</h5></Link>
                                <p className="card-text date-blog">{post.date}</p>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="container-fluid">
                        <h1 style={{ textAlign: "center", padding: "3rem", color: "rgb(5,76,132)"}} >No hay post publicados</h1>
                    </div>
                )}
            </div>
        </section>
    );
};