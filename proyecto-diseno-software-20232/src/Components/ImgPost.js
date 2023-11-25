import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function ImgPost() {

    // Argumentos
    const img = Math.round(Math.random());
    const linkimg = `https://picsum.photos/id/${Math.floor(Math.random() * 1084) + 1}/400`;

    if (img === 0) {
        return (
        <div>
            <img src={linkimg} class="rounded img-fluid text-center mb-4" alt="Imagen de ejemplo" style={{ width: '100%', height: 'auto' }}></img>
        </div>
        );
    } else if (img === 1) {
        return (
            <p></p>
        );
        }
    else {
            <p></p>
        }
    }

export default ImgPost;