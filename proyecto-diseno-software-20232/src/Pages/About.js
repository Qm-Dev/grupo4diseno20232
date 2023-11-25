import React from 'react';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

// Imágenes de miembros
import Diego from './img/Diego.jpg'
import matias from './img/matias.png'
import Benja from './img/Benja.jpg'
import lolz from './img/placeholder-img.jpg'

function About() {

    // eliminar antes de entrega final (15-21)
    const [imagen, setImagen] = useState(Benja);
    const cambiarImagen = () => {
        setImagen(lolz)
    }
    const restaurarImagen = () => {
        setImagen(Benja)
    }

    // Estilo de las imágenes
    const imgAboutUsStyle = {
        width: '250px',
        height: '100%',
        maxHeight: '225px',
        borderRadius: '100%'
    }

    const contentStyle = {
        marginTop: '80px', // Ajusta esto según la altura de tu barra de navegación
    };
    

    return (
        <main className='bg-secondary-subtle min-vh-100'>
            <div class="container py-5" style={contentStyle}>
                <div class="card mx-auto col-md-9">
                    <h1 class="fs-2 card-header text-uppercase fw-bold text-center bg-primary text-white"><i class="fa fa-lightbulb mt-2"></i> Acerca de nosotros</h1>
                    <h2 class="p-5 pt-4 pb-0">¿Quiénes somos?</h2>
                    <p class="p-5 py-2">Somos estudiantes de tercer año de la Facultad de Ingeniería
                        y Ciencias de la Universidad Adolfo Ibáñez. Nuestro grupo está compuesto por ingenieros civiles,
                        principalmente de la especialidad informática. Entramos a la anterior casa de estudios en pleno
                        apogeo de la pandemia de la COVID-19 a inicios del año 2021, y desde entonces nos hemos visto
                        envueltos en variados proyectos durante el pregrado, abordando desde las matemáticas y la física
                        hasta proyectos relacionados al área de desarrollo web, con un principal enfoque al apartado 
                        Frontend.
                    </p>
                    <div className='container-fluid text-center'>
                        <div className='row gap-5 justify-content-md-center'>
                            <div class="card col-md-3 p-3">
                                <img src={Diego} class="card-img-top mx-auto img-fluid rounded" alt="Integrante 1"></img>
                                <div class="card-body">
                                    <p class="card-text fw-bold fs-5">Diego Duhalde</p>
                                    <p>Un individuo con una mente inquisitiva y una fascinación innata por la ciencia y la tecnología. 
                                        Siempre en busca de respuestas y soluciones innovadoras, disfruta de desafíos intelectuales y 
                                        de contribuir al progreso de la sociedad a través de sus conocimientos.</p>
                                </div>
                            </div>
                            <div class="card col-md-3 p-3">
                                <img src={matias} class="card-img-top mx-auto img-fluid rounded" alt="Integrante 2"></img>
                                    <div class="card-body">
                                        <p class="card-text fw-bold fs-5">Matías Heilenkötter</p>
                                        <p>Una alma sosegada y reflexiva, con una pasión ardiente por la filosofía y la exploración 
                                            del significado de la vida. Su creatividad fluye a través de la escritura y la poesía, 
                                            y se esfuerza por entender las complejidades del mundo que lo rodea.</p>
                                    </div>
                            </div>
                            <div class="card col-md-3 p-3">
                                <img src={imagen} class="card-img-top mx-auto img-fluid rounded" alt="Integrante 3" onMouseOver={cambiarImagen} onMouseLeave={restaurarImagen}></img>
                                    <div class="card-body">
                                        <p class="card-text fw-bold fs-5">Benjamín Herrera</p>
                                        <p>Una personalidad extrovertida y carismática que encuentra alegría en la conexión humana. 
                                            Amante de las artes escénicas y defensor de la inclusión, se esfuerza por crear un ambiente 
                                            acogedor donde cada persona se sienta valorada y comprendida.</p>
                                    </div>
                            </div>
                        </div>
                    </div>
                    <h2 class="p-5 pt-4 pb-0">Historia</h2>
                    <p class="p-5 pt-2">Mendelevium nace a partir de una lluvia de ideas producida durante las primeras
                    clases de la asignatura de Taller de Innovación y Emprendimiento Tecnológico, donde se buscaba una idea que permitiera hacer
                    frente al objetivo de desarrollo sostenible relacionado al trabajo decente, parte de los ODS establecidos por la Organización
                    de las Naciones Unidas para el año 2030. En un principio enfocada únicamente para el
                    rubro de la construcción, la idea se fue expandiendo para abarcar todo el rubro relacionado al trabajo no
                    cualificado, de esta forma batallando algunas de las problemáticas que afectan a este sector como lo es la falta de
                    seriedad y/o garantías a la hora de realizar tratos entre las partes involucradas y las malas condiciones laborales,
                    por solo nombrar algunas.
                    <br></br><br></br>Originalmente pensado como una plataforma digital para la contratación de servicios, los integrantes fueron
                    iterando esta idea hasta llegar a lo actualmente presentado: una red social que permite conectar a diversas personas del sector
                    no cualificado, similar a sitios como LinkedIn o Seek en la actualidad.
                    <br></br><br></br>El sitio se encuentra construido bajo el marco de
                    trabajo React.js, el cual hace uso de los
                    lenguajes HTML, CSS y JavaScript. El código fuente de este se encuentra disponible en su totalidad bajo la licencia MIT, estando alojado
                    su repositorio en GitHub, accesible haciendo click <a href="https://github.com/Qm-Dev/grupo4diseno20232/tree/main/proyecto-diseno-software-20232">aquí</a>.
                    <br></br>
                    </p>
                </div>
            </div>
        </main>
    );
}

export default About;