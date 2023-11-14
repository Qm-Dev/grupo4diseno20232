import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function Recomendation(props) {

    // Argumentos
    const { nombrePersona } = props;
    const { apellidoPersona } = props;
    const { fotoPerfilPersona } = props;
    const { fechaNoti } = props;

    // Tipos de notificaciones
    const recomendacionesLaborales = [
        "Destaca por su habilidad para liderar equipos multifuncionales. Su enfoque estratégico y su capacidad para motivar a los miembros del equipo son ejemplares.",
        "Es un profesional altamente organizado y orientado a resultados. Su habilidad para gestionar proyectos complejos y cumplir con plazos ajustados es destacable.",
        "Demuestra un compromiso excepcional con la calidad y la mejora continua. Siempre está dispuesto a asumir nuevos desafíos y aportar soluciones innovadoras.",
        "Es un comunicador efectivo con habilidades excepcionales de presentación. Ha demostrado la capacidad de simplificar conceptos complejos para audiencias diversas.",
        "Destaca en la resolución de problemas técnicos. Su habilidad para identificar y abordar desafíos técnicos ha sido esencial para el éxito de varios proyectos.",
        "Es un colaborador colaborativo y un buen tomador de decisiones. Su capacidad para trabajar eficazmente en equipo y contribuir a un ambiente positivo es invaluable.",
        "Demuestra una habilidad única para adaptarse a entornos cambiantes. Su agilidad y capacidad para gestionar la incertidumbre son activos significativos para el equipo.",
        "Es un líder innovador que siempre está buscando formas de mejorar procesos. Su enfoque en la eficiencia operativa ha llevado a mejoras tangibles en la productividad.",
        "Destaca por su ética de trabajo y su capacidad para mantener la calma bajo presión. Su actitud positiva y su enfoque resolutivo son admirables.",
        "Es un experto en su campo y comparte generosamente su conocimiento con el equipo. Su disposición para mentorizar a otros ha contribuido al desarrollo profesional de muchos.",
        "Demuestra una habilidad excepcional para analizar datos y extraer información significativa. Sus análisis han proporcionado valiosas perspectivas para la toma de decisiones.",
        "Es un líder inspirador y un defensor efectivo de la diversidad en el lugar de trabajo. Su compromiso con la inclusión ha contribuido a un ambiente laboral más acogedor.",
        "Destaca por su atención a los detalles y su enfoque meticuloso en la ejecución de tareas. Su trabajo preciso y de alta calidad es apreciado por todo el equipo.",
        "Es un solucionador de problemas creativo que aporta nuevas ideas a la mesa. Su mentalidad innovadora ha llevado a la implementación exitosa de varias iniciativas.",
        "Demuestra un fuerte sentido de responsabilidad y una ética laboral excepcional. Su dedicación al éxito del equipo es evidente en cada proyecto que emprende."
    ];

    // Creación de la notificación
    const indiceAleatorio = Math.floor(Math.random() * recomendacionesLaborales.length);
    const recomendacionAleatoria = recomendacionesLaborales[indiceAleatorio];

    return (
            <div class="card mb-3">
                <div class="card-body">
                    <div class="row">
                        <div class="col-md-1">
                            <img src={fotoPerfilPersona} class="me-3 rounded-circle img-thumbnail" alt="Imagen de Usuario"></img>
                        </div>
                        <div class="col-md-11">
                            <h5 class="mt-0 text-left">{nombrePersona} {apellidoPersona}</h5>
                            <p>{recomendacionAleatoria}</p>
                            <small class="text-muted">Fecha de notificación: {fechaNoti}</small>
                        </div>
                    </div>
                </div>
            </div>
    );
}

export default Recomendation;