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
        <div className="card" style={style}>
            <img className="card-img-top" src={pfp_example} alt="Card image cap"></img>
            <div className="card-body">
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
        </div>
    );
}

export default ProfilePreview;
