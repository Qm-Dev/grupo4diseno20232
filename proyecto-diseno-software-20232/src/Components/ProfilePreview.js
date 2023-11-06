import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import pfp_example from '../Pages/img/pfp_example.jpg';

function ProfilePreview() {

    const style = {
        width: '50%',
        margin: '0 auto'
    }

    return (
        <div className="card border border-dark" style={style}>
            <img className="card-img-top border border-dark" src={pfp_example} alt="Card image cap"></img>
            <div className="card-body">
                <h4>Nombre</h4>
                <h6>Profesión</h6>
            </div>
        </div>
    );
}

export default ProfilePreview;
