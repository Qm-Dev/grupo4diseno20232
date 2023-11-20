import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function formatDate(isoDate) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = new Date(isoDate).toLocaleDateString(undefined, options);
    return formattedDate;
}

function JobProfile(props) {

    // Argumentos
    const { nombrePersona } = props;
    const { apellidoPersona } = props;
    const { fotoPerfilPersona } = props;
    const { fecha } = props;
    const { correo } = props;
    const { ciudad } = props;
    const { telefono } = props;
    const { edad } = props;
    const { profesion } = props;
    const formattedDate = formatDate(fecha);

    return (
        <div class="card mb-3">
            <div class="row">
                <div class="col-md-2">
                    <img src={fotoPerfilPersona} class="m-4 rounded-circle img-thumbnail" alt="Imagen de Usuario"></img>
                </div>
                <div class="col-md-10">
                    <div class="card-body">
                        <h3 class="card-title">{nombrePersona} {apellidoPersona}</h3>
                        <div class="row">
                            <div class="col-md-6">
                                <p class="card-text"><strong>Fecha:</strong> {formattedDate}</p>
                                <p class="card-text"><strong>Correo:</strong> {correo}</p>
                                <p class="card-text"><strong>Teléfono:</strong> {telefono}</p>
                            </div>
                            <div class="col-md-6">
                                <p class="card-text"><strong>Edad:</strong> {edad}</p>
                                <p class="card-text"><strong>Región:</strong> {ciudad}</p>
                                <p class="card-text"><strong>Profesión:</strong> {profesion}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default JobProfile;