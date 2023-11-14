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


    return (
        <main className='bg-secondary-subtle'>
            <div className="container p-3">
                {/* creacion de post de empleos */}
                {empresaInfo.map((empresa, index) => (
                <div key={index} class="card mb-2">
                    <div class="card-header">
                        <h5 class="card-title text-uppercase">{nombreEmpresa[index]} {elementosEmpresariales[Math.floor(Math.random() * elementosEmpresariales.length)]}</h5>
                        <p class="card-subtitle text-muted">Publicado el 12 de noviembre de 2023</p>
                    </div>
                    <div class="card-body">
                        <div class="row">
                            <div class="col-md-2">
                                <img src={`https://picsum.photos/id/${Math.floor(Math.random() * 1084) + 1}/400`} class="rounded-circle img-thumbnail" alt="Logo de la emresa"></img>
                            </div>
                            <div class="col-md-10">
                                <h6 class="card-subtitle mb-2 text-muted">Trabajo: {tipos_trabajos[Math.floor(Math.random() * tipos_trabajos.length)]}</h6>
                                <p class="card-text">Descripción: Estamos buscando un desarrollador web altamente motivado para unirse a nuestro equipo. Deberás tener experiencia en el desarrollo de aplicaciones web...</p>
                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item"><strong>Correo de Contacto:</strong> {nombreEmpresa[index]}@jobs.com</li>
                                    <li class="list-group-item"><strong>Número de Contacto:</strong> {empresa.cell}
                                        <button class="btn btn-primary float-end">Postular</button>
                                    </li>
                                </ul>
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