import React, { useEffect, useState } from 'react';
import "../../styles/politicas.css";
import { Link } from 'react-router-dom';

export const CookieAlert = () => {
    // const [showNotice, setShowNotice] = useState(!document.cookie.includes('cookie_consent'));

    // const acceptCookies = () => {
    //     // Realiza una solicitud al servidor para establecer la cookie de consentimiento.
    //     fetch(process.env.BACKEND_URL + '/api/set_cookie', {
    //         method: 'POST',
    //     })
    //     .then(() => {
    //         // Una vez que el servidor establece la cookie, oculta el aviso.
    //         setShowNotice(false);
    //     })
    //     .catch(error => {
    //         console.error('Error al establecer la cookie de consentimiento:', error);
    //     });
    // };

    const [showNotice, setShowNotice] = useState(false);

    useEffect(() => {
        const hasConsent = localStorage.getItem('cookie_consent');
        setShowNotice(!hasConsent);
    }, []);

    const acceptCookies = () => {
        // Realiza una solicitud al servidor para establecer la cookie de consentimiento.
        fetch(process.env.BACKEND_URL + '/api/set_cookie', {
            method: 'POST',
        })
        .then(() => {
            // Una vez que el servidor establece la cookie, oculta el aviso y almacena el consentimiento en localStorage.
            setShowNotice(false);
            localStorage.setItem('cookie_consent', 'accepted');
        })
        .catch(error => {
            console.error('Error al establecer la cookie de consentimiento:', error);
        });
    };

    return showNotice ? (
        <div className="cookie-notice container-fluid">
            <div className='row cookies-all'>
                <p className='cookie-alert-text col-9'>Este sitio web utiliza cookies para optimizar su funcionamiento y mejorar nuestros servicios. Al continuar navegando, acepta nuestro uso de cookies.&nbsp;
                    <Link className='cookie-alert-text' to="/cookies">Consulta nuestra política de cookies</Link>
                </p>
                <button className="cookie-alert-button col-2" onClick={acceptCookies}>Aceptar</button>
            </div>
        </div>
    ) : null;
};