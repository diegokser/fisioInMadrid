import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
// import "../../styles/blogs.css";


export const Blogs = () => {

    const { store, actions } = useContext(Context);
    const [posts, setPosts] = useState([]);
    


    return(
        <section className="container-fluid">
            <div className="row">

                <div className="card col-12 col-md-4">
                    {/* <Link><img src="..." className="card-img-top" alt="..."/></Link> */}
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}