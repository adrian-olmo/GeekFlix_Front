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
            <header className='header'>
                <div className='navbar-header'>
                    <nav className='navbar'>
                        <div className='text'>
                            <span>Login</span>
                        </div>

                        <div className='text'>
                            <span>Register</span>
                        </div>
                    </nav>
                </div>
            </header>
        )

    }


}