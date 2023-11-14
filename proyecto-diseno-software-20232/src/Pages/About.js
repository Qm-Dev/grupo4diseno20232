import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function About() {

    // Estilo de los headings de esta página
    const headingAboutUsStyle = {
        padding: '1rem',
        fontFamily: 'Lato'
    }

    // Estilo de los párrafos
    const paragraphAboutUsStyle = {
        textAlign: 'justify',
        paddingTop: '0.75rem',
        paddingBottom: '0.5rem',
        marginLeft: '1.5rem',
        marginRight: '1.5rem',
        fontFamily: 'Rubik'
    }

    // Estilo de las imágenes
    const imgAboutUsStyle = {
        width: '224px',
        height: '100%',
        border: '3px solid black',
        borderRadius: '100%',
        backgroundColor: 'black'
    }

    return (
        <main>
            <h1 className='text-center fw-bold' style={headingAboutUsStyle}>Acerca de nosotros</h1>
            <div className='container'>
                <div className='row p-1'>
                    <img className='col-sm-3 mx-auto p-1 m-1' src="https://wiki.teamfortress.com/w/images/f/f0/Buffed_blu_pyro.jpg" style={imgAboutUsStyle} alt="Integrante 1"></img>
                    <img className='col-sm-3 mx-auto p-1 m-1' src="https://wiki.teamfortress.com/w/images/a/a5/Buffed_blu_engineer.jpg" style={imgAboutUsStyle} alt="Integrante 2"></img>
                    <img className='col-sm-3 mx-auto p-1 m-1' src="https://wiki.teamfortress.com/w/images/5/5e/Buffed_blu_heavy.jpg" style={imgAboutUsStyle} alt="Integrante 3"></img>
                    <img className='col-sm-3 mx-auto p-1 m-1' src="https://wiki.teamfortress.com/w/images/0/0a/Buffed_blu_demoman.jpg" style={imgAboutUsStyle} alt="Integrante 4"></img>
                </div>
            </div>
            <h2 style={headingAboutUsStyle}>¿Quiénes somos?</h2>
            <p style={paragraphAboutUsStyle}>Somos estudiantes de tercer año de la Facultad de Ingeniería
             y Ciencias de la Universidad Adolfo Ibáñez. Nuestro grupo está compuesto por ingenieros civiles,
             principalmente de la especialidad informática. Entramos a la anterior casa de estudios en pleno
             apogeo de la pandemia de la COVID-19 a inicios del año 2021, y desde entonces nos hemos visto
             envueltos en variados proyectos durante el pregrado, abordando desde las matemáticas y la física
             hasta proyectos relacionados al área de desarrollo web, con un principal enfoque al apartado 
             Frontend.<br></br><br></br>Nuestro grupo se encuentra conformado por:
             <ul>
                <li>Diego Duhalde:</li>
                <li>Matías Heilenkötter:</li>
                <li>Benjamín Herrera:</li>
                <li>Vicente Ramírez:</li>
             </ul>
             </p>
            <h2 style={headingAboutUsStyle}>Historia</h2>
            <p style={paragraphAboutUsStyle}>Nunc in purus sit amet eros pulvinar pharetra. Duis bibendum
            eleifend odio vitae pulvinar. Vestibulum luctus leo sapien. Morbi eget ultrices quam. Sed leo massa,
            condimentum ut consequat sit amet, ultricies ut sem. Phasellus convallis molestie hendrerit. Duis
            dictum justo in diam ultricies ornare. Mauris at pretium mi, ut tristique ligula. Mauris et tortor ut
            nisl commodo vehicula sed non purus. Nunc sit amet imperdiet tortor, vel posuere sem. Phasellus
            euismod tristique ultricies. Donec feugiat nunc sed congue facilisis. Praesent fringilla massa quis
            est blandit, sit amet scelerisque est vehicula.</p>
            <p style={paragraphAboutUsStyle}>Nulla condimentum dolor non mauris tempus, quis pulvinar lectus
            ultrices. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu mauris imperdiet,
            posuere felis eget, sagittis neque. Cras eget ornare leo, id placerat risus. Mauris aliquet sem quam,
            viverra ornare justo suscipit id. Sed vehicula felis aliquet sem pretium gravida. Vivamus faucibus diam
            ac turpis dictum posuere. Nulla sed mi sollicitudin, ullamcorper lectus id, dictum massa. Nam venenatis
            velit eget nisi viverra, eu condimentum quam scelerisque.</p>
            <h2 style={headingAboutUsStyle}>Objetivo y finalidad del proyecto</h2>
            <p style={paragraphAboutUsStyle}>Sed fringilla dolor eros, sed congue libero faucibus a. Nullam viverra
            velit ac pellentesque hendrerit. Aenean sed mi quis mi rutrum dapibus quis ac lacus. Sed velit lectus,
            bibendum a elit vel, commodo facilisis nibh. Integer nec est nunc. Nam vel sollicitudin lectus. Mauris
            molestie faucibus augue, blandit rhoncus sapien egestas non. Pellentesque ultrices ipsum rhoncus enim
            dictum feugiat. Quisque tempor vel est ac placerat.</p>
        </main>
    );
}

export default About;