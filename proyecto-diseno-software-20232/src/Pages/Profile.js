import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function Profile() {

    const profileGeneralStyle = {
        fontFamily: 'Spline Sans',
        textAlign: 'center',
        marginTop: '1rem',
        marginBottom: '1rem',
    }

    const profilePictureStyle = {
        width: '100%',
        height: '100%',
        maxWidth: '224px',
        border: '5px solid gray',
        borderRadius: '100%',
        marginTop: '1rem',
    }

    const presentationProfileStyle = {
        border: '3px solid black',
        height: '100%',
        boxSizing: 'border-box',
        marginLeft: '5rem',
        marginRight: '5rem',
        borderRadius: '70px'
    }

    const experienceProfileStyle = {
        border: '3px solid black',
        height: '100%',
        boxSizing: 'border-box',
        marginTop: '1.25rem',
        marginLeft: '5rem',
        marginRight: '5rem',
        borderRadius: '70px'
    }

    const headingStyle = {
        padding: '0.5rem'
    }

    const paragraphStyle = {
        margin: '2rem'
    }

    return (
        <div className='profile' style={profileGeneralStyle}>
            <div className='presentation' style={presentationProfileStyle}>
                <img src="https://wiki.teamfortress.com/w/images/7/76/Buffed_red_engineer.jpg" style={profilePictureStyle}></img>
                <h1 style={headingStyle}>Nombre de la persona</h1>
                <h4 style={headingStyle}>Ocupación / Oficio / Especialización</h4>
                <p style={paragraphStyle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ipsum mauris, congue ac libero sit amet, vehicula
                vestibulum tellus. Sed sagittis, sapien ac lacinia vehicula, magna massa scelerisque justo, id lacinia erat turpis
                sit amet ante. Duis sit amet dignissim tortor. Sed tincidunt ipsum in dolor dapibus, id varius turpis congue.
                Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Cras non pretium orci.
                Vestibulum finibus turpis in lectus tincidunt pulvinar.
                </p>
            </div>
            <div className='experience' style={experienceProfileStyle}>
                <h2 style={headingStyle}>Experiencia</h2>
                <p style={paragraphStyle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ipsum mauris, congue ac libero sit amet, vehicula
                vestibulum tellus. Sed sagittis, sapien ac lacinia vehicula, magna massa scelerisque justo, id lacinia erat turpis
                sit amet ante. Duis sit amet dignissim tortor. Sed tincidunt ipsum in dolor dapibus, id varius turpis congue.
                Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Cras non pretium orci.
                Vestibulum finibus turpis in lectus tincidunt pulvinar.
                </p>
            </div>
        </div>
    );
}

export default Profile;