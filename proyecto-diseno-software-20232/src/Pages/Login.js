import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


const cardStyle = {
    borderRadius: '1rem',
    backgroundColor: '#1a1a1a',
};

function Login() {

    return (
        <main className='bg-secondary-subtle min-vh-100'>
            <section className="vh-100 gradient-custom bg-body-secondary">
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                            <div className="card bg-primary text-white" style={cardStyle}>
                                <div className="card-body p-5 text-center">
                                    {/* Formulario de inicio de sesión */}
                                    <div className="mb-md-5 mt-md-4 pb-5">
                                        <h2 className="fw-bold mb-2 text-uppercase">Iniciar Sesión</h2>
                                        <p className="text-white mb-5">Por favor, ingresa tu correo y contraseña.</p>
                                        <div className="form-outline form-white mb-4">
                                            <input type="email" id="typeEmailX" className="form-control form-control-lg" />
                                            <label className="form-label" htmlFor="typeEmailX">Correo</label>
                                        </div>
                                        <div className="form-outline form-white mb-4">
                                            <input type="password" id="typePasswordX" className="form-control form-control-lg" />
                                            <label className="form-label" htmlFor="typePasswordX">Contraseña</label>
                                        </div>
                                        <p className="small mb-5 pb-lg-2"><a className="text-white" href="#!">¿Olvidaste tu contraseña?</a></p>
                                        <Link to="/feed" className="btn btn-outline-light btn-lg px-5">Iniciar Sesion</Link>
                                        {/* Iniciar sesión con otras redes sociales */}
                                        <div className="d-flex justify-content-center text-center mt-4 pt-1">
                                            <a href="#!" className="text-white"><i className="fab fa-facebook-f fa-lg"></i></a>
                                            <a href="#!" className="text-white"><i className="fab fa-twitter fa-lg mx-4 px-2"></i></a>
                                            <a href="#!" className="text-white"><i className="fab fa-google fa-lg"></i></a>
                                        </div>
                                    </div>
                                    {/* Opción para registrarse en caso de no tener cuenta */}
                                    <div>
                                        <p className="mb-0">¿No tienes cuenta? <Link to="/register" className="text-white fw-bold">Registrarse</Link></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Login;
