import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import linkedinLogo from '../Pages/img/linkedin-app-white-icon.svg';

function Navbar() {

    // Estilo de la Navbar
    const navbarStyle = {
        textAlign: 'center',
        fontFamily: 'Arvo',
    }

    // Estilo de los items de la Navbar
    const navbarItemStyle = {
        marginLeft: '2rem',
        marginRight: '3rem',
    }

    return (
    <nav class="navbar navbar-expand-lg bg-primary fixed-top" style={navbarStyle}>
        <div class="container-fluid">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                {/* Logo del sitio */}
                <div id="divlogo" class="mb-4 mb-md-1">
                    <img id="linkedlogo" src={linkedinLogo} alt="LinkedIn Logo" style={{ width: '44px'}}/>
                </div>
                {/* Items de la Navbar */}
                <ul class="navbar-nav mx-auto">
                    {/* Inicio */}
                    <li class="nav-item mb-4 mb-lg-0" style={navbarItemStyle}>
                        <a className="nav-link text-light fw-semibold p-0" aria-current="page" href="/feed">
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-home" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#FFFFFF" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <path d="M5 12l-2 0l9 -9l9 9l-2 0" />
                            <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />
                            <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" />
                        </svg><br></br>Inicio</a>
                    </li>
                    {/* Empleos */}
                    <li class="nav-item mb-4 mb-lg-0" style={navbarItemStyle}>
                        <a class="nav-link text-light fw-semibold p-0" href="/jobs"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-briefcase-2" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#FFFFFF" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <path d="M3 9a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-9z" />
                            <path d="M8 7v-2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v2" />
                        </svg><br></br>Empleos</a>
                    </li>
                    {/* Notificaciones */}
                    <li class="nav-item mb-4 mb-lg-0" style={navbarItemStyle}>
                        <a class="nav-link text-light fw-semibold p-0" href="/notifications"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-bell" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#FFFFFF" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <path d="M10 5a2 2 0 1 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6" />
                            <path d="M9 17v1a3 3 0 0 0 6 0v-1" />
                        </svg><br></br>Notificaciones</a>
                    </li>
                    {/* Mi Perfil */}
                    <li class="nav-item dropdown" style={navbarItemStyle}>
                        <a class="nav-link dropdown-toggle text-light fw-semibold p-0" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-user-circle" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#FFFFFF" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                            <path d="M12 10m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                            <path d="M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855" />
                        </svg><br></br>Mi Perfil</a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="/profile">Ver perfil</a></li>
                            <li><hr class="dropdown-divider"></hr></li>
                            <li><a class="dropdown-item" href="/logout">Cerrar Sesión</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    );
}

export default Navbar;