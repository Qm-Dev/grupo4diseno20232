import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import ProfilePreview from '../Components/ProfilePreview';
import PostBox from '../Components/PostBox';
import SocialPost from '../Components/SocialPost';
import axios from 'axios';

function Feed() {

  // Utilización de la API randomuser.me
  const post_amount = Math.floor(Math.random() * 11);
  const apiNamesUrl = `https://randomuser.me/api/?results=${post_amount}&nat=us`;

  // Obtención de varios usuarios para la creación de posts
  const [nombreUsuarios, setNombreUsuarios] = useState([]);
  useEffect( () => {

      axios.get(apiNamesUrl).then((response) => {  
        setNombreUsuarios(response.data.results)
      }).catch((error) => {
          console.error('Error');
      });

  },[]);

  // Obtención de un único usuario
  const [nombreUsuario, setNombreUsuario] = useState([]);
  useEffect( () => {

    axios.get(`https://randomuser.me/api/?results=1&nat=us`).then((response) => {  
      setNombreUsuario(response.data.results)
    }).catch((error) => {
        console.error('Error');
    });

},[]);

    return (
      <main className='bg-secondary-subtle'>
        <div className='container p-3'>
          <div className='row'>
            <div className='col-md-5 p-3 rounded-5'>
              {nombreUsuario.length > 0 ? (
                              nombreUsuario.map((usuario, index) => (
                                <ProfilePreview key={index} nombrePersona={usuario.name.first} apellidoPersona={usuario.name.last} fotoPerfilPersona={usuario.picture.large} fecha={usuario.dob.date}/>
                              ))
              ) : (
                <p>Cargando tu perfil...</p>
              )}
            </div>
            <div className='col-md-7 p-1 rounded-5'>
              {nombreUsuario.length > 0 ? (
                              nombreUsuario.map((usuario, index) => (
                                <PostBox key={index} fotoPerfilPersona={usuario.picture.large}/>
                              ))
              ) : (
                <p></p>
              )}
            </div>
          </div>
          <div className='row'>
            <div className='col-md-5'></div>
            <div className='col-md-7 p-1 rounded-5'>
              {nombreUsuarios.length > 0 ? (
                              nombreUsuarios.map((usuario, index) => (
                                <SocialPost key={index} nombrePersona={usuario.name.first} apellidoPersona={usuario.name.last} fotoPerfilPersona={usuario.picture.thumbnail} fecha={usuario.dob.date}/>
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