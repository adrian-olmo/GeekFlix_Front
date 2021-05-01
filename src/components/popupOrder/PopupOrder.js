import './PopupOrder.css'
import { useHistory } from 'react-router-dom';

const PopupOrder = (props) => {

    let history = useHistory();

    const goToOrders = (redirection) => {
        if (redirection) {
            history.push('/user');
        } else {
            history.push('/displayMovies');
        }
    }

    return (

        <div className="app-body">

            <div className="popup-order">
                <div className="popup-text">{props.message}</div>
                <button onClick={() => { goToOrders(props.status) }} className="button popup-button">Aceptar</button>
                {/* Hay que agregar un onClick que nos redirija a la página de login */}
                {/* onClick={} */}
            </div>

        </div>
    )
}

export default PopupOrder;