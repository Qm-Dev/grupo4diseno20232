import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function Register() {

    const registerFormStyle = {
        fontFamily: 'Inter',
        fontWeight: 'bold',
        backgroundImage: `url("https://teamwork.tf/images/map_context/ctf_2fort/spectator_0.jpg")`,
        backgroundPosition: 'center',
    }

    const specificLabelStyling = {
        textShadow: '2px 1px 1px black',
        fontFamily: 'Arvo'
    }

    return (
        <main className="bg-secondary" style={registerFormStyle}>
            <div id="formulario-registro" className="col-md-7 mx-auto">
            <h1 className="text-center p-3">Bienvenido a Mendelevium</h1>
                {/* Formulario de registro en la plataforma */}
                <form className="text-center text-light p-5" style={specificLabelStyling}>
                    <div className="row">
                        <div className="mb-5 col">
                            <label for="inputNombres" class="form-label">Nombres</label>
                            <input type="text" class="form-control border-4 border-dark" name="nombres" placeholder="Nombres" required></input>
                        </div>
                        <div className="mb-5 col">
                            <label for="inputApellidos" class="form-label">Apellidos</label>
                            <input type="text" class="form-control border-4 border-dark" name="apellidos" placeholder="Apellidos" required></input>
                        </div>
                        <div className="mb-5">
                            <label for="inputBirthday" class="form-label">Fecha de nacimiento</label>
                            <input type="date" class="form-control border-4 border-dark" name="fecha_nacimiento" required></input>
                        </div>
                        <div className="mb-5 col">
                            <label for="inputCorreo" class="form-label">Correo electrónico</label>
                            <input type="email" class="form-control border-4 border-dark" name="correo" placeholder="ejemplo@dirección.cl" required></input>
                        </div>
                        <div className="mb-5 col">
                            <label for="inputTelefono" class="form-label">Teléfono de contacto</label>
                            <input type="tel" class="form-control border-4 border-dark" name="telefono" placeholder="(+56 9) 1234 5678" maxlength="8" required></input>
                        </div>
                        <div className="mb-5">
                            <label for="inputProfesion" class="form-label">Profesión</label>
                            <input type="text" class="form-control border-4 border-dark" name="profesion" placeholder="Profesión / Oficio" required></input>
                        </div>
                    </div>
                    {/* Botón de envío del formulario */}
                    <div>
                        <button type="submit" className="btn btn-primary border-3 border-black">Registrarme</button>
                    </div>
                </form>
            </div>
        </main>
    )
}

export default Register;