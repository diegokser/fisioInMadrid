import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { BackendURL } from "./component/backendURL";

import { Home } from "./pages/home";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { Signup } from "./pages/signup";
import { Specialties } from "./pages/specialties";
import { Tarifas } from "./pages/tarifas";
import { Derechos } from "./pages/derechos";
import { Contacto } from "./pages/contacto";
import { Legal } from "./pages/legal";
import { Privacidad } from "./pages/privacidad";
import { Login } from "./pages/login";
import { Post } from "./pages/post";

//create your first component
const Layout = () => {
    //the basename is used when your project is published in a subdirectory and not in the root of the domain
    // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
    const basename = process.env.BASENAME || "";

    if(!process.env.BACKEND_URL || process.env.BACKEND_URL == "") return <BackendURL/ >;

    return (
        <div>
            <BrowserRouter basename={basename}>
                <ScrollToTop>
                    <Navbar />
                    <Routes>
                        <Route element={<Home />} path="/" />
                        <Route element={<h1>Not found!</h1>} />
                        <Route element={<Signup />} path="/admin/signup"/>
                        <Route element={<Login />} path="/admin/login"/>
                        <Route element={<Specialties />} path="/especialidades" />
                        <Route element={<Tarifas />} path="/tarifas" />
                        <Route element={<Derechos />} path="/derechos" />
                        <Route element={<Contacto />} path="/contacto" />
                        <Route element={<Legal />} path="/legal" />
                        <Route element={<Privacidad />} path="/privacidad" />
                        <Route element={<Post />} path="/admin/post" />
                    </Routes>
                    <Footer />
                </ScrollToTop>
            </BrowserRouter>
        </div>
    );
};

export default injectContext(Layout);