import React from 'react';
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

    const inputPostingStyle = {
        height: '100%',
        width: '100%',
    }

    const buttonPostingStyle = {
        border: '5px solid gray',
        height: '3rem',
        width: '6rem'
    }

    const postedStyle = {
        display: 'flex',
        border: '5px solid black',
        marginTop: '1rem',
        marginLeft: 'auto',
        marginRight: 'auto',
        width: '10rem',
        borderRadius: '10px'
    }

    return (
        <main>
            <div className='feed'>
                <div className='profilePreview' style={profilePreviewStyle}>
                    <h1>Previsualización de perfil</h1>
                </div>
                <div className='postingPreview' style={postingStyle}>
                    <h1>Creación post</h1>
                    <input type='text' placeholder='Tu publicación' style={inputPostingStyle}></input>
                    <button type='submit' className='btn btn-info' style={buttonPostingStyle}>Publicar</button>
                </div>
                <div className='postExample' style={postedStyle}>
                    <h1>Post de ejemplo</h1>
                </div>
            </div>
        </main>
    );
}

export default Feed;