import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function ProfileRecomendations(props) {

    const { nombrePersona } = props;
    const { apellidoPersona } = props;
    const { fotoPerfilPersona } = props;

    const profesionesConstruccion = [
        "Albañil",
        "Carpintero",
        "Electricista",
        "Fontanero",
        "Pintor",
        "Soldador",
        "Techador",
        "Jardinero/Landscaper",
        "Trabajador de demolición",
        "Operador de maquinaria pesada",
        "Ayudante de construcción",
        "Operador de montacargas",
        "Encargado de limpieza y mantenimiento",
        "Operador de herramientas manuales",
        "Instalador de aislamiento",
        "Asistente de carpintería",
        "Operador de grúa móvil",
        "Operador de excavadora",
        "Armador de estructuras de acero",
        "Instalador de suelos",
        "Operario de encofrado",
        "Conserje",
        "Operador de compactadora",
        "Operador de miniexcavadora",
        "Instalador de tuberías",
        "Ayudante de electricista",
        "Auxiliar de plomería",
        "Auxiliar de pintura",
    ];

    const indiceAleatorio = Math.floor(Math.random() * profesionesConstruccion.length);
    const profesionesAleatoria = profesionesConstruccion[indiceAleatorio];

    return (
        <div class="card-body p-2 text-center">
            <div class="row">
                <div class="col-md-4">
                    <a href={`/users/${nombrePersona.toLowerCase()}_${apellidoPersona.toLowerCase()}`}><img src={fotoPerfilPersona} class="img-fluid rounded-circle img-thumbnail ms-3" alt="Imagen de perfil"></img></a>
                </div>
                <div class="col-md-8 p-1">
                    <h3 class="fs-5">{nombrePersona} {apellidoPersona}</h3>
                    <p class="mb-1"><strong>Profesión:</strong> {profesionesAleatoria}</p>
                </div>
            </div>
        </div>
    );
}

export default ProfileRecomendations;
