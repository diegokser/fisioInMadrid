import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/blogs.css";

export const Blogs = () => {
    const { store, actions } = useContext(Context);
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
                    <p>Cargando...</p>
                ) : posts.length > 0 ? (
                    posts.map((post, index) => (
                        <div className="card col-12 col-md-4 card-blog" key={index}>
                            <Link to={`/blog/${post.id}`}><img src={post.img} className="card-img-top img-blog" alt="imagen de post"/></Link>
                            <div className="card-body">
                                <h5 className="card-title title-blog">{post.title}</h5>
                                <p className="card-text date-blog">{post.date}</p>
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