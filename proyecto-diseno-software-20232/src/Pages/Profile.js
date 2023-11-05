import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import pfp_example from './img/pfp_example.jpg';
import placeholderimg from './img/placeholderimg.jpg';

function Profile() {

    const imgStyle = {
        borderRadius: '100%',
        backgroundColor: 'black',
        width: '200px',
        height: '100%',
        position: 'sticky',
        transform: 'rotate(360deg)'
    }

    return (
        <main>
            <div className='profile' style={profileGeneralStyle}>
                <div className='container text-center'>
                    <div id='presentationSection' className='border border-5 rounded-5 border-dark mt-3 mb-3 p-3'>
                        <img className='p-2' src={placeholderimg} style={imgStyle}></img>
                        <h1>Dell Conagher</h1>
                        <h4>Ocupación / Oficio / Especialización</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ipsum mauris, congue ac libero sit amet, vehicula
                        vestibulum tellus. Sed sagittis, sapien ac lacinia vehicula, magna massa scelerisque justo, id lacinia erat turpis
                        sit amet ante. Duis sit amet dignissim tortor. Sed tincidunt ipsum in dolor dapibus, id varius turpis congue.
                        Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Cras non pretium orci.
                        Vestibulum finibus turpis in lectus tincidunt pulvinar.
                        </p>
                    </div>
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