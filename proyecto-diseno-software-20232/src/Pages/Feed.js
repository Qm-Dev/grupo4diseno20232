import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import ProfilePreview from '../Components/ProfilePreview';

function Feed() {

    // Estilos aquí

    return (
      <main>
        <div className='container text-center'>
          <div className='row'>
            <div className='col-md-5 border border-5 p-3 rounded-5 bg-info'>
              <h1>Previsualización de perfil</h1>
              <ProfilePreview />
            </div>
            <div className='col-md-7 border border-5 p-3 rounded-5 bg-warning'>
              <h1>Creación de la publicación</h1>
            </div>
          </div>
          <div className='row'>
            <div className='col-md-12 border p-3 border-5 rounded-5 bg-success'>
              <h1>Feed / Otros posts</h1>
            </div>
          </div>
        </div>
      </main>
    );
}

export default Feed;