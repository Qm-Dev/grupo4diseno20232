import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Trends(props) {

    const { nombre } = props;
    const { cant } = props;
    console.log(cant);

    return (
        <div class="card-body p-2 text-center">
            <h3 class="fs-5">{nombre}</h3>
            <p class="fw-light"><strong>Cantidad posts:</strong> {cant}</p>
        </div>
    );
}

export default Trends;
