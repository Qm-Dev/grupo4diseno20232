import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function ProfilePreview(props) {

    const { nombrePersona } = props;
    const { apellidoPersona } = props;
    const { fotoPerfilPersona } = props;
    const { ciudad } = props;
    const { estado } = props;
    const { pais } = props;

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
        <div class="card">
            <div class="card-header bg-primary text-white">
                <h4 class="text-center"><i class="fas fa-address-card mt-2"></i> Perfil de Usuario</h4>
            </div>
            <div class="card-body">
                <div class="row">
                    <div class="col-md-4">
                        <a href="/profile"><img src={fotoPerfilPersona} class="img-fluid rounded-circle img-thumbnail" alt="Imagen de perfil"></img></a>
                    </div>
                    <div class="col-md-8">
                        <h3 class="mb-4">{nombrePersona} {apellidoPersona}</h3>
                    </div>
                </div>
                <p class="ms-3"><strong>Profesión:</strong> {profesionesAleatoria}</p>
                <p class="ms-3"><strong>Ubicación:</strong> {ciudad}, {estado}, {pais}</p>
            </div>
        </div>
    );
}

export default ProfilePreview;
