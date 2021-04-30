import React, { Component } from "react";
import { withRouter } from "react-router";
import './Header.css'

class Header extends React.Component {

    constructor(props) {
        super(props);
    }

    //Descomentar al implementar funcionalidad login
    /* handleLogout(){
        localStorage.removeItem()
    } */

    goToUrl(url) {

        this.props.history.push(url)
    }

    logout() {
        localStorage.removeItem('auth');
        this.props.history.push('/');
    }

    render() {

        return (

            <header className='header'>
                <div className='navbar-header'>
                    <nav className='navbar'>
                        <button onClick={() => this.goToUrl('/signup')} className="button header-button">Registrarse</button>
                        <button onClick={() => this.goToUrl('/login')} className="button header-button">Iniciar sesión</button>
                        <button onClick={() => this.logout()} className="button header-button">Cerrar sesión</button>
                    </nav>
                </div>

            </header>
        )
    }
}

export default withRouter(Header);