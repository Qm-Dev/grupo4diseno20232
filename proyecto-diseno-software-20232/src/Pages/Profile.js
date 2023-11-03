import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import pfp_example from './img/pfp_example.jpg';

function Profile() {

    //  Estilo general del perfil
    const profileGeneralStyle = {
        fontFamily: 'Spline Sans',
        textAlign: 'center',
        marginTop: '1rem',
        marginBottom: '1rem',
    }

    // Estilo de la foto de perfil
    const profilePictureStyle = {
        width: '100%',
        height: '100%',
        maxWidth: '224px',
        border: '4px solid gray',
        borderRadius: '100%',
        marginTop: '1rem',
    }

    // Estilo de la presentación de perfil
    const presentationProfileStyle = {
        border: '5px solid black',
        height: '100%',
        boxSizing: 'border-box',
        marginLeft: '5rem',
        marginRight: '5rem',
        borderRadius: '70px'
    }

    // Estilo de la experiencia compartida por el usuario en su perfil
    const experienceProfileStyle = {
        border: '5px solid black',
        height: '100%',
        boxSizing: 'border-box',
        marginTop: '1.25rem',
        marginLeft: '5rem',
        marginRight: '5rem',
        borderRadius: '70px',
        boxSizing: 'border-box'
    }

    // Estilo de headings de esta página
    const headingStyle = {
        padding: '0.5rem',
        fontFamily: 'Nunito Sans',
        fontWeight: 'bold'
    }

    // Estilo de los párrafos de esta página
    const paragraphStyle = {
        marginLeft: '4.5rem',
        marginRight: '4.5rem',
        textAlign: 'justify'
    }

    // Botón de editar
    const editButtonStyle = {
        marginBottom: '1rem',
        border: '3px solid black'
    }

    // Imágenes de experiencias previas
    const imgPreviousExperiencesStyle = {
        width: '100%',
        height: '100%',
        maxWidth: '400px',
        maxHeight: '400px',
        border: '5px solid black',
        borderRadius: '50px',
        marginBottom: '1rem',
        padding: '0.5rem',
    }

    return (
        <main>
            <div className='profile' style={profileGeneralStyle}>
                <div className='presentation' style={presentationProfileStyle}>
                    <img src={pfp_example} style={profilePictureStyle}></img>
                    <h1 style={headingStyle}>Dell Conagher</h1>
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
                    <img src="https://wiki.teamfortress.com/w/images/e/ee/Engywithsg.png" style={imgPreviousExperiencesStyle}></img>
                    <p style={paragraphStyle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ipsum mauris, congue ac libero sit amet, vehicula
                    vestibulum tellus. Sed sagittis, sapien ac lacinia vehicula, magna massa scelerisque justo, id lacinia erat turpis
                    sit amet ante. Duis sit amet dignissim tortor. Sed tincidunt ipsum in dolor dapibus, id varius turpis congue.
                    Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Cras non pretium orci.
                    Vestibulum finibus turpis in lectus tincidunt pulvinar.
                    </p>
                    <img src="https://wiki.teamfortress.com/w/images/thumb/0/01/Engybuild.png/400px-Engybuild.png" style={imgPreviousExperiencesStyle}></img>
                    <p style={paragraphStyle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ipsum mauris, congue ac libero sit amet, vehicula
                    vestibulum tellus. Sed sagittis, sapien ac lacinia vehicula, magna massa scelerisque justo, id lacinia erat turpis
                    sit amet ante. Duis sit amet dignissim tortor. Sed tincidunt ipsum in dolor dapibus, id varius turpis congue.
                    Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Cras non pretium orci.
                    Vestibulum finibus turpis in lectus tincidunt pulvinar.
                    </p>
                    <img src="https://wiki.teamfortress.com/w/images/thumb/0/0e/Engineer%27s_Cap.png/250px-Engineer%27s_Cap.png" style={imgPreviousExperiencesStyle}></img>
                    <p style={paragraphStyle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ipsum mauris, congue ac libero sit amet, vehicula
                    vestibulum tellus. Sed sagittis, sapien ac lacinia vehicula, magna massa scelerisque justo, id lacinia erat turpis
                    sit amet ante. Duis sit amet dignissim tortor. Sed tincidunt ipsum in dolor dapibus, id varius turpis congue.
                    Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Cras non pretium orci.
                    Vestibulum finibus turpis in lectus tincidunt pulvinar.
                    </p>
                    <a href="#" class='btn btn-dark' style={editButtonStyle}>Editar experiencia</a>
                </div>
                <div className='certifications row-md-3' style={experienceProfileStyle}>
                    <h2 style={headingStyle}>Certificaciones</h2>
                    <ul>
                        <li style={paragraphStyle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ipsum mauris, congue ac libero sit amet, vehicula
                        vestibulum tellus. Sed sagittis, sapien ac lacinia vehicula, magna massa scelerisque justo, id lacinia erat turpis
                        sit amet ante. Duis sit amet dignissim tortor. Sed tincidunt ipsum in dolor dapibus, id varius turpis congue.
                        Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Cras non pretium orci.
                        Vestibulum finibus turpis in lectus tincidunt pulvinar.
                        </li>
                        <li style={paragraphStyle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ipsum mauris, congue ac libero sit amet, vehicula
                        vestibulum tellus. Sed sagittis, sapien ac lacinia vehicula, magna massa scelerisque justo, id lacinia erat turpis
                        sit amet ante. Duis sit amet dignissim tortor. Sed tincidunt ipsum in dolor dapibus, id varius turpis congue.
                        Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Cras non pretium orci.
                        Vestibulum finibus turpis in lectus tincidunt pulvinar.
                        </li>
                        <li style={paragraphStyle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ipsum mauris, congue ac libero sit amet, vehicula
                        vestibulum tellus. Sed sagittis, sapien ac lacinia vehicula, magna massa scelerisque justo, id lacinia erat turpis
                        sit amet ante. Duis sit amet dignissim tortor. Sed tincidunt ipsum in dolor dapibus, id varius turpis congue.
                        Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Cras non pretium orci.
                        Vestibulum finibus turpis in lectus tincidunt pulvinar.
                        </li>
                    </ul>
                    <a href="#" className='btn btn-dark' style={editButtonStyle}>Editar certificaciones</a>
                </div>
            </div>
        </main>
    );
}

export default Profile;