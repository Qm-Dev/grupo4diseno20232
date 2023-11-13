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

    const indiceAleatorio = Math.floor(Math.random() * profesionesConstruccion.length);

    const profesionesAleatoria = profesionesConstruccion[indiceAleatorio];

    const certificacionesMezcladas = shuffle(certificacionesConstruccion);

    const certificacionesAleatorias = certificacionesMezcladas.slice(0, 3);

    return (
        <main>
            <div className='profile'>
                <div className='container text-center'>
                    <div id='presentationSection' className='border border-5 rounded-5 border-dark mt-3 mb-3 p-3'>
                        <img className='p-2' src={fotoPerfilPersona} style={imgStyle}></img>
                        <h1>{nombrePersona} {apellidoPersona}</h1>
                        <h3>{formattedDate}</h3>
                        <h4>{profesionesAleatoria}</h4>
                        <p style={paragraphStyle}>{String.fromCharCode(65 + Math.floor(Math.random() * 26)).toLocaleUpperCase()}{texto.slice(1)}.
                        </p>
                    </div>
                    <div id='experienceSection' className='border border-5 rounded-5 border-dark mb-3'>
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
                                        <img src="https://wiki.teamfortress.com/w/images/thumb/3/3e/Community_Engineer_Strategy_Header.png/400px-Community_Engineer_Strategy_Header.png" class="d-block w-auto mx-auto" alt="Experiencia1" />
                                    <div class="text-center">
                                        <h5>First slide label</h5>
                                        <p>Some representative placeholder content for the first slide.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="carousel-item" data-bs-interval="2000">
                                <div class="d-flex flex-column align-items-center">
                                    <img src="https://wiki.teamfortress.com/w/images/thumb/a/a6/Engiwithdispenser.png/300px-Engiwithdispenser.png" class="d-block w- mx-auto" alt="Experiencia2" />
                                    <div class="text-center">
                                        <h5>Second slide label</h5>
                                        <p>Some representative placeholder content for the second slide.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <div class="d-flex flex-column align-items-center">
                                    <img src="https://wiki.teamfortress.com/w/images/thumb/0/01/Engybuild.png/400px-Engybuild.png" class="d-block w-20 mx-auto" alt="Experiencia3" />
                                    <div class="text-center">
                                        <h5>Third slide label</h5>
                                        <p>Some representative placeholder content for the third slide.</p>
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
                        <a href="#" className='btn btn-dark mb-3 mt-3'>Editar experiencia</a>
                    </div>
                    <div id='certificationsSection' className='border border-5 rounded-5 border-dark mb-3'>
                        <h2 className='p-2'>Certificaciones</h2>
                        <ul>
                            <li style={certificationStyle}><strong>{certificacionesAleatorias[0].nombre}:</strong> {certificacionesAleatorias[0].descripcion}
                            </li>
                            <br></br>
                            <li style={certificationStyle}><strong>{certificacionesAleatorias[1].nombre}:</strong> {certificacionesAleatorias[1].descripcion}
                            </li>
                            <br></br>
                            <li style={certificationStyle}><strong>{certificacionesAleatorias[2].nombre}:</strong> {certificacionesAleatorias[2].descripcion}
                            </li>
                        </ul>
                        <a href="#" className='btn btn-dark mb-2'>Editar certificaciones</a>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default ProfileInfo;