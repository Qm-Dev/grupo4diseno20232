import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import ProfilePreview from '../Components/ProfilePreview';
import PostBox from '../Components/PostBox';
import SocialPost from '../Components/SocialPost';
import axios from 'axios';
import Carga from '../Components/Carga';
import ProfileRecomendations from '../Components/ProfileRecomendations';

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

  // Obtención de un único usuario
  const [nombreRecomendaciones, setNombreRecomendaciones] = useState([]);
  useEffect( () => {

    axios.get(`https://randomuser.me/api/?results=3&nat=us`).then((response) => {  
      setNombreRecomendaciones(response.data.results)
    }).catch((error) => {
        console.error('Error');
    });

},[]);

    return (
      <main className='bg-secondary-subtle'>
        <div className='container p-3'>
          <div className='row'>
            {/* Previsualización del perfil */}
            <div className='col-md-3 rounded-5'>
              <div class="card">
                  <div class="card-header bg-primary text-white">
                    <h4 class="text-center"><i class="fas fa-users mt-2"></i> Añadir a tu feed</h4>
                  </div>
                {nombreRecomendaciones.length > 0 ? (
                                nombreRecomendaciones.map((usuario1, index) => (
                                  <ProfileRecomendations key={index} nombrePersona={usuario1.name.first} apellidoPersona={usuario1.name.last} fotoPerfilPersona={usuario1.picture.thumbnail}/>
                                ))
                ) : (
                  < Carga />
                )}
            </div>
            </div>
            {/* Post Box */}
            <div className='col-md-6 rounded-5'>
              {nombreUsuario.length > 0 ? (
                              nombreUsuario.map((usuario, index) => (
                                <PostBox key={index} fotoPerfilPersona={usuario.picture.large}/>
                              ))
              ) : (
                < Carga />
              )}
            </div>
            <div className='col-md-3 rounded-5'>
              {nombreUsuario.length > 0 ? (
                                nombreUsuario.map((usuario, index) => (
                                  <ProfilePreview key={index} nombrePersona={usuario.name.first} apellidoPersona={usuario.name.last} fotoPerfilPersona={usuario.picture.large} fecha={usuario.dob.date}/>
                                ))
                ) : (
                  < Carga />
                )}
            </div>
          </div>
          <div className='row'>
            <div className='col-md-3'></div>
            {/* Otras publicaciones */}
            <div className='col-md-6 rounded-5'>
              {nombreUsuarios.length > 0 ? (
                              nombreUsuarios.map((usuario, index) => (
                                <SocialPost key={index} nombrePersona={usuario.name.first} apellidoPersona={usuario.name.last} fotoPerfilPersona={usuario.picture.thumbnail} fecha={usuario.dob.date}/>
                              ))
              ) : (
                <Carga />
              )}
            </div>
            <div className='col-md-3'></div>
            {/* Otras publicaciones */}
          </div>
        </div>
      </main>
    );
}

export default Feed