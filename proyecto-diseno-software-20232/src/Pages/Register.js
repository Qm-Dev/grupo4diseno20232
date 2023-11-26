import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


const cardStyle = {
    borderRadius: '1rem',
    backgroundColor: '#1a1a1a',
};

function Register() {

    return (
        <main className='bg-secondary-subtle min-vh-100'>
            <section className="bg-secondary-subtle">
                <div className="container py-4">
                    <div className="row d-flex justify-content-center align-items-center">
                        <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                            <div className="card bg-primary text-white" style={cardStyle}>
                                <div className="card-body px-5 py-2 text-center">
                                    {/* Formulario de inicio de sesión */}
                                    <div className="mb-md-5 mt-md-4 pb-0">
                                        <h2 className="fw-bold mb-2 text-uppercase">Registrarse</h2>
                                        <div className="form-outline form-white mb-2">
                                            <label className="form-label" htmlFor="text">Nombres</label>
                                            <input type="text" id="" className="form-control" />
                                        </div>
                                        <div className="form-outline form-white mb-2">
                                            <label className="form-label" htmlFor="text">Apellidos</label>
                                            <input type="text" id="" className="form-control" />
                                        </div>
                                        <div className="form-outline form-white mb-2">
                                            <label className="form-label" htmlFor="text">Correo</label>
                                            <input type="email" id="" className="form-control" />
                                        </div>
                                        <div className="form-outline form-white mb-2">
                                            <label className="form-label" htmlFor="typePasswordX">Contraseña</label>
                                            <input type="password" id="typePasswordX" className="form-control" />
                                        </div>
                                        <div className="form-outline form-white mb-2">
                                            <label className="form-label" htmlFor="text">Teléfono</label>
                                            <input type="tel" id="" className="form-control" />
                                        </div>
                                        <div className="form-outline form-white mb-2">
                                            <label className="form-label" htmlFor="text">Fecha de nacimiento</label>
                                            <input type="date" id="" className="form-control" />
                                        </div>
                                        <div className="form-outline form-white mb-2">
                                            <label className="form-label" htmlFor="text">Comuna</label>
                                            <input type="text" id="" className="form-control" />
                                        </div>
                                        <div className="form-outline form-white mb-2">
                                            <label className="form-label" htmlFor="text">Región</label>
                                            <input type="text" id="" className="form-control" />
                                        </div>
                                        <div className="form-outline form-white mb-2">
                                            <label className="form-label" htmlFor="text">Profesión</label>
                                            <input type="text" id="" className="form-control" />
                                        </div>
                                    <div class="text-center p-3">
                                    <button type="submit" class="fs-5 btn btn-secondary"><i class="fa fa-pencil-square" aria-hidden="true"></i> Registrar</button>
                                    </div>
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

export default Register;
