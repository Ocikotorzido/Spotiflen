import React from 'react'

const header = () => {
    return (
        <nav class="navbar navbar-expand navbar-light bg-light d-flex justify-content-end p-4">
            <ul class="nav navbar-nav ">
                <li class="nav-item active px-2">
                    <a class="nav-link bg-dark text-white rounded" href="#">Registrarse <span class="visually-hidden">(current)</span></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link bg-success text-white rounded" href="#">Iniciar Session</a>
                </li>
            </ul>
        </nav>
    )
}

export default header
