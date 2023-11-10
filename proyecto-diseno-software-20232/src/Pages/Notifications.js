import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Notification from '../Components/Notification';
import axios from 'axios';

function Notifications() {

  // Utilización de la API randomuser.me

  const post_amount = 10;
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
            <div className='col-md-5'></div>
            <div className='col-md-7 p-3 rounded-5'>
              {/* Crear las publicaciones del feed */}
              {nombreUsuarios.length > 0 ? (
                              nombreUsuarios.map((usuario, index) => (
                                <Notification key={index} nombrePersona={usuario.name.first} apellidoPersona={usuario.name.last} fotoPerfilPersona={usuario.picture.large} />
                              ))
              ) : (
                <p>Cargando notificaciones...</p>
              )}
            </div>
          </div>
        </div>
      </main>
    );
}

export default Notifications;