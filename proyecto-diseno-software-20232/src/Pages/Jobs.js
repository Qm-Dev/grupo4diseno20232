import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Notification from '../Components/Job';
import axios from 'axios';

function Jobs(props) {

    const titleStyle = {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: '1.25rem',
        marginTop: '1rem',
        marginBottom: '1rem',
    };

    const tipos_trabajos = [
        "Desarrollador de software",
        "Diseñador gráfico",
        "Ingeniero civil",
        "Enfermero/a",
        "Chef de cocina",
        "Periodista",
        "Electricista",
        "Psicólogo/a",
        "Arquitecto/a",
        "Contador/a",
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
        <main>
            <div>
                <h1 style={titleStyle}>Ofertas Disponibles</h1>
            </div>
            <div>
                <div className="container p-3">
                    <div>
                        {/* creacion de post de empleos */}
                        {trabajos.map((trabajo, index) => (
                            <div key={index} className="media mt-3">
                                <div className="media-body mb-0">
                                    <h3 className="mt-0">{tipos_trabajos[Math.floor(Math.random() * tipos_trabajos.length)]} - {trabajo.razon_social}</h3>
                                    <p>{trabajo.actividad}</p>
                                    <p className="text-muted">Ubicacion: {trabajo.provincia}, {trabajo.municipio}</p>
                                    <small className="text-muted mb-2 mt-2">Numero Contacto: {trabajo.telefono}</small>
                                    <br></br>
                                    <small className="text-muted mb-2 mt-2">Correo Contacto: {trabajo.email}</small>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Jobs;