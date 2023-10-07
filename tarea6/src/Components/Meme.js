import React from "react";
import meme from '../images/meme.gif';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


const Meme = () => {

    const divStyle = {
        width: '100%',
        height: '400px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 'auto',
        marginBottom: '20px',

    };

    const imgStyle = {
        display: 'flex',
        maxHeight: '100%',
        maxWidth: '100%',
        border: 'solid',
        borderColor: 'white',
    };
    

    return (
        <div className="meme" style={divStyle}>
        <img src={meme} style={imgStyle} alt="MEME" />
        </div>
    );
}


export default Meme;