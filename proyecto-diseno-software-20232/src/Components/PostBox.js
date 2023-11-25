import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function PostBox(props) {

    // Estado para almacenar el texto del textarea
    const [mensaje, setMensaje] = useState('');

    // Función para manejar cambios en el textarea
    const handleChange = (event) => {
        setMensaje(event.target.value);
    };

    // Función para manejar clic en el botón
    const handlePublicar = () => {
        console.log('Mensaje publicado:', mensaje);
        onPublicar(mensaje);
        setMensaje('');
    };

    const { fotoPerfilPersona } = props;
    const { onPublicar } = props;

    return (
        <div class="card">
            <div class="card-header bg-primary text-white">
                <h4 class="text-center"><i class="fas fa-edit mt-2"></i> Nueva Publicación</h4>
            </div>
            <div class="card-body">
                <div class="row">
                    <div class="col-md-2">
                        <img src={fotoPerfilPersona} class="img-fluid rounded-circle img-thumbnail" alt="Imagen de perfil"></img>
                    </div>
                    <div class="col-md-10">
                        <form>
                            <div class="mb-3">
                                <textarea class="form-control" rows="3" placeholder="Escribe tu mensaje aquí" value={mensaje} onChange={handleChange}></textarea>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="d-flex flex-wrap btn-group justify-content-center mt-2" role="group">
                    {/* Recomendar */}
                    <button type="button" class="btn btn-outline-success" onClick={handlePublicar}><i class="fas fa-paper-plane"></i> Publicar</button>
                    {/* Comentar */}
                    <button type="button" class="btn btn-outline-success"><i class="fa fa-camera"></i> Multimedia</button>
                    {/* Compartir */}
                    <button type="button" class="btn btn-outline-success"><i class="fa fa-calendar"></i> Evento</button>
                    {/* Enviar */}
                    <button type="button" class="btn btn-outline-success"><i class="fa fa-pencil-square"></i> Artículo</button>
                </div>
            </div>
        </div>
    );
}

export default PostBox;