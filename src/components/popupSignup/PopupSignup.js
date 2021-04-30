import './PopupSignup.css'
import { useHistory } from 'react-router-dom';

const PopupSignup = () => {

    let history = useHistory();

    const goToLoginHandler = () => {
        // redireccionar a login
        console.log("Redireccionando a login");
        history.push('/login');
    }

    return (

        <div className="app-body">

            <div className="popup-signup">
                <div className="popup-text">Se ha registrado correctamente</div>
                <button onClick={() => { goToLoginHandler() }} className="button popup-button">Aceptar</button>
                {/* Hay que agregar un onClick que nos redirija a la página de login */}
                {/* onClick={} */}
            </div>

        </div>
    )
}

export default PopupSignup;