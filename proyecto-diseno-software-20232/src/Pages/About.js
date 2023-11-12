import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function About() {

    // Estilo de los headings de esta página
    const headingAboutUsStyle = {
        textAlign: 'center',
        padding: '1rem'
    }

    // Estilo de los párrafos
    const paragraphAboutUsStyle = {
        textAlign: 'justify',
        paddingTop: '0.75rem',
        paddingBottom: '0.5rem',
        marginLeft: '1.5rem',
        marginRight: '1.5rem'
    }

    // Estilo de las imágenes
    const imgAboutUsStyle = {
        width: '224px',
        height: '100%',
        border: '5px solid black',
        borderRadius: '100%',
        backgroundColor: 'black'
    }

    return (
        <main>
            <h1 style={headingAboutUsStyle}>Acerca de nosotros</h1>
            <div className='container'>
                <div className='row p-1'>
                    <img className='col-sm-3 mx-auto p-1 m-1' src="https://wiki.teamfortress.com/w/images/f/f0/Buffed_blu_pyro.jpg" style={imgAboutUsStyle} alt="Integrante 1"></img>
                    <img className='col-sm-3 mx-auto p-1 m-1' src="https://wiki.teamfortress.com/w/images/a/a5/Buffed_blu_engineer.jpg" style={imgAboutUsStyle} alt="Integrante 2"></img>
                    <img className='col-sm-3 mx-auto p-1 m-1' src="https://wiki.teamfortress.com/w/images/5/5e/Buffed_blu_heavy.jpg" style={imgAboutUsStyle} alt="Integrante 3"></img>
                    <img className='col-sm-3 mx-auto p-1 m-1' src="https://wiki.teamfortress.com/w/images/0/0a/Buffed_blu_demoman.jpg" style={imgAboutUsStyle} alt="Integrante 4"></img>
                </div>
            </div>
            <h2 style={paragraphAboutUsStyle}>¿Quiénes somos?</h2>
            <p style={paragraphAboutUsStyle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Sed suscipit tempor metus eget sodales. Nunc ut sem augue. Suspendisse luctus aliquet auctor.
            Vestibulum non felis non tellus mattis pretium. Cras hendrerit dignissim justo, a pulvinar magna
            luctus vel. Nam lobortis, velit nec lobortis pretium, erat metus pulvinar felis, sed ultricies nisl
            nulla in quam. Curabitur id felis quis nisi aliquet viverra laoreet eget nulla. Phasellus gravida
            cursus ex ut porta. Nullam nec nulla at massa aliquet dictum vitae at nisl. Pellentesque semper,
            libero ut auctor ornare, lectus libero mollis risus, a condimentum ex leo nec ex. Duis pharetra,
            ante quis tincidunt iaculis, sapien enim iaculis turpis, in sollicitudin nunc tortor ut ipsum.
            Vestibulum gravida odio neque. Etiam sit amet urna urna.</p>
            <h2 style={paragraphAboutUsStyle}>Historia</h2>
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
            <h2 style={paragraphAboutUsStyle}>Objetivo y finalidad del proyecto</h2>
            <p style={paragraphAboutUsStyle}>Sed fringilla dolor eros, sed congue libero faucibus a. Nullam viverra
            velit ac pellentesque hendrerit. Aenean sed mi quis mi rutrum dapibus quis ac lacus. Sed velit lectus,
            bibendum a elit vel, commodo facilisis nibh. Integer nec est nunc. Nam vel sollicitudin lectus. Mauris
            molestie faucibus augue, blandit rhoncus sapien egestas non. Pellentesque ultrices ipsum rhoncus enim
            dictum feugiat. Quisque tempor vel est ac placerat.</p>
        </main>
    );
}

export default About;