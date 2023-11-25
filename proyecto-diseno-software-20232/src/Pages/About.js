import React from 'react';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

// Imágenes de miembros
import Diego from './img/Diego.jpg'
import matias from './img/matias.jpg'
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

    // Estilo de los headings de esta página
    const headingAboutUsStyle = {
        padding: '1rem',
        fontFamily: 'Lato',
        fontWeight: 'bold',
    }

    // Estilo general de los párrafos
    const paragraphAboutUsStyle = {
        textAlign: 'justify',
        paddingTop: '0.75rem',
        paddingBottom: '0.5rem',
        marginLeft: 'auto',   
        marginRight: 'auto',      
        fontFamily: 'Rubik',
      };
      

    // Estilo de los párrafos: Miembros
    const paragraphMembersStyle = {
        paddingTop: '0.15rem',
        fontFamily: 'Rubik'
    }
    
    // Estilo de las imágenes
    const imgAboutUsStyle = {
        width: '250px',
        height: '100%',
        maxHeight: '225px',
        border: '3px solid black',
        borderRadius: '100%'
    }

    const maxWidthStyle ={
        maxWidth: '1000px',
        marginLeft: 'auto',
        marginRight: 'auto',
    };

    return (
        <main>
            <div style={maxWidthStyle}>
            <h1 className='text-center fw-bold' style={headingAboutUsStyle}>Acerca de nosotros</h1>
            <br></br>
            <h2 style={headingAboutUsStyle}>¿Quiénes somos?</h2>
            <p style={paragraphAboutUsStyle}>Somos estudiantes de tercer año de la Facultad de Ingeniería
             y Ciencias de la Universidad Adolfo Ibáñez. Nuestro grupo está compuesto por ingenieros civiles,
             principalmente de la especialidad informática. Entramos a la anterior casa de estudios en pleno
             apogeo de la pandemia de la COVID-19 a inicios del año 2021, y desde entonces nos hemos visto
             envueltos en variados proyectos durante el pregrado, abordando desde las matemáticas y la física
             hasta proyectos relacionados al área de desarrollo web, con un principal enfoque al apartado 
             Frontend.
            </p>
            <div className='container-fluid text-center'>
                <div className='row gap-5 justify-content-md-center'>
                    <div class="card col-md-3 pt-4 border-3 border-black">
                        <img src={Diego} style={imgAboutUsStyle} class="card-img-top mx-auto img-fluid" alt="Integrante 1"></img>
                            <div class="card-body">
                                <p style={paragraphMembersStyle} class="card-text fw-bold">Diego Duhalde</p>
                                <p style={paragraphMembersStyle}>Nunc in purus sit amet eros pulvinar pharetra. Duis bibendum
                                eleifend odio vitae pulvinar. Vestibulum luctus leo sapien. Morbi eget ultrices quam. Sed leo massa,
                                condimentum ut consequat sit amet, ultricies ut sem. Phasellus convallis molestie hendrerit. Duis
                                dictum justo in diam ultricies ornare.</p>
                            </div>
                    </div>
                    <div class="card col-md-3 pt-4 border-3 border-black">
                        <img src={matias} style={imgAboutUsStyle} class="card-img-top mx-auto img-fluid" alt="Integrante 2"></img>
                            <div class="card-body">
                                <p style={paragraphMembersStyle} class="card-text fw-bold">Matías Heilenkötter</p>
                                <p style={paragraphMembersStyle}>Nunc in purus sit amet eros pulvinar pharetra. Duis bibendum
                                eleifend odio vitae pulvinar. Vestibulum luctus leo sapien. Morbi eget ultrices quam. Sed leo massa,
                                condimentum ut consequat sit amet, ultricies ut sem. Phasellus convallis molestie hendrerit. Duis
                                dictum justo in diam ultricies ornare.</p>
                            </div>
                    </div>
                    <div class="card col-md-3 pt-4 border-3 border-black">
                        <img src={imagen} style={imgAboutUsStyle} class="card-img-top mx-auto img-fluid" alt="Integrante 3" onMouseOver={cambiarImagen} onMouseLeave={restaurarImagen}></img>
                            <div class="card-body">
                                <p style={paragraphMembersStyle} class="card-text fw-bold">Benjamín Herrera</p>
                                <p style={paragraphMembersStyle}>Nunc in purus sit amet eros pulvinar pharetra. Duis bibendum
                                eleifend odio vitae pulvinar. Vestibulum luctus leo sapien. Morbi eget ultrices quam. Sed leo massa,
                                condimentum ut consequat sit amet, ultricies ut sem. Phasellus convallis molestie hendrerit. Duis
                                dictum justo in diam ultricies ornare.</p>
                            </div>
                    </div>
                </div>
            </div>
            <br></br>
            <br></br>
            <h2 style={headingAboutUsStyle}>Historia</h2>
            <p style={paragraphAboutUsStyle}>Mendelevium nace a partir de una lluvia de ideas producida durante las primeras
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
        </main>
    );
}

export default About;