import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function Feed() {

    const profilePreviewStyle = {
        display: 'flex',
        width: '20rem',
        border: '5px solid black',
        borderRadius: '20px',
        marginLeft: 'auto',
        marginRight: 'auto',
        textAlign: 'center',
        marginTop: '1rem',
        marginBottom: '1rem'
    }

    const postingStyle = {
        display: 'flex',
        border: '5px solid black',
        width: '20rem',
        marginLeft: 'auto',
        marginRight: 'auto',
        borderRadius: '10px',
    }

    const postedStyle = {
        display: 'flex',
        border: '5px solid black',
        marginTop: '1rem',
        marginLeft: 'auto',
        marginRight: 'auto',
        width: '10rem'
    }

    return (
        <main>
            <div className='feed'>
                <div className='profilePreview' style={profilePreviewStyle}>
                    <h1>Previsualización de perfil</h1>
                </div>
                <div className='postingPreview' style={postingStyle}>
                    <h1>Creación post</h1>
                </div>
                <div className='postExample' style={postedStyle}>
                    <h1>Post de ejemplo</h1>
                </div>
            </div>
        </main>
    );
}

export default Feed;