import React, { useEffect, useState } from "react";
import { getUserOrders } from "../../services/fetchDashboard";
import CardOrder from "../cardOrder/CardOrder";
import './CardUser.css';
import store from '../../store/store'

const CardUser = () => {

    const [orders, setOrders] = useState([]);

    useEffect(() => {
        getOrders();
    }, [])

    const getOrders = async () => {
        try {
            const token = store.getState().token
            if (token) {
                const res = await getUserOrders(token);
                const json = await res.json();
                // const { rows } = json;
                console.log(json);
                setOrders(json);

            } else {
                // No está logado
                console.log('User is not logged. TODO: manage')
            }

        } catch (error) {
            console.log(error);
        }
    }

    return (

        <div className="app-body">

            <div className="display-orders">
                <h2 className="titulo"><strong>Tus pedidos</strong></h2>
                <div className="field-names">
                    <div className="no-color-text">PosterPath</div>
                    <div>Titulo</div>
                    <div>Inicio alquiler</div>
                    <div>Final alquiler</div>
                    <div>Estado</div>
                </div>
                {orders.map(order => <CardOrder key={orders.indexOf(order)} title={order.title} start={order.orderStart.substring(0, 10)} end={order.orderEnd.substring(0, 10)} poster={order.poster} status={order.estado}></CardOrder>)}
            </div>
        </div>

    )
}

export default CardUser;