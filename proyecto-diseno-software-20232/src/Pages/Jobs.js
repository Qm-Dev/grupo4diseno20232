import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

function obtenerElementosAleatorios(arr, cantidad) {
    const copiaLista = [...arr];  // Copia la lista para no modificar la original
    const elementosAleatorios = [];

    for (let i = 0; i < cantidad; i++) {
        const indiceAleatorio = Math.floor(Math.random() * copiaLista.length);
        const elemento = copiaLista.splice(indiceAleatorio, 1)[0];
        elementosAleatorios.push(elemento);
    }

    if (elementosAleatorios[0]) {
        elementosAleatorios[0] = elementosAleatorios[0].charAt(0).toUpperCase() + elementosAleatorios[0].slice(1);
    } else {
        // Nada
    }
    return elementosAleatorios;
}

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

    const elementosEmpresariales = [
        "®",
        "SA",
        "SRL",
        "SL",
        "SPA",
        "Ltda",
        "Corp",
        "Inc",
        "GmbH",
        "LLC",
        "PLC",
        "Ltd",
        "Pty Ltd",
        "AG",
        "Co.",
        "BV",
        "LLP",
        "SA de CV",
        "SAS",
        "NV",
        "Sdn Bhd",
        "Oy",
        "AB",
        "KG",
        "Kft",
        "Sp. z o.o.",
        "Lda",
        "ApS",
        "SIA",
        "A/S",
        "KGaA",
        "OU",
        "Ltd.",
        "Co., Ltd.",
        "Limited",
        "Corporation",
        "Incorporated",
        "Company",
        "Group",
        "Holdings",
        "Ventures",
        "Industries",
        "Enterprises",
        "International",
        "Global",
        "Services",
        "Tech",
        "Systems",
        "Solutions",
        "Consulting"
    ];

    const post_amount = Math.floor(Math.random() * 11);
    const apiNamesUrl = `https://randomuser.me/api/?results=${post_amount}&nat=us`;

    const [empresaInfo, setEmpresaInfo] = useState([]);

    useEffect( () => {

        axios.get(apiNamesUrl).then((response) => {
            setEmpresaInfo(response.data.results)
        }).catch((error) => {
            console.error('Error');
        });

    },[]);

    const [nombreEmpresa, setNombreEmpresa] = useState([]);

    useEffect( () => {
        axios.get(`https://random-word-api.vercel.app/api?words=${post_amount}`).then((response) => {
            setNombreEmpresa(response.data)
        }).catch((error) => {
            console.error('Error');
    });

    },[]);

    const apiDatesUrl = `https://api.lrs.org/random-date-generator?num_dates=${post_amount}`;

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

    const [textoUsuario, setTextoUsuario] = useState([]);
    useEffect( () => {
        axios.get(`https://random-word-api.vercel.app/api?words=500`).then((response) => {
            setTextoUsuario(response.data)
        }).catch((error) => {
            console.error('Error');
    });

},[]);

    const [mostrarAlertaPostulacion, setMostrarAlertaPostulacion] = useState(false);

    useEffect(() => {
        if (mostrarAlertaPostulacion) {
        const timeoutId = setTimeout(() => {
            setMostrarAlertaPostulacion(false);
        }, 3000);

        return () => clearTimeout(timeoutId);
        }
    }, [mostrarAlertaPostulacion]);

    return (
        <main className='bg-secondary-subtle min-vh-100'>
            <div id="change" className="container p-3">
                <div className='row'>
                    <div className='col-md-3 rounded-5 mb-2'>
                        {/* Izquierda Empleos */}
                        <div class="container p-0">
                            <div class="card">
                                <div class="card-body">
                                    <h6 class="card-text pb-2"><i class="fa fa-flag"></i> Mis empleos</h6>
                                    <h6 class="card-text pb-2"><i class="fa fa-list"></i> Preferencias</h6>
                                    <h6 class="card-text pb-2"><i class="fa fa-check-square"></i> Evaluaciones de aptitudes</h6>
                                    <h6 class="card-text pb-2"><i class="fa fa-video-camera"></i> Orientación </h6>
                                    <h6 class="card-text"><i class="fa fa-cog"></i> Configuración de solicitudes</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-6 rounded-5'>
                        {/* creacion de post de empleos */}
                        {empresaInfo.map((empresa, index) => (
                            <div key={index} class="card mb-2">
                                <div class="card-header">
                                    <h5 class="card-title text-uppercase">{nombreEmpresa[index]} {elementosEmpresariales[Math.floor(Math.random() * elementosEmpresariales.length)]}</h5>
                                    <p class="card-subtitle text-muted">Publicado el {listaInvertida[index]}</p>
                                </div>
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-md-2">
                                            <img src={`https://picsum.photos/id/${Math.floor(Math.random() * 1084) + 1}/400`} class="rounded-circle img-thumbnail" alt="Logo de la emresa"></img>
                                        </div>
                                        <div class="col-md-10">
                                            <h6 class="card-subtitle mb-2 text-muted ms-3">Trabajo: {tipos_trabajos[Math.floor(Math.random() * tipos_trabajos.length)]}</h6>
                                            <p class="card-text ms-3">Descripción: {obtenerElementosAleatorios(textoUsuario, Math.floor(Math.random() * 50 + 20)).join(' ')}</p>
                                            <ul class="list-group list-group-flush">
                                                <li class="list-group-item"><strong>Correo de Contacto:</strong> {nombreEmpresa[index]}@jobs.com</li>
                                                <li class="list-group-item"><strong>Número de Contacto:</strong> {empresa.cell}
                                                    <button id="btnPostular" class="btn btn-primary float-end" onClick={() => setMostrarAlertaPostulacion(true)}>Postular</button>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className='col-md-3 rounded-5'>
                        {/* Derecha Empleos */}
                        {mostrarAlertaPostulacion && (
                <div className="alert alert-success text-center" role="alert">
                Ha postulado al empleo!
                </div>
            )}
                        <div class="container p-0">
                            <div class="card text-center">
                                <div class="card-header">
                                    <h5 class="card-title m-0">Publica tu empleo</h5>
                                </div>
                                <div class="card-body">
                                    <p class="card-text">Publica tu empleo de manera gratuita y llega a miles de candidatos.</p>
                                    <a href="#" class="btn btn-primary"><i class="fa fa-briefcase" aria-hidden="true"></i> Publicar un empleo gratis</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Jobs;