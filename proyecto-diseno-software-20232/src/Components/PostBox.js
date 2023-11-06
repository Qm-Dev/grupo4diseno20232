import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import pfp_example from '../Pages/img/pfp_example.jpg';

function PostBox() {

    const textareaStyle = {
        overflow: 'hidden',
        resize: 'none',
        height: '150px'
    }

    return (
        <div className='container'>
            <div className='row'>
                <div className='col p-1'>
                    <div className='row'>
                        <img className="rounded-circle w-25" src={pfp_example}></img>
                        <textarea className='col-md-1 w-75 rounded-4 border-3 border-dark' style={textareaStyle} minLength={16} placeholder='¿Qué estás pensando?'></textarea>
                        <div className="m-3">
                            <input className="form-control" type="file" id="formFile"></input>
                        </div>
                        <div>
                            <button className='btn btn-primary'>Publicar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PostBox;