import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function SocialPost() {

    return (
        <div className='container'>
            <div className='row justify-content-md-center'>
                <div className='border border-5 border-dark p-4 col-md-6'>
                    <h4>Nombre de usuario</h4>
                    <p>Texto del post</p>
                    <button className='btn btn-primary m-1'>Comentar</button>
                    <button className='btn btn-primary m-1'>Interactuar</button>
                </div>
            </div>
        </div>
    );
}

export default SocialPost;