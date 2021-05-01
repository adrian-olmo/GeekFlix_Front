import './PopupOrder.css'
import { useHistory } from 'react-router-dom';

const PopupOrder = () => {

    let history = useHistory();

    const goToOrders = () => {

        history.push('/user');
    }

    return (

        <div className="app-body">

            <div className="popup-order">
                <div className="popup-text">Pedido realizado correctamente</div>
                <button onClick={() => { goToOrders() }} className="button popup-button">Aceptar</button>
                {/* Hay que agregar un onClick que nos redirija a la página de login */}
                {/* onClick={} */}
            </div>

        </div>
    )
}

export default PopupOrder;