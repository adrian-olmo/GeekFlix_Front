import './PopupSignup.css'

const PopupSignup = (props) => {


    return (

        <div className="app-body">

            <div className="popup-signup">
                <div className="popup-text">Se ha registrado correctamente</div>
                <button className="button popup-button">Aceptar</button>
                {/* Hay que agregar un onClick que nos redirija a la página de login */}
            </div>

        </div>
    )
}

export default PopupSignup;