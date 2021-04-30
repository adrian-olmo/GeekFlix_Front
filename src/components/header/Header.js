import React, { Component } from "react";
import { withRouter } from "react-router";
import { loginFailedAction } from "../../store/actions/logginActions";
import store from "../../store/store";
import './Header.css'

class Header extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isLogged: false
        }
    }

    componentDidMount() {

        store.subscribe(() => {
            if (store.getState().token) {
                this.setState({ isLogged: true });
            } else {
                this.setState({ isLogged: false });
            }
        })
    }

    goToUrl(url) {

        this.props.history.push(url)
    }

    handleLogout() {

        store.dispatch(loginFailedAction());
        this.props.history.push('/');
    }

    render() {

        return (

            <header className='header' >
                <div className='navbar-header'>
                    <nav className='navbar'>
                        {!this.state.isLogged && <button onClick={() => this.goToUrl('/signup')} className="button header-button">Registrarse</button>}
                        {!this.state.isLogged && <button onClick={() => this.goToUrl('/login')} className="button header-button">Iniciar sesión</button>}
                        {this.state.isLogged && <button onClick={() => this.handleLogout()} className="button header-button">Cerrar sesión</button>}
                    </nav>
                </div>

            </header>
        )
    }
}

export default withRouter(Header);