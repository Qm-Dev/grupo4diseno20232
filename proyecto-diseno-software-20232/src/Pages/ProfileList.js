import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import JobProfile from '../Components/JobProfile';

function ProfileList() {

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

    const fechasArray = Object.keys(fechas);

    return (
        <main className='bg-secondary-subtle'>
            <div class="container pt-3">
                <h1 class="mb-4">Formulario de Profesiones</h1>
                <form>
                    <div class="mb-3">
                        <label for="profesion" class="form-label">Selecciona tu profesión:</label>
                        <select id="profesion" name="profesion" class="form-select">
                            <option value="Albañil">Albañil</option>
                            <option value="Carpintero">Carpintero</option>
                            <option value="Electricista">Electricista</option>
                            <option value="Fontanero">Fontanero</option>
                            <option value="Pintor">Pintor</option>
                            <option value="Soldador">Soldador</option>
                            <option value="Techador">Techador</option>
                            <option value="Jardinero/Landscaper">Jardinero/Landscaper</option>
                            <option value="Trabajador de demolición">Trabajador de demolición</option>
                            <option value="Operador de maquinaria pesada">Operador de maquinaria pesada</option>
                            <option value="Ayudante de construcción">Ayudante de construcción</option>
                            <option value="Operador de montacargas">Operador de montacargas</option>
                            <option value="Encargado de limpieza y mantenimiento">Encargado de limpieza y mantenimiento</option>
                            <option value="Operador de herramientas manuales">Operador de herramientas manuales</option>
                            <option value="Instalador de aislamiento">Instalador de aislamiento</option>
                            <option value="Asistente de carpintería">Asistente de carpintería</option>
                            <option value="Operador de grúa móvil">Operador de grúa móvil</option>
                            <option value="Operador de excavadora">Operador de excavadora</option>
                            <option value="Armador de estructuras de acero">Armador de estructuras de acero</option>
                            <option value="Instalador de suelos">Instalador de suelos</option>
                            <option value="Operario de encofrado">Operario de encofrado</option>
                            <option value="Conserje">Conserje</option>
                            <option value="Operador de compactadora">Operador de compactadora</option>
                            <option value="Operador de miniexcavadora">Operador de miniexcavadora</option>
                            <option value="Instalador de tuberías">Instalador de tuberías</option>
                            <option value="Ayudante de electricista">Ayudante de electricista</option>
                            <option value="Auxiliar de plomería">Auxiliar de plomería</option>
                            <option value="Auxiliar de pintura">Auxiliar de pintura</option>
                        </select>
                    </div>
                    <div class="mb-3">
                        <label for="edadMinima" class="form-label">Edad Mínima:</label>
                        <input type="number" class="form-control" id="edadMinima" name="edadMinima" value="20" required></input>
                    </div>
                    <div class="mb-3">
                        <label for="edadMaxima" class="form-label">Edad Máxima:</label>
                        <input type="number" class="form-control" id="edadMaxima" name="edadMaxima" value="60" required></input>
                    </div>
                    <div class="mb-3">
                        <label for="region" class="form-label">Selecciona tu región:</label>
                        <select id="region" name="region" class="form-select">
                            <option value="Región de Arica y Parinacota">Región de Arica y Parinacota</option>
                            <option value="Región de Tarapacá">Región de Tarapacá</option>
                            <option value="Región de Antofagasta">Región de Antofagasta</option>
                            <option value="Región de Atacama">Región de Atacama</option>
                            <option value="Región de Coquimbo">Región de Coquimbo</option>
                            <option value="Región de Valparaíso">Región de Valparaíso</option>
                            <option value="Región Metropolitana de Santiago">Región Metropolitana de Santiago</option>
                            <option value="Región del Libertador General Bernardo O'Higgins">Región del Libertador General Bernardo O'Higgins</option>
                            <option value="Región del Maule">Región del Maule</option>
                            <option value="Región de Ñuble">Región de Ñuble</option>
                            <option value="Región del Biobío">Región del Biobío</option>
                            <option value="Región de La Araucanía">Región de La Araucanía</option>
                            <option value="Región de Los Ríos">Región de Los Ríos</option>
                            <option value="Región de Los Lagos">Región de Los Lagos</option>
                            <option value="Región de Aysén del General Carlos Ibáñez del Campo">Región de Aysén del General Carlos Ibáñez del Campo</option>
                            <option value="Región de Magallanes y de la Antártica Chilena">Región de Magallanes y de la Antártica Chilena</option>
                        </select>
                    </div>
                    <div class="mb-3">
                        <label for="cantidad" class="form-label">Cantidad:</label>
                        <input type="number" class="form-control" id="cantidad" name="cantidad" value="10" required></input>
                    </div>
                    <div class="row justify-content-around">
                        <button type="submit" class="btn btn-primary col-3">Buscar</button>
                        <button type="submit" class="btn btn-success col-3">Excel</button>
                    </div>
                </form>
            </div>
            <div className='container p-3'>
                {/* Crear las publicaciones del feed */}
                {nombreUsuarios.length > 0 ? (
                                nombreUsuarios.map((usuario, index) => (
                                    <JobProfile key={index} nombrePersona={usuario.name.first} apellidoPersona={usuario.name.last} fotoPerfilPersona={usuario.picture.large} fecha={usuario.dob.date} correo={usuario.email} ciudad={"Región de Arica y Parinacota"} telefono={usuario.cell} edad={Math.floor(Math.random() * 40 + 20)} profesion={"Albañil"}/>
                                ))
                ) : (
                    <p>Cargando notificaciones...</p>
                )}
            </div>
        </main>
    );
}

export default ProfileList;