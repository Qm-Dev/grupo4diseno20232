import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProfilePreview from '../Components/ProfilePreview';
import PostBox from '../Components/PostBox';
import SocialPost from '../Components/SocialPost';
import NewPost from '../Components/NewPost';
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

  // Recomendaciones
  const [nombreRecomendaciones, setNombreRecomendaciones] = useState([]);
  useEffect( () => {

    axios.get(`https://randomuser.me/api/?results=3&nat=us`).then((response) => {  
      setNombreRecomendaciones(response.data.results)
    }).catch((error) => {
        console.error('Error');
    });

  },[]);

  // Nueva publicación a partir del PostBox
  const [mensajes, setMensajes] = useState([]);
  const handlePublicar = (mensaje) => {
    setMensajes([mensaje, ...mensajes]);
  };

  // Estilos específicos
  const previewProfilesStyle = {
    height: '100%',
    marginBottom: '1rem'
  }

    return (
      <main className='bg-secondary-subtle min-vh-100'>
        <div id="change" className='container p-3'>
          <div className='row'>
            {/* Recomendaciones de otros usuarios para añadir */}
            <div className='col-md-3 order-first order-md-1 rounded-5' style={previewProfilesStyle}>
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
            {/* Feed */}
            <div className='col-md-6 order-last order-md-2 rounded-2'>
              {/* Post Box */}
              {nombreUsuario.length > 0 ? (
                              nombreUsuario.map((usuario, index) => (
                                <PostBox onPublicar={handlePublicar} key={index} fotoPerfilPersona={usuario.picture.large}/>
                              ))
              ) : (
                < Carga />
              )}
              {/* Nueva publicación */}
              {mensajes.length > 0 ? (
                              mensajes.map((mensaje, index) => (
                                <NewPost key={index} nombrePersona={nombreUsuario[0].name.first} apellidoPersona={nombreUsuario[0].name.last} fotoPerfilPersona={nombreUsuario[0].picture.thumbnail} fecha={nombreUsuario[0].dob.date} msg={mensaje}/>
                              ))
              ) : (
                null
              )}
              {/* Nueva publicación (APIs) */}
              {nombreUsuarios.length > 0 ? (
                              nombreUsuarios.map((usuario, index) => (
                                <SocialPost key={index} nombrePersona={usuario.name.first} apellidoPersona={usuario.name.last} fotoPerfilPersona={usuario.picture.thumbnail} fecha={usuario.dob.date} />
                              ))
              ) : (
                <Carga />
              )}
            </div>
            {/* Previsualización del perfil */}
            <div className='col-md-3 order-md-3 rounded-5'>
              {nombreUsuario.length > 0 ? (
                                nombreUsuario.map((usuario, index) => (
                                  <ProfilePreview key={index} nombrePersona={usuario.name.first} apellidoPersona={usuario.name.last} fotoPerfilPersona={usuario.picture.large} fecha={usuario.dob.date} ciudad={usuario.location.city} estado={usuario.location.state} pais={usuario.location.country}/>
                                ))
                ) : (
                  < Carga />
                )}
            </div>
          </div>
        </div>
      </main>
    );
}

export default Feed;