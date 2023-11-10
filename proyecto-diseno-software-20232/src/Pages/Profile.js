import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import pfp_example from './img/pfp_example.jpg';

function Profile() {

    const imgStyle = {
        borderRadius: '100%',
        backgroundColor: 'black',
        width: '200px',
        height: 'auto', 
        display: 'block', 
        margin: '0 auto', 
    };

    const paragraphStyle = {
        textAlign: 'justify',
        padding: '0.75rem 1.5rem', 
    };

    const certificationStyle = {
        textAlign: 'justify',
        padding: '0.75rem 1.5rem'
    };

    const carouselIndicatorsStyle = {
        // alejar los indicadores del carousel del contenido
        bottom: '-1.5rem',
    };

    return (
        <main>
            <div className='profile'>
                <div className='container text-center'>
                    <div id='presentationSection' className='border border-5 rounded-5 border-dark mt-3 mb-3 p-3'>
                        <img className='p-2' src={pfp_example} style={imgStyle}></img>
                        <h1>Dell Conagher</h1>
                        <h4>Ocupación / Oficio / Especialización</h4>
                        <p style={paragraphStyle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ipsum mauris, congue ac libero sit amet, vehicula
                        vestibulum tellus. Sed sagittis, sapien ac lacinia vehicula, magna massa scelerisque justo, id lacinia erat turpis
                        sit amet ante. Duis sit amet dignissim tortor. Sed tincidunt ipsum in dolor dapibus, id varius turpis congue.
                        Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Cras non pretium orci.
                        Vestibulum finibus turpis in lectus tincidunt pulvinar.
                        </p>
                    </div>
                    <div id='experienceSection' className='border border-5 rounded-5 border-dark mb-3'>
                        <h2 className='p-2'>Experiencia</h2>
                        <div id="carouselExampleDark" class="carousel carousel-dark slide">
                            <div style={carouselIndicatorsStyle} class="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            </div>
                            <div class="carousel-inner">
                            <div class="carousel-item active" data-bs-interval="10000">
                                <div class="d-flex flex-column align-items-center">
                                        <img src="https://wiki.teamfortress.com/w/images/thumb/3/3e/Community_Engineer_Strategy_Header.png/400px-Community_Engineer_Strategy_Header.png" class="d-block w-auto mx-auto" alt="Experiencia1" />
                                    <div class="text-center">
                                        <h5>First slide label</h5>
                                        <p>Some representative placeholder content for the first slide.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="carousel-item" data-bs-interval="2000">
                                <div class="d-flex flex-column align-items-center">
                                    <img src="https://wiki.teamfortress.com/w/images/thumb/a/a6/Engiwithdispenser.png/300px-Engiwithdispenser.png" class="d-block w- mx-auto" alt="Experiencia2" />
                                    <div class="text-center">
                                        <h5>Second slide label</h5>
                                        <p>Some representative placeholder content for the second slide.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <div class="d-flex flex-column align-items-center">
                                    <img src="https://wiki.teamfortress.com/w/images/thumb/0/01/Engybuild.png/400px-Engybuild.png" class="d-block w-20 mx-auto" alt="Experiencia3" />
                                    <div class="text-center">
                                        <h5>Third slide label</h5>
                                        <p>Some representative placeholder content for the third slide.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                        </div>
                        <a href="#" className='btn btn-dark mb-3 mt-3'>Editar experiencia</a>
                    </div>
                    <div id='certificationsSection' className='border border-5 rounded-5 border-dark mb-3'>
                        <h2 className='p-2'>Certificaciones</h2>
                        <ul>
                            <li style={certificationStyle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ipsum mauris, congue ac libero sit amet, vehicula
                            vestibulum tellus. Sed sagittis, sapien ac lacinia vehicula, magna massa scelerisque justo, id lacinia erat turpis
                            sit amet ante. Duis sit amet dignissim tortor.
                            </li>
                            <br></br>
                            <li style={certificationStyle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ipsum mauris, congue ac libero sit amet, vehicula
                            vestibulum tellus. Sed sagittis, sapien ac lacinia vehicula, magna massa scelerisque justo, id lacinia erat turpis
                            sit amet ante. Duis sit amet dignissim tortor.
                            </li>
                            <br></br>
                            <li style={certificationStyle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ipsum mauris, congue ac libero sit amet, vehicula
                            vestibulum tellus. Sed sagittis, sapien ac lacinia vehicula, magna massa scelerisque justo, id lacinia erat turpis
                            sit amet ante. Duis sit amet dignissim tortor.
                            </li>
                        </ul>
                        <a href="#" className='btn btn-dark mb-2'>Editar certificaciones</a>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Profile;