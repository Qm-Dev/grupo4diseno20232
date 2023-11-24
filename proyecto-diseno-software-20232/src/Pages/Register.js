import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Register() {

    // TODO: Font Styles

    return (
        <main className="d-flex align-items-center justify-content-center bg-secondary-subtle">
            <div class="container pt-4">
                <h2 class="mb-4 text-center">Registrarse</h2>
                {/* Formulario de registro */}
                <form>
                    <div class="mb-3">
                        <label for="nombres" class="form-label">Nombres:</label>
                        <input type="text" class="form-control" id="nombres" required></input>
                    </div>
                    <div class="mb-3">
                        <label for="apellidos" class="form-label">Apellidos:</label>
                        <input type="text" class="form-control" id="apellidos" required></input>
                    </div>
                    <div class="mb-3">
                        <label for="correo" class="form-label">Correo:</label>
                        <input type="email" class="form-control" id="correo" required></input>
                    </div>
                    <div class="mb-3">
                        <label for="telefono" class="form-label">Teléfono:</label>
                        <input type="tel" class="form-control" id="telefono" required></input>
                    </div>
                    <div class="mb-3">
                        <label for="fechaNacimiento" class="form-label">Fecha de nacimiento:</label>
                        <input type="date" class="form-control" id="fechaNacimiento" required></input>
                    </div>
                    <div class="mb-3">
                        <label for="comuna" class="form-label">Comuna:</label>
                        <input type="text" class="form-control" id="comuna" required></input>
                    </div>
                    <div class="mb-3">
                        <label for="region" class="form-label">Región:</label>
                        <input type="text" class="form-control" id="region" required></input>
                    </div>
                    <div class="mb-3">
                        <label for="profesion" class="form-label">Profesión:</label>
                        <select id="profesion" name="profesion" class="form-select">
                            <option value="Albañil">Albañil</option>
                            <option value="Carpintero">Carpintero</option>
                            <option value="Electricista">Electricista</option>
                            <option value="Fontanero">Fontanero</option>
                            <option value="Pintor">Pintor</option>
                            <option value="Soldador">Soldador</option>
                            <option value="Techador">Techador</option>
                            <option value="Jardinero/Landscaper">Jardinero/Landscaper</option>
                            <option value="Trabajador de demolición">Trabajador de demolición</option>
                            <option value="Operador de maquinaria pesada">Operador de maquinaria pesada</option>
                            <option value="Ayudante de construcción">Ayudante de construcción</option>
                            <option value="Operador de montacargas">Operador de montacargas</option>
                            <option value="Encargado de limpieza y mantenimiento">Encargado de limpieza y mantenimiento</option>
                            <option value="Operador de herramientas manuales">Operador de herramientas manuales</option>
                            <option value="Instalador de aislamiento">Instalador de aislamiento</option>
                            <option value="Asistente de carpintería">Asistente de carpintería</option>
                            <option value="Operador de grúa móvil">Operador de grúa móvil</option>
                            <option value="Operador de excavadora">Operador de excavadora</option>
                            <option value="Armador de estructuras de acero">Armador de estructuras de acero</option>
                            <option value="Instalador de suelos">Instalador de suelos</option>
                            <option value="Operario de encofrado">Operario de encofrado</option>
                            <option value="Conserje">Conserje</option>
                            <option value="Operador de compactadora">Operador de compactadora</option>
                            <option value="Operador de miniexcavadora">Operador de miniexcavadora</option>
                            <option value="Instalador de tuberías">Instalador de tuberías</option>
                            <option value="Ayudante de electricista">Ayudante de electricista</option>
                            <option value="Auxiliar de plomería">Auxiliar de plomería</option>
                            <option value="Auxiliar de pintura">Auxiliar de pintura</option>
                        </select>
                    </div>
                    <div class="form-check mb-3">
                        <input type="checkbox" class="form-check-input" id="aceptaTerminos" required></input>
                        <label class="form-check-label" for="aceptaTerminos">Acepto los términos y condiciones de servicio.</label>
                    </div>
                    <div class="text-center pb-4">
                        <button type="submit" class="btn btn-primary">Registrar</button>
                    </div>
                </form>
            </div>
        </main>
    )
}

export default Register;