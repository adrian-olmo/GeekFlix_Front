import React, { Component } from "react";
import './Header.css'

export class Header extends React.Component {

    constructor() {
        super();
    }

    //Descomentar al implementar funcionalidad login
    /* handleLogout(){
        localStorage.removeItem()
    } */

    render() {

        return (
            // <header className='header'>
            //     <div className='navbar-header'>
            //         <nav className='navbar'>
            //             <button className="button header-button">Signup</button>
            //             <button className="button header-button">Login</button>
            //         </nav>
            //     </div>
            // </header>

            <header className='header'>
                <div className='navbar-header'>
                    <nav className='navbar'>
                        <button className="button header-button">Registrarse</button>
                        <button className="button header-button">Iniciar sesión</button>
                        <button className="button header-button">Cerrar sesión</button>
                    </nav>
                </div>

            </header>
        )

    }
}