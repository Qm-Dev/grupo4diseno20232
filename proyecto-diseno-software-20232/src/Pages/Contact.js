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
        <main className="bg-secondary-subtle">
            <div class="container py-5">
                <h1 class="text-uppercase fw-bold mb-4 text-center">Contáctanos</h1>
                <div class="lh-base mb-4 text-center">
                    <p class="fs-3">¿Dudas?</p>
                    <p class="fs-3">¿Comentarios?</p>
                    <p class="fs-4">Haznos saber lo que quieras a través de este formulario. Nuestro equipo estará feliz de responderte lo antes posible.</p>
                </div>
                <div class="col-md-6 mx-auto mb-4">
                    <form>
                    <div class="mb-4">
                        <label class="form-label" for="inputName">Nombre:</label>
                        <input type="name" class="form-control" id="inputName" placeholder="Nombre" />
                    </div>
                    <div class="mb-4">
                        <label class="form-label" for="inputEmail4">Email:</label>
                        <input type="email" class="form-control" id="inputEmail4" placeholder="Email" />
                    </div>
                    <div class="mb-4">
                        <label class="form-label" for="inputMessage">Mensaje:</label>
                        <textarea class="form-control" id="inputMessage" rows="7" placeholder="Mensaje"></textarea>
                    </div>
                    <div class="text-center">
                        <button type="submit" class="btn btn-primary">Enviar</button>
                    </div>
                    </form>
                </div>
            </div>
        </main>
    );
}

export default Contact;