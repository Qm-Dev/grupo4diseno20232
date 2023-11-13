import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Notification from '../Components/Job';
import axios from 'axios';

function Jobs(props) {
    const { nombreEmpresa, nombreTrabajo, provinciaEmpresa, fechaPublicacion, numeroContacto, correoContacto } = props;

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
            <div className="card">
                <div className="card-body">
                    <div className="d-flex">
                        {trabajos.map((trabajo, index) => (
                            <div key={index} className="media">
                                <div className="media-body">
                                    <h5 className="mt-0">{trabajo.razon_social} {trabajo.actividad}</h5>
                                    <p>{trabajo.razon_social} {tipos_trabajos[Math.floor(Math.random() * tipos_trabajos.length)]}</p>
                                    <small className="text-muted">Ubicacion: {trabajo.provincia}, {trabajo.municipio}</small>
                                    <br />
                                    <small className="text-muted">Contacto: {trabajo.telefono}</small>
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