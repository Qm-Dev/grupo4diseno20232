import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function PostBox(props) {

    const { fotoPerfilPersona } = props;

    return (
        <div class="card">
            <div class="card-header bg-success text-white">
                <h4><i class="fas fa-edit"></i> Nueva Publicación</h4>
            </div>
            <div class="card-body">
                <div class="row">
                    <div class="col-md-2">
                        <img src={fotoPerfilPersona} class="img-fluid rounded-circle img-thumbnail" alt="Imagen de perfil"></img>
                    </div>
                    <div class="col-md-10">
                        <form>
                            <div class="mb-3">
                                <textarea class="form-control" rows="3" placeholder="Escribe tu mensaje aquí"></textarea>
                            </div>
                            <div class="mb-3">
                                <label for="archivo" class="form-label">Adjuntar archivo:</label>
                                <input type="file" class="form-control" id="archivo"></input>
                            </div>
                                <button type="submit" class="btn btn-primary"><i class="fas fa-paper-plane"></i> Publicar</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PostBox;