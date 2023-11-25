import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


function Contact() {

    const contentStyle = {
        marginTop: '80px', // Ajusta esto según la altura de tu barra de navegación
    };
    
    return (
        <main className="bg-secondary-subtle min-vh-100">
            <div class="container py-5" style={contentStyle}>
                <div class="card mx-auto col-md-9">
                    <div class="card-header bg-primary text-white">
                        <h1 class="text-center text-uppercase"><i class="fa fa-comments mt-2"></i> Contáctanos</h1>
                    </div>
                    <div class="card-body">
                        <div class="lh-base mb-4 text-center" >
                            <p class="fs-5 mt-2">Haznos saber lo que quieras a través de este formulario. <br></br>Nuestro equipo estará feliz de responderte lo antes posible.</p>
                        </div>
                        <div class="col-md-10 mx-auto mb-4">
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
                                    <button type="submit" class="btn btn-primary fs-5"><i class="fa fa-pencil-square" aria-hidden="true"></i> Enviar</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Contact;