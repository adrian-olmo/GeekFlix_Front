import './PopupSignup.css'

const PopupSignup = (props) => {

    const goToLoginHandler = () => {
        // redireccionar a login
        console.log("Redireccionando a login");
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