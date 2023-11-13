import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import ProfileInfo from '../Components/ProfileInfo';
import axios from 'axios';

function Profile() {

    // Obtención de un único usuario
    const [nombreUsuario, setNombreUsuario] = useState([]);
    useEffect( () => {

    axios.get(`https://randomuser.me/api/?results=1&nat=us`).then((response) => {  
        setNombreUsuario(response.data.results)
    }).catch((error) => {
        console.error('Error');
    });

},[]);

    const post_amount = Math.floor(Math.random() * 100 + 100);

    const [textoUsuario, setTextoUsuario] = useState([]);
    useEffect( () => {
        axios.get(`https://random-word-api.vercel.app/api?words=${post_amount}`).then((response) => {  
            setTextoUsuario(response.data)
        }).catch((error) => {
            console.error('Error');
    });

    },[]);

    const oracion = textoUsuario.join(' ');

    return (
        <main>
            {nombreUsuario.length > 0 ? (
                            nombreUsuario.map((usuario, index) => (
                                <ProfileInfo key={index} nombrePersona={usuario.name.first} apellidoPersona={usuario.name.last} fotoPerfilPersona={usuario.picture.large} fecha={usuario.dob.date} correo={usuario.email} ciudad={usuario.location.city} estado={usuario.location.state} pais={usuario.location.country} telefono={usuario.cell} texto={oracion}/>
                            ))
            ) : (
                <p>Cargando tu perfil...</p>
            )}
        </main>
    );
}

export default Profile;