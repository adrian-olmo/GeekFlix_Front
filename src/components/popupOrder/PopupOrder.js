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
                <div className="popup-text">Pedido realizado correctamente</div>
                <button onClick={() => { goToOrders() }} className="button popup-button">Aceptar</button>

            </div>

        </div>
    )
}

export default PopupOrder;