import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function formatDate(isoDate) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = new Date(isoDate).toLocaleDateString(undefined, options);
    return formattedDate;
}

function ProfilePreview(props) {

    const style = {
        width: '50%',
        margin: '0 auto'
    }

    const { nombrePersona } = props;
    const { apellidoPersona } = props;
    const { fotoPerfilPersona } = props;
    const { fecha } = props;
    const formattedDate = formatDate(fecha);

    const profesionesConstruccion = [
        "Albañil",
        "Carpintero",
        "Electricista",
        "Fontanero",
        "Pintor",
        "Soldador",
        "Techador",
        "Jardinero/Landscaper",
        "Trabajador de Demolición",
        "Operador de Maquinaria Pesada",
        "Ayudante de Construcción",
        "Operador de Montacargas",
        "Encargado de Limpieza y Mantenimiento",
        "Operador de Herramientas Manuales",
        "Instalador de Aislamiento",
        "Asistente de Carpintería",
        "Operador de Grúa Móvil",
        "Operador de Excavadora",
        "Armador de Estructuras de Acero",
        "Instalador de Suelos",
        "Operario de Encofrado",
        "Conserje",
        "Operador de Compactadora",
        "Operador de Miniexcavadora",
        "Instalador de Tuberías",
        "Ayudante de Electricista",
        "Auxiliar de Plomería",
        "Auxiliar de Pintura",
];

    const indiceAleatorio = Math.floor(Math.random() * profesionesConstruccion.length);

    const profesionesAleatoria = profesionesConstruccion[indiceAleatorio];

    return (
        <div className="card border border-dark" style={style}>
            <img className="card-img-top border border-dark" src={fotoPerfilPersona} alt="Card image cap"></img>
            <div className="card-body">
                <h4 className='text-center'>{nombrePersona} {apellidoPersona}</h4> 
                <h6 className='text-center'>{formattedDate}</h6>
                <h6 className='text-center'>{profesionesAleatoria}</h6>
            </div>
        </div>
    );
}

export default ProfilePreview;
