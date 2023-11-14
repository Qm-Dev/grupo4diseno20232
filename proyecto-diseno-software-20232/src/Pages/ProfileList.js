import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Notification from '../Components/Notification';
import axios from 'axios';

function ProfileList() {

  // Utilización de la API randomuser.me

  const post_amount = Math.floor(Math.random() * 11);
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

    return (
        <main className='bg-secondary-subtle'>
        <div class="container mt-5">
        <h1 class="mb-4">Formulario de Profesiones</h1>
    
        <form>
        <div class="mb-3">
            <label for="profesion" class="form-label">Selecciona tu profesión:</label>
            <select id="profesion" name="profesion" class="form-select">
            <option value="Albañil">Albañil</option>
            <option value="Carpintero">Carpintero</option>
            <option value="Electricista">Electricista</option>
            </select>
        </div>
    
        <div class="mb-3">
            <label for="edadMinima" class="form-label">Edad Mínima:</label>
            <input type="number" class="form-control" id="edadMinima" name="edadMinima" required></input>
        </div>
    
        <div class="mb-3">
            <label for="edadMaxima" class="form-label">Edad Máxima:</label>
            <input type="number" class="form-control" id="edadMaxima" name="edadMaxima" required></input>
        </div>

        <div class="mb-3">
            <label for="region" class="form-label">Selecciona tu región:</label>
            <select id="region" name="region" class="form-select">
            <option value="Región Metropolitana">Región Metropolitana</option>
            <option value="Región de Valparaíso">Región de Valparaíso</option>
            <option value="Región del Libertador General Bernardo O'Higgins">Región del Libertador General Bernardo O'Higgins</option>
            </select>
        </div>
        <div class="mb-3">
            <label for="cantidad" class="form-label">Cantidad:</label>
            <input type="number" class="form-control" id="cantidad" name="cantidad" required></input>
        </div>
        <button type="submit" class="btn btn-primary">Enviar</button>
        </form>
    </div>
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

export default ProfileList;