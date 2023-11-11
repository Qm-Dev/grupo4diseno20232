import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Notification from '../Components/Notification';
import axios from 'axios';

function Notifications() {

  // Utilización de la API randomuser.me

  const post_amount = Math.floor(Math.random() * 11);
  const apiNamesUrl = `https://randomuser.me/api/?results=${post_amount}&nat=us`;
  const apiPfpUrl = 'https://picsum.photos/224/224';
  const apiDatesUrl = `https://api.lrs.org/random-date-generator?num_dates=${post_amount}`;


  // Obtención de nombres y apellidos
  const [nombreUsuarios, setNombreUsuarios] = useState([]);

  useEffect( () => {

      axios.get(apiNamesUrl).then((response) => {  
        setNombreUsuarios(response.data.results)
      }).catch((error) => {
          console.error('Error');
      });

  },[]);
  // Obtención de fechas
  const [fechas, setFechas] = useState([]);

  useEffect( () => {

      axios.get(apiDatesUrl).then((response) => {  
        setFechas(response.data.data)
      }).catch((error) => {
          console.error('Error');
      });

  },[]);

  const fechasArray = Object.keys(fechas)
  const listaInvertida = [...fechasArray].reverse();

    return (
      <main className='bg-secondary-subtle'>
        <div className='container p-3'>
              {/* Crear las publicaciones del feed */}
              {nombreUsuarios.length > 0 ? (
                              nombreUsuarios.map((usuario, index) => (
                                <Notification key={index} nombrePersona={usuario.name.first} apellidoPersona={usuario.name.last} fotoPerfilPersona={usuario.picture.medium} fechaNoti={listaInvertida[index]}/>
                              ))
              ) : (
                <p>Cargando notificaciones...</p>
              )}
        </div>
      </main>
    );
}

export default Notifications;