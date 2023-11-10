import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import pfp_example from '../Pages/img/pfp_example.jpg';


// componente fecha
function formatDate(isoDate) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = new Date(isoDate).toLocaleDateString(undefined, options);
    return formattedDate;
  }
  

function SocialPost(props) {

    const { nombrePersona } = props;
    const { apellidoPersona } = props;
    const { fotoPerfilPersona } = props;
    const { fecha } = props;
    const formattedDate = formatDate(fecha);
    

    const textPostStyle = {
        textAlign: 'justify'
    }

    return (
        <div className='container'>
            <div className='row'>
                <div className='border border-5 border-dark p-4 col-md-12 rounded-4 mb-4'>
                    <img className="rounded-circle mx-auto d-block w-25 m-2" src={fotoPerfilPersona}></img>
                    <div>
                        <h4>{nombrePersona} {apellidoPersona}</h4>
                        <p>{formattedDate}</p>
                        <p id='publicationText' style={textPostStyle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi suscipit
                             ultricies neque id facilisis. Pellentesque habitant morbi tristique
                             senectus et netus et malesuada fames ac turpis egestas. Donec augue ligula, 
                             pulvinar non cursus ut, efficitur eu nisi. Integer feugiat mi sed ante 
                             semper, eu imperdiet eros varius. Vivamus fermentum fermentum congue. 
                             Nullam scelerisque rhoncus magna. Phasellus scelerisque sodales massa 
                             vitae gravida. Nunc tristique rutrum nisi vitae bibendum.</p>
                        <div className='text-center'>
                            <button className='btn btn-secondary m-1'>Interactuar</button>
                            <button className='btn btn-secondary m-1'>Comentar</button>
                            <button className='btn btn-secondary m-1'>Enviar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SocialPost;