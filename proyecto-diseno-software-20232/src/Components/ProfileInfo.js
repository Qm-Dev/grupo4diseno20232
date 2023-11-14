import React, { useState, useEffect } from 'react';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Recomendation from '../Components/Recomendation';
import axios from 'axios';

function formatDate(isoDate) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = new Date(isoDate).toLocaleDateString(undefined, options);
    return formattedDate;
}

function shuffle(array) {
    // Algoritmo de Fisher-Yates para mezclar aleatoriamente un array
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function ProfileInfo(props) {

    const carouselIndicatorsStyle = {
        // alejar los indicadores del carousel del contenido
        bottom: '-1.5rem',
    };

    const { nombrePersona } = props;
    const { apellidoPersona } = props;
    const { fotoPerfilPersona } = props;
    const { fecha } = props;
    const { correo } = props;
    const { ciudad } = props;
    const { estado } = props;
    const { pais } = props;
    const { telefono } = props;
    const { texto } = props;
    const formattedDate = formatDate(fecha);
    const { email } = props;
    const { city } = props;
    const { state } = props;
    const { country } = props;
    const [selectedOption, setSelectedOption] = useState('default');

    const handleDropdownSelect = (option) => {
        setSelectedOption(option);
    };

    const profesionesConstruccion = [
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

const certificacionesConstruccion = [
    {
        nombre: "Certificación en Gestión de Proyectos de Construcción",
        descripcion: "Certificación que valida las habilidades en la planificación y ejecución eficientes de proyectos de construcción."
    },
    {
        nombre: "Certificado de Seguridad en la Construcción",
        descripcion: "Certificación que asegura el conocimiento y la aplicación de prácticas seguras en el entorno de construcción."
    },
    {
        nombre: "Certificación en Diseño Arquitectónico Sostenible",
        descripcion: "Certificación que se enfoca en los principios del diseño arquitectónico sostenible y la construcción verde."
    },
    {
        nombre: "Certificado en Inspección de Edificaciones",
        descripcion: "Certificación que valida la capacidad para realizar inspecciones detalladas y evaluar la calidad de las edificaciones."
    },
    {
        nombre: "Certificación en Tecnologías de Construcción Innovadoras",
        descripcion: "Certificación que abarca las últimas tecnologías y métodos innovadores utilizados en la industria de la construcción."
    },
    {
        nombre: "Certificación en Gestión Ambiental en Construcción",
        descripcion: "Certificación que evalúa las prácticas y políticas medioambientales en proyectos de construcción."
    },
    {
        nombre: "Certificado de Planificación Urbana",
        descripcion: "Certificación que se centra en la planificación efectiva y sostenible de áreas urbanas y desarrollo inmobiliario."
    },
    {
        nombre: "Certificación en Construcción Resiliente ante Desastres",
        descripcion: "Certificación que aborda las mejores prácticas para construir estructuras resilientes ante desastres naturales."
    },
    {
        nombre: "Certificación en Eficiencia Energética en Construcción",
        descripcion: "Certificación que se enfoca en estrategias y tecnologías para lograr edificaciones más eficientes desde el punto de vista energético."
    },
    {
        nombre: "Certificado de Gestión de Riesgos en Proyectos de Construcción",
        descripcion: "Certificación que evalúa la capacidad para identificar, gestionar y mitigar riesgos en proyectos de construcción."
    },
    {
        nombre: "Certificación en Tecnologías BIM (Building Information Modeling)",
        descripcion: "Certificación que valida la habilidad para utilizar la tecnología BIM en la planificación y ejecución de proyectos de construcción."
    },
    {
        nombre: "Certificación en Restauración de Edificaciones Históricas",
        descripcion: "Certificación que se centra en las técnicas y consideraciones específicas para la restauración de edificaciones históricas."
    },
    {
        nombre: "Certificación en Diseño de Estructuras Sísmicas",
        descripcion: "Certificación que aborda las mejores prácticas y técnicas para el diseño de estructuras resistentes a sismos."
    },
    {
        nombre: "Certificado de Gestión de Residuos en Construcción",
        descripcion: "Certificación que evalúa la capacidad para gestionar de manera efectiva los residuos generados durante proyectos de construcción."
    },
    {
        nombre: "Certificación en Construcción Modular",
        descripcion: "Certificación que aborda las técnicas y consideraciones específicas para la construcción modular y prefabricada."
    }
    ];

const experienciasConstruccion = [
    {
        titulo: "Supervisión de Proyectos Residenciales",
        descripcion: "Dirigí la supervisión de proyectos de construcción de viviendas unifamiliares, asegurando la calidad y cumplimiento de plazos."
    },
    {
        titulo: "Restauración de Edificaciones Históricas",
        descripcion: "Participé en la restauración de una edificación histórica, aplicando técnicas especializadas para preservar su autenticidad."
    },
    {
        titulo: "Gestión de Obras Públicas",
        descripcion: "Lideré la gestión de obras públicas, coordinando con diferentes entidades gubernamentales para garantizar la ejecución eficiente de proyectos de infraestructura."
    },
    {
        titulo: "Diseño y Construcción de Espacios Comerciales",
        descripcion: "Participé en el diseño y construcción de espacios comerciales, adaptando las estructuras para satisfacer las necesidades específicas de cada negocio."
    },
    {
        titulo: "Desarrollo de Proyectos de Energía Renovable",
        descripcion: "Colaboré en el desarrollo de proyectos de construcción de parques eólicos y solares, incorporando tecnologías sostenibles en la infraestructura."
    },
    {
        titulo: "Supervisión de Proyectos de Infraestructura Vial",
        descripcion: "Supervisé la ejecución de proyectos de construcción de carreteras, garantizando la seguridad y la calidad de la infraestructura vial."
    },
    {
        titulo: "Construcción de Viviendas Sustentables",
        descripcion: "Participé en la construcción de viviendas sustentables, implementando tecnologías verdes para reducir el impacto ambiental."
    },
    {
        titulo: "Evaluación y Reparación de Estructuras",
        descripcion: "Realicé la evaluación y reparación de estructuras afectadas por eventos sísmicos, aplicando soluciones para fortalecer la resistencia sísmica."
    },
    {
        titulo: "Coordinación de Proyectos Multidisciplinarios",
        descripcion: "Coordiné proyectos multidisciplinarios que involucraban arquitectos, ingenieros estructurales y eléctricos para lograr una ejecución integral."
    },
    {
        titulo: "Diseño y Construcción de Instalaciones Industriales",
        descripcion: "Dirigí el diseño y construcción de instalaciones industriales, cumpliendo con estándares de seguridad y eficiencia para la operación industrial."
    },
    {
        titulo: "Innovación en Tecnologías de Construcción",
        descripcion: "Introduje nuevas tecnologías de construcción, como el uso de drones para inspecciones y la implementación de sistemas de construcción modular."
    },
    {
        titulo: "Gestión de Proyectos de Remodelación",
        descripcion: "Lideré proyectos de remodelación de espacios residenciales y comerciales, mejorando la funcionalidad y estética de las estructuras existentes."
    },
    {
        titulo: "Implementación de Programas de Seguridad en Obras",
        descripcion: "Desarrollé e implementé programas de seguridad en obras, asegurando un entorno de trabajo seguro y cumplimiento de normativas."
    },
    {
        titulo: "Supervisión de Obras de Infraestructura Hidráulica",
        descripcion: "Supervisé la construcción de obras hidráulicas, incluyendo presas y sistemas de irrigación, para el manejo sostenible del agua."
    },
    {
        titulo: "Construcción de Proyectos de Vivienda Social",
        descripcion: "Participé en la construcción de proyectos de vivienda social, contribuyendo a la provisión de soluciones habitacionales accesibles para la comunidad."
    }
    ];

    const indiceAleatorio = Math.floor(Math.random() * profesionesConstruccion.length);

    const profesionesAleatoria = profesionesConstruccion[indiceAleatorio];

    const certificacionesMezcladas = shuffle(certificacionesConstruccion);

    const certificacionesAleatorias = certificacionesMezcladas.slice(0, 3);

    const experienciasMezcladas = shuffle(experienciasConstruccion);

    const experienciasAleatorias = experienciasMezcladas.slice(0, 3);

    const link1 = `https://picsum.photos/id/${Math.floor(Math.random() * 1084) + 1}/400`;
    const link2 = `https://picsum.photos/id/${Math.floor(Math.random() * 1084) + 1}/400`;
    const link3 = `https://picsum.photos/id/${Math.floor(Math.random() * 1084) + 1}/400`;

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
        <main>
            <div className='profile'>
                <div className='container'>
                    <div class="card mb-3 mt-3 text-center">
                        <div class="card-body">
                            <img src={fotoPerfilPersona} class="mb-2 rounded-circle img-thumbnail w-25" alt="Imagen de Usuario"></img>
                            <div class="text-left mt-0">
                            <div class="d-inline-block">
                                <h1 className="display-6 fw-bold">{nombrePersona} {apellidoPersona}</h1>
                                <h4 className="display-8">{profesionesAleatoria}</h4>
                            </div>
                            <p className="fs-5 text-muted">
                                {correo} <br />
                                {telefono} <br />
                                {ciudad}, {estado}, {pais} <br />
                                <span class="fw-light">{formattedDate}</span>
                            </p>
                            </div>
                            <p class="text-start mt-4">
                                <span class="text-uppercase">{texto[0]}</span>{texto.slice(1)}.
                            </p>
                            <div class="d-flex btn-group justify-content-center">
                                <button type="button" class="btn btn-outline-primary"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-eye" width="26" height="26" viewBox="0 0 32 26" stroke-width="1.5" stroke="#0D6EFE" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
                                <path d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6" />
                                </svg>Ver CV</button>
                                <button type="button" class="btn btn-outline-primary"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-send" width="26" height="26" viewBox="0 0 32 26" stroke-width="1.5" stroke="#0D6EFE" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <path d="M10 14l11 -11" />
                                <path d="M21 3l-6.5 18a.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5" />
                                </svg>Enviar Mensaje</button>
                                <button type="button" class="btn btn-outline-primary"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-share" width="26" height="26" viewBox="0 0 32 26" stroke-width="1.5" stroke="#0D6EFE" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <path d="M6 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                                <path d="M18 6m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                                <path d="M18 18m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                                <path d="M8.7 10.7l6.6 -3.4" />
                                <path d="M8.7 13.3l6.6 3.4" />
                                </svg>Compartir Perfil</button>
                                <button type="button" class="btn btn-outline-primary"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-affiliate" width="26" height="26" viewBox="0 0 32 26" stroke-width="1.5" stroke="#0D6EFE" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <path d="M5.931 6.936l1.275 4.249m5.607 5.609l4.251 1.275" />
                                <path d="M11.683 12.317l5.759 -5.759" />
                                <path d="M5.5 5.5m-1.5 0a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0 -3 0" />
                                <path d="M18.5 5.5m-1.5 0a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0 -3 0" />
                                <path d="M18.5 18.5m-1.5 0a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0 -3 0" />
                                <path d="M8.5 15.5m-4.5 0a4.5 4.5 0 1 0 9 0a4.5 4.5 0 1 0 -9 0" />
                                </svg>Conectar</button>
                            </div>
                        </div>
                    </div>
                    <div id='experienceSection' className='card mb-3 text-center'>
                        <h2 className='p-2'>Experiencia</h2>
                        <div id="carouselExampleDark" class="carousel carousel-dark slide">
                            <div style={carouselIndicatorsStyle} class="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            </div>
                            <div class="carousel-inner">
                            <div class="carousel-item active" data-bs-interval="10000">
                                <div class="d-flex flex-column align-items-center">
                                        <img src={link1} class="d-block w-auto mx-auto" alt="Experiencia1" />
                                    <div class="text-center mt-2">
                                        <h5>{experienciasAleatorias[0].titulo}</h5>
                                        <p>{experienciasAleatorias[0].descripcion}</p>
                                    </div>
                                </div>
                            </div>
                            <div class="carousel-item" data-bs-interval="2000">
                                <div class="d-flex flex-column align-items-center">
                                    <img src={link2} class="d-block w- mx-auto" alt="Experiencia2" />
                                    <div class="text-center mt-2">
                                        <h5>{experienciasAleatorias[1].titulo}</h5>
                                        <p>{experienciasAleatorias[1].descripcion}</p>
                                    </div>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <div class="d-flex flex-column align-items-center">
                                    <img src={link3} class="d-block w-20 mx-auto" alt="Experiencia3" />
                                    <div class="text-center mt-2">
                                        <h5>{experienciasAleatorias[2].titulo}</h5>
                                        <p>{experienciasAleatorias[2].descripcion}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                        </div>
                        <a href="#" className='btn btn-dark m-auto mt-2 mb-2'>Editar experiencia</a>
                    </div>
                    <div id='certificationsSection' className='card mb-3 text-center'>
                        <h2 className='p-2'>Certificaciones</h2>
                        <div class="row">
                            <div class="col-sm-4">
                                <div class="card p-4 m-2">
                                <div class="card-body">
                                    <h5 class="card-title">{certificacionesAleatorias[0].nombre}</h5>
                                    <p class="card-text">{certificacionesAleatorias[0].descripcion}</p>
                                    <a href="#" class="btn btn-primary">Ver certificación</a>
                                </div>
                                </div>
                            </div>
                            <div class="col-sm-4">
                                <div class="card p-4 m-2">
                                <div class="card-body">
                                    <h5 class="card-title">{certificacionesAleatorias[1].nombre}</h5>
                                    <p class="card-text">{certificacionesAleatorias[1].descripcion}</p>
                                    <a href="#" class="btn btn-primary">Ver certificación</a>
                                </div>
                                </div>
                            </div>
                            <div class="col-sm-4">
                                <div class="card p-4 m-2">
                                <div class="card-body">
                                    <h5 class="card-title">{certificacionesAleatorias[2].nombre}</h5>
                                    <p class="card-text">{certificacionesAleatorias[2].descripcion}</p>
                                    <a href="#" class="btn btn-primary">Ver certificación</a>
                                </div>
                                </div>
                            </div>
                            </div>
                        <DropdownButton
                            id="dropdown-basic-button"
                            title={'Editar Informacion'}
                            className='m-auto mt-2 mb-2'
                            >
                            <Dropdown.Item onClick={() => handleDropdownSelect('option1')}>
                                Agregar/quitar Certificaciones
                            </Dropdown.Item>
                            <Dropdown.Item onClick={() => handleDropdownSelect('option2')}>
                                Agregar/quitar Licencias
                            </Dropdown.Item>
                            <Dropdown.Item onClick={() => handleDropdownSelect('option3')}>
                                Agregar/quitar Lenguajes
                            </Dropdown.Item>
                            <Dropdown.Item onClick={() => handleDropdownSelect('option4')}>
                                Agregar/quitar Habilidades
                            </Dropdown.Item>
                        </DropdownButton>
                    </div>
                        <div class="mb-5">
                            {/* Crear las publicaciones del feed */}
                            {nombreUsuarios.length > 0 ? (
                                            nombreUsuarios.map((usuario, index) => (
                                                <Recomendation key={index} nombrePersona={usuario.name.first} apellidoPersona={usuario.name.last} fotoPerfilPersona={usuario.picture.medium} fechaNoti={listaInvertida[index]}/>
                                            ))
                            ) : (
                                <p>Cargando notificaciones...</p>
                            )}
                        </div>
                </div>
            </div>
        </main>
    );
}

export default ProfileInfo;