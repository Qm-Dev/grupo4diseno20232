import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

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
                    <textarea className='w-100' style={textareaStyle} minLength={16} placeholder='¿Qué estás pensando?'></textarea>
                    <div className="m-3">
                        <input className="form-control" type="file" id="formFile"></input>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PostBox;