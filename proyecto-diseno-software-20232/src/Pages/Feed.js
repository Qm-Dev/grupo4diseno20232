import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import ProfilePreview from '../Components/ProfilePreview';
import PostBox from '../Components/PostBox';
import SocialPost from '../Components/SocialPost';
import axios from 'axios';

function Feed() {

  // Utilización de la API randomuser.me

  const post_amount = 3;
  const apiNamesUrl = `https://randomuser.me/api/?results=${post_amount}&nat=us`;
  const apiPfpUrl = 'https://picsum.photos/224/224';


  // Obtención de nombres y apellidos
  const [nombreUsuarios, setNombreUsuarios] = useState([]);

  useEffect( () => {

      axios.get(apiNamesUrl).then((response) => {  
        setNombreUsuarios(response.data.results)
      }).catch((error) => {
          console.error('Error');
      });

  },[]);

    return (
      <main className='bg-secondary-subtle'>
        <div className='container p-3'>
          <div className='row'>
            <div className='col-md-5 p-3 rounded-5'>
              <ProfilePreview />
            </div>
            <div className='col-md-7 p-3 rounded-5'>
              <PostBox />
            </div>
          </div>
          <div className='row'>
            <div className='col-md-5'></div>
            <div className='col-md-7 p-3 rounded-5'>
              {/* Crear las publicaciones del feed */}
              {nombreUsuarios.length > 0 ? (
                              nombreUsuarios.map((usuario, index) => (
                                <SocialPost key={index} nombrePersona={usuario.name.first} apellidoPersona={usuario.name.last} fotoPerfilPersona={usuario.picture.large} />
                              ))
              ) : (
                <p>Cargando publicaciones...</p>
              )}
            </div>
          </div>
        </div>
      </main>
    );
}

export default Feed;