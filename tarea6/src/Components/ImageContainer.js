import React from 'react';
import benjaImage from '../images/Benja.jpg';
import diegoImage from '../images/Diego.jpg';
import matiasImage from '../images/matias.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';

const ImageContainer = () => {
    const imageContainerStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexWrap: 'wrap-reverse'
    };

    const imageContainerDivStyle = {
        textAlign: 'center',
        padding: '20px',
        flexBasis: 'content',
        maxWidth: '70%',
    };

    const imageStyle = {
        display: 'block',
        margin: 'auto',
        border: 'solid',
        borderColor: 'white',
        borderRadius: '50%',
        height: '300px',
        width: '200px',
        maxHeight: '200px'
    };

    const headingStyle = {
        marginTop: '10px',
        marginBottom: '20px',
        fontFamily: 'Inter',
        fontWeight: 'bold'
    };

    return (
        <div className="image-container" style={imageContainerStyle}>
            <div style={imageContainerDivStyle}>
                <img src={benjaImage} alt="IMAGEN COMPAÑERO 1" style={imageStyle} />
                <h3 style={headingStyle}>Benjamín</h3>
            </div>
            <div style={imageContainerDivStyle}>
                <img src={diegoImage} alt="IMAGEN COMPAÑERO 2" style={imageStyle} />
                <h3 style={headingStyle}>Diego</h3>
            </div>
            <div style={imageContainerDivStyle}>
                <img src={matiasImage} alt="IMAGEN COMPAÑERO 3" style={imageStyle} />
                <h3 style={headingStyle}>Matías</h3>
            </div>
        </div>
    );
};

export default ImageContainer;
