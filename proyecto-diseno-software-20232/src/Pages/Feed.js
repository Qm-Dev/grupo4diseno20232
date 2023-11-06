import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import ProfilePreview from '../Components/ProfilePreview';
import PostBox from '../Components/PostBox';
import SocialPost from '../Components/SocialPost';

function Feed() {

    // Estilos aquí

    return (
      <main className='bg-secondary-subtle'>
        <div className='container p-3'>
          <div className='row'>
            <div className='col-md-5 p-3 rounded-5'>
              <h1>Previsualización de perfil</h1>
              <ProfilePreview />
            </div>
            <div className='col-md-7 p-3 rounded-5'>
              <h1>Creación de la publicación</h1>
              <PostBox />
            </div>
          </div>
          <div className='row'>
            <div className='col-md-5'></div>
            <div className='col-md-7 p-3 rounded-5'>
              <h1>Feed / Otros posts</h1>
              <SocialPost />
              <SocialPost />
              <SocialPost />
              <SocialPost />
              <SocialPost />
            </div>
          </div>
        </div>
      </main>
    );
}

export default Feed;