import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import axios from 'axios';

function Jobs() {

    const tipos_trabajos = [
        "Albañil",
        "Carpintero",
        "Electricista",
        "Fontanero",
        "Pintor",
        "Soldador",
        "Techador",
        "Jardinero/Landscaper",
        "Trabajador de demolición",
        "Operador de maquinaria pesada",
        "Ayudante de construcción",
        "Operador de montacargas",
        "Encargado de limpieza y mantenimiento",
        "Operador de herramientas manuales",
        "Instalador de aislamiento",
        "Asistente de carpintería",
        "Operador de grúa móvil",
        "Operador de excavadora",
        "Armador de estructuras de acero",
        "Instalador de suelos",
        "Operario de encofrado",
        "Conserje",
        "Operador de compactadora",
        "Operador de miniexcavadora",
        "Instalador de tuberías",
        "Ayudante de electricista",
        "Auxiliar de plomería",
        "Auxiliar de pintura",
    ];

    const [trabajos, setTrabajos] = useState([]);

    useEffect(() => {
        axios.get('https://api.generadordni.es/profiles/company')
            .then((response) => {
                setTrabajos(response.data);
            })
            .catch((error) => {
                console.error('Error al obtener datos de trabajos', error);
            });
    }, []);


    return (
        <main className='bg-secondary-subtle'>
                <div className="container p-3">
                        {/* creacion de post de empleos */}
                        {trabajos.map((trabajo, index) => (
                            <div key={index} class="card mb-1">
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-md-1">
                                            <img src={`https://picsum.photos/id/${Math.floor(Math.random() * 1084) + 1}/400`} class="me-3 rounded-circle img-thumbnail" alt="Imagen de Usuario"></img>
                                        </div>
                                        <div class="col-md-11">
                                            <h5 class="mt-0">{tipos_trabajos[Math.floor(Math.random() * tipos_trabajos.length)]} - {trabajo.razon_social}</h5>
                                            <p>Ubicacion: {trabajo.provincia}, {trabajo.municipio}</p>
                                            <small class="text-muted">Numero Contacto: {trabajo.telefono}</small>
                                            <br></br>
                                            <small class="text-muted">Correo Contacto: {trabajo.email}</small>
                                        </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
        </main>
    );
}

export default Jobs;