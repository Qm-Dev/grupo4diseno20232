import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const formStyle = {
    width: '50%',
    margin: '3rem auto',
    padding: '1rem',
    border: '1px solid black',
    borderRadius: '5px',
    textAlign: 'center',
};

const interiorFormStyle = {
    margin: '1rem 8rem',
    textAlign: 'center',
};

const textStyle = {
    textAlign: 'center',
    margin: '2rem auto',
};

function Contact() {
    return (
        <main>
            <h1 style={textStyle}>CONTACTANOS</h1>
            <h3 style={textStyle}>¿Tienes alguna duda? ¿Tienes un comentario?<br></br>Comentanos lo que quieras mediante este formulario. <br></br>Nuestro equipo estara feliz de responderte lo antes posible.</h3>
            <div>
                <form style={formStyle}>
                    <div style={interiorFormStyle} className="form-group">
                        <label htmlFor="inputName">Nombre</label>
                        <input type="name" className="form-control" id="inputName" placeholder="Name" />
                    </div>
                    <div style={interiorFormStyle} className="form-group">
                        <label htmlFor="inputEmail4">Email</label>
                        <input type="email" className="form-control" id="inputEmail4" placeholder="Email" />
                    </div>
                    <div style={interiorFormStyle} className="form-group">
                        <label htmlFor="inputMessage">Mensaje</label>
                        <input type="text" className="form-control" id="inputMessage" placeholder="Mensaje" />
                    </div>
                    <button type="submit" className="btn btn-primary">Enviar</button>
                </form>
            </div>
        </main>
    );
}

export default Contact;