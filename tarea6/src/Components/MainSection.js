import React from 'react';
import ImageContainer from './ImageContainer';
import Meme from './Meme';
import 'bootstrap/dist/css/bootstrap.min.css';

const MainSection = () => {
    const mainStyle = {
        backgroundColor: '#282c34',
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        fontFamily: 'Roboto Slab'
    };

    const paragraphStyle = {
        textAlign: 'justify',
        width: '50%',
        margin: '16px',
    };

    const headingStyle = {
        fontFamily: 'Inter',
        paddingTop: '20px',
        fontWeight: 'bold'
    }

    return (
        <main>
            <section className="section" style={mainStyle}>
                <h2 style={headingStyle}>GRUPO ANUEL (EQUIPO NÚMERO 4)</h2>
                <p style={paragraphStyle}>
                    Nuestro equipo se encuentra conformado por tres estudiantes de la
                    carrera Ingeniería Civil, compartiendo secciones desde el primer
                    semestre de la universidad, por lo que ya previamente nos conocíamos
                    entre sí. Estamos juntos en varios ramos este semestre, siendo equipo
                    en otros dos más, siendo estos Inteligencia Artificial, bajo la
                    sección impartida por John Atkinson y Taller de Innovación y
                    Emprendimiento Tecnológico, en la sección impartida por Alejandro
                    Godoy.
                </p>
                <p style={paragraphStyle}>
                    Nuestros objetivos como equipo para este ramo es aprender lo más
                    posible acerca de diseño web (frontend) y entregar siempre nuestro
                    100% para las diversas entregas que ocurran a lo largo del semestre.
                </p>
                <ImageContainer />
                <h2 style={headingStyle}>MEME DEL MES</h2>
                <Meme />
            </section>
        </main>
    );
};

export default MainSection;
