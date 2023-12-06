import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
// import "../../styles/blogs.css";

export const Blogs = () => {
    const { store, actions } = useContext(Context);
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true); // Agrega un estado para manejar la carga

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
                    setPosts(result);
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
    }, []); // Dependencia vacía para que se ejecute solo una vez al montar el componente

    return (
        <section className="container-fluid">
            <div className="row">
                {loading ? (
                    <p>Cargando...</p>
                ) : posts.length > 0 ? (
                    posts.map((post, index) => (
                        <div className="card col-12 col-md-4" key={index}>
                            <Link to={`/blog/${post.id}`}><img src={post.img} className="card-img-top" alt="imagen de post"/></Link>
                            <div className="card-body">
                                <h5 className="card-title">{post.title}</h5>
                                <p className="card-text">{post.date}</p>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="container-fluid">
                        <h1>No hay post publicados</h1>
                    </div>
                )}
            </div>
        </section>
    );
};