import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProfilePreview from '../Components/ProfilePreview';
import PostBox from '../Components/PostBox';
import SocialPost from '../Components/SocialPost';
import NewPost from '../Components/NewPost';
import Carga from '../Components/Carga';
import ProfileRecomendations from '../Components/ProfileRecomendations';
import Trends from '../Components/Trends';

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

    // Lista de tendencias base
  const listaDeTendencias = [
    "Sostenibilidad",
    "Eficiencia energética",
    "Diseño modular",
    "Innovación tecnológica",
    "Construcción verde",
    "Digitalización",
    "Smart Homes",
    "Seguridad laboral",
    "Materiales reciclados",
    "Arquitectura moderna",
    "Eficiencia hídrica",
    "Construcción prefabricada",
    "Urbanismo sostenible",
    "Tecnología BIM",
    "Renovación urbana"
  ];
  

  // Seleccionar las tendencias de forma aleatoria
  const tendenciasAleatorias = [];
  while (tendenciasAleatorias.length < 4) {
    const tendencia = listaDeTendencias[Math.floor(Math.random() * listaDeTendencias.length)];
    if (!tendenciasAleatorias.includes(tendencia)) {
      tendenciasAleatorias.push(tendencia);
    }
  }

  // Generar y ordenar las cantidades aleatorias de post
  const tendenciasConPost = tendenciasAleatorias.map(tendencia => {
    const cantidadDePost = Math.floor(Math.random() * (10000 - 1000 + 1)) + 1000;
    return { tendencia, cantidadDePost };
  });

  tendenciasConPost.sort((a, b) => b.cantidadDePost - a.cantidadDePost);


  const [mostrarAlertaShare, setMostrarAlertaShare] = useState(false);

  const handleShareButtonClick = () => {
    // Mostrar la alerta
    setMostrarAlertaShare(true);

    // Ocultar la alerta después de 3 segundos
    setTimeout(() => {
      setMostrarAlertaShare(false);
    }, 3000);
  };

  const [mostrarAlertaLike, setMostrarAlertaLike] = useState(false);

  const handleLikeButtonClick = () => {
    // Mostrar la animación
    setMostrarAlertaLike(true);

    // Ocultar la animación después de 3 segundos
    setTimeout(() => {
      setMostrarAlertaLike(false);
    }, 3000);
  };

    return (
      <main className='bg-secondary-subtle min-vh-100'>
        <div id="change" className='container p-3'>
          <div className='row'>
            {/* Recomendaciones de otros usuarios para añadir y Tendencias de la red social*/}
            <div className='col-md-3 order-first order-md-1 rounded-5 sticky-md-top' style={previewProfilesStyle}>
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
              <div class="card mt-3">
                  <div class="card-header bg-primary text-white">
                    <h4 class="text-center"><i class="fa fa-sort-amount-desc mt-2"></i> Tendencias</h4>
                  </div>
                  {tendenciasConPost.length > 0 ? (
                                    tendenciasConPost.map((tendencia, index) => (
                    <Trends key={index} nombre={tendencia.tendencia} cant={tendencia.cantidadDePost}/>
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
                                <NewPost onShareButtonClick={handleShareButtonClick} onLikeButtonClick={handleLikeButtonClick} key={index} nombrePersona={nombreUsuario[0].name.first} apellidoPersona={nombreUsuario[0].name.last} fotoPerfilPersona={nombreUsuario[0].picture.thumbnail} fecha={nombreUsuario[0].dob.date} msg={mensaje}/>
                              ))
              ) : (
                null
              )}
              {/* Nueva publicación (APIs) */}
              {nombreUsuarios.length > 0 ? (
                              nombreUsuarios.map((usuario, index) => (
                                <SocialPost onShareButtonClick={handleShareButtonClick} onLikeButtonClick={handleLikeButtonClick} key={index} nombrePersona={usuario.name.first} apellidoPersona={usuario.name.last} fotoPerfilPersona={usuario.picture.thumbnail} fecha={usuario.dob.date} />
                              ))
              ) : (
                <Carga />
              )}
            </div>
            {/* Previsualización del perfil */}
            <div className='col-md-3 order-md-3 rounded-5'>
            {mostrarAlertaLike && (
                <div className="alert alert-danger text-center" role="alert">
                Haz recomendado la publicacion!
                </div>
            )}
            {mostrarAlertaShare && (
                <div className="alert alert-success text-center" role="alert">
                Haz compartido la publicacion!
                </div>
            )}
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