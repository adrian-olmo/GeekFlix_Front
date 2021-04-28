import React, { useEffect, useState } from "react";
import { getUserOrders } from "../../services/fetchDashboard";
import CardOrder from "../cardOrder/CardOrder";
import './CardUser.css';

const CardUser = () => {

    const [orders, setOrders] = useState([]);

    useEffect(() => {
        getOrders();
    }, [])

    const getOrders = async () => {
        try {

            const res = await getUserOrders();
            const json = await res.json();
            // const { rows } = json;
            console.log(json);
            setOrders(json);

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
                </div>
                {orders.map(order => <CardOrder key={orders.indexOf(order)} title={order.title} start={order.orderStart.substring(0, 10)} end={order.orderEnd.substring(0, 10)} poster={order.poster}></CardOrder>)}
            </div>
        </div>

    )
}

export default CardUser;