import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Notification from '../Components/Notification';
import axios from 'axios';

function Notifications() {

  // Utilización de la API randomuser.me

  const post_amount = Math.floor(Math.random() * 11 + 5);
  const apiNamesUrl = `https://randomuser.me/api/?results=${post_amount}&nat=us`;
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

  const textStyle1 = {
    fontFamily: 'Nunito Sans'
  }

  const textStyle2 = {
    fontFamily: 'Yantramanav',
    fontWeight: 'bold'
  }

    return (
      <main className='bg-secondary-subtle min-vh-100'>
        <div id="change" className='container p-3'>
          <div className='row'>
            <div className='col-md-3 rounded-5'>
              {/* Izquierda notificaciones */}
              <div class="container mb-3 p-0">
                <div class="card text-center">
                  <div class="card-body">
                    <p class="card-text" style={textStyle1}>Gestiona tus notificaciones</p>
                    <a href="#" class="btn btn-primary" style={textStyle2}><i class="fa fa-cog" aria-hidden="true"></i> Ver configuración</a>
                  </div>
                </div>
              </div>
              <div class="container mb-3 p-0">
                <div class="card text-center">
                  <div class="card-body">
                    <p class="card-text" style={textStyle1}>Obtén más beneficios con Premium</p>
                    <a href="#" class="btn btn-success" style={textStyle2}><i class="fa fa-star" aria-hidden="true"></i> Contratar Premium</a>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-md-6 rounded-5'>
              <div class="card mb-3">
                <div class="card-body">
                  <div class="btn-group d-flex flex-column flex-lg-row justify-content-center gap-2">
                    <button type="button" class="btn btn-outline-primary rounded-pill active">Todo</button>
                    <button type="button" class="btn btn-outline-primary rounded-pill">Mis Publicaciones</button>
                    <button type="button" class="btn btn-outline-primary rounded-pill">Menciones</button>
                    <button type="button" class="btn btn-outline-primary rounded-pill">Empleo</button>
                  </div>
                </div>
              </div>
              {/* Crear las notificaciones */}
              {nombreUsuarios.length > 0 ? (
                              nombreUsuarios.map((usuario, index) => (
                                <Notification key={index} nombrePersona={usuario.name.first} apellidoPersona={usuario.name.last} fotoPerfilPersona={usuario.picture.medium} fechaNoti={listaInvertida[index]}/>
                              ))
              ) : (
                <p>Cargando notificaciones...</p>
              )}
            </div>
            <div className='col-md-3 rounded-5'>
              {/* Derecha notificaciones */}
              <div class="container p-0">
                <div class="card text-center">
                  <div class="card-header">
                    <h5 class="card-title m-0" style={textStyle1}>Anuncio</h5>
                  </div>
                  <div class="card-body">
                    <i class="fa fa-bar-chart fa-5x" aria-hidden="true"></i>
                    <p class="card-text pt-2" style={textStyle1}>Actualiza tus preferencias de trabajo para ayudar a los reclutadores a encontrarte.</p>
                    <a href="#" class="btn btn-primary"><i class="fa fa-pencil-square" aria-hidden="true"></i> Actualizar ahora</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
}

export default Notifications;