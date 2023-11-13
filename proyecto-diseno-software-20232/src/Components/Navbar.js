import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function Navbar() {

    const navbarStyle = {
        textAlign: 'center',
        fontFamily: 'Arvo'
    }

    const navbarItemStyle = {
        marginLeft: '1rem',
        marginRight: '1rem'
    }

    return (
    <nav class="navbar navbar-expand-lg bg-primary" style={navbarStyle}>
    <div class="container-fluid">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item" style={navbarItemStyle}>
            <a class="nav-link text-light fw-semibold" aria-current="page" href="/feed">
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-home" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#FFFFFF" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M5 12l-2 0l9 -9l9 9l-2 0" />
                <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />
                <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" />
            </svg>  Inicio</a>
            </li>
            <li class="nav-item" style={navbarItemStyle}>
            <a class="nav-link text-light fw-semibold" href="/jobs"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-briefcase-2" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#FFFFFF" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M3 9a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-9z" />
                <path d="M8 7v-2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v2" />
            </svg>  Empleos</a>
            </li>
            <li class="nav-item" style={navbarItemStyle}>
            <a class="nav-link text-light fw-semibold" href="/notifications"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-bell" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#FFFFFF" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M10 5a2 2 0 1 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6" />
                <path d="M9 17v1a3 3 0 0 0 6 0v-1" />
            </svg>  Notificaciones</a>
            </li>
            <li class="nav-item dropdown" style={navbarItemStyle}>
            <a class="nav-link dropdown-toggle text-light fw-semibold" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-user-circle" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#FFFFFF" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                <path d="M12 10m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                <path d="M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855" />
            </svg>  Mi Perfil
            </a>
            <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="/profile">Ver perfil</a></li>
                <li><a class="dropdown-item" href="/configuration">Configuración</a></li>
                <li><hr class="dropdown-divider"></hr></li>
                <li><a class="dropdown-item" href="/logout">Cerrar Sesión</a></li>
            </ul>
            </li>
        </ul>
        <form class="d-flex" role="search" style={navbarItemStyle}>
            <input class="form-control me-2" type="search" placeholder="Buscar" aria-label="Search"></input>
            <button class="btn btn-outline-light btn-lg" type="submit">Buscar</button>
        </form>
        </div>
    </div>
    </nav>
    );
}

export default Navbar;