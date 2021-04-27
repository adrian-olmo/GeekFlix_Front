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
            // console.log(rows);

            // const rows = json.length;
            // if (rows) {
            //     setOrders(rows)
            // }

        } catch (error) {
            console.log(error);
        }
    }

    return (

        <div className="app-body">
            <div className="display-orders">
                <h2 className="titulo"><strong>Tus pedidos</strong></h2>
                {orders.map(order => <CardOrder key={orders.indexOf(order)} title={order.title} start={order.orderStart} end={order.orderEnd}></CardOrder>)}
            </div>
        </div>

    )
}

export default CardUser;