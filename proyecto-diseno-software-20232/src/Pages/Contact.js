import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const textStyle = {
    textAlign: 'center',
    margin: '2rem auto',
    fontFamily: 'Inter',
};

const noResizing = {
    resize: 'none'
}

const formLabelStyle = {
    marginBottom: '0.5rem',
    fontWeight: 'bold',
    fontFamily: 'Arvo'
}

function Contact() {
    return (
        <main>
            <h1 style={textStyle} className='text-uppercase fw-bold'>Contáctanos</h1>
            <h3 style={textStyle} className='lh-base'>¿Dudas? ¿Comentarios?<br></br>Haznos saber lo que quieras a través de este formulario. <br></br>Nuestro equipo estará feliz de responderte lo antes posible.</h3>
            <div className='col-md-6 mx-auto border border-5 border-black p-5 rounded-5 mb-4'>
                <form>
                    <div className="row form-group mb-4">
                        <label style={formLabelStyle} htmlFor="inputName">Nombre</label>
                        <input type="name" className="form-control" id="inputName" placeholder="Nombre" />
                    </div>
                    <div className="row form-group mb-4">
                        <label style={formLabelStyle} htmlFor="inputEmail4">Email</label>
                        <input type="email" className="form-control" id="inputEmail4" placeholder="Email" />
                    </div>
                    <div className="row form-group mb-4">
                        <label style={formLabelStyle} htmlFor="inputMessage">Mensaje</label>
                        <textarea style={noResizing} type="text" className="form-control" id="inputMessage" rows="7" placeholder="Mensaje" />
                    </div>
                    <div className="text-center">
                        <button type="submit" className="row btn btn-primary">Enviar</button>
                    </div>
                </form>
            </div>
        </main>
    );
}

export default Contact;