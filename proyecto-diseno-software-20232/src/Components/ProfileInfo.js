import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

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

    const imgStyle = {
        borderRadius: '100%',
        backgroundColor: 'black',
        width: '200px',
        height: 'auto', 
        display: 'block', 
        margin: '0 auto', 
    };

    const paragraphStyle = {
        textAlign: 'justify',
        padding: '0.75rem 1.5rem', 
    };

    const certificationStyle = {
        textAlign: 'justify',
        padding: '0.75rem 1.5rem'
    };

    const carouselIndicatorsStyle = {
        // alejar los indicadores del carousel del contenido
        bottom: '-1.5rem',
    };

    const { nombrePersona } = props;
    const { apellidoPersona } = props;
    const { fotoPerfilPersona } = props;
    const { fecha } = props;
    const { texto } = props;
    const formattedDate = formatDate(fecha);

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

    return (
        <main>
            <div className='profile'>
                <div className='container text-center'>
                    <div class="card mb-3 mt-3">
                        <div class="card-body">
                            <img src={fotoPerfilPersona} class="mb-2 rounded-circle img-thumbnail w-25" alt="Imagen de Usuario"></img>
                            <h1 class="text-left mt-0">{nombrePersona} {apellidoPersona}</h1>
                            <h4 class="fw-light">{formattedDate}</h4>
                            <h4>{profesionesAleatoria}</h4>
                            <p class="text-start mt-4">{String.fromCharCode(65 + Math.floor(Math.random() * 26)).toLocaleUpperCase()}{texto.slice(1)}.</p>
                        </div>
                    </div>
                    <div id='experienceSection' className='card mb-3'>
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
                    <div id='certificationsSection' className='card mb-3'>
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
                        <a href="#" className='btn btn-dark m-auto mt-2 mb-2'>Editar certificaciones</a>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default ProfileInfo;