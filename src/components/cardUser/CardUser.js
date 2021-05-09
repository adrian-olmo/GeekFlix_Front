import React, { useEffect, useState } from "react";
import { getUserOrders } from "../../services/fetchDashboard";
import CardOrder from "../cardOrder/CardOrder";
import './CardUser.css';
import store from '../../store/store'
import { getAllOrders } from "../../services/fetchAdminDashboard";
import { useHistory } from "react-router-dom";

export const CardUser = () => {

    const [orders, setOrders] = useState([]);
    let history = useHistory();

    useEffect(() => {
        getOrders();
    }, [])

    const getOrders = async () => {
        try {
            const token = store.getState().token;
            const isAdmin = store.getState().isAdmin;

            if (token && isAdmin) {
                const res = await getAllOrders(token);
                const json = await res.json();
                setOrders(json);
            }
            else if (token) {
                const res = await getUserOrders(token);
                const json = await res.json();
                setOrders(json);

            } else {
                console.log('User is not logged. TODO: manage')
            }

        } catch (error) {
            console.log(error);
        }
    }

    const goToMovies = () => {
        history.push('/displayMovies');
    }

    return (

        <div className="app-body">

            <div className="display-orders">
                <div className="orders-header">
                    <button className="button button-catalogue" onClick={() => goToMovies()}>Ver catálogo</button>
                    <h2 className="titulo"><strong className="titulos">Tus pedidos</strong></h2>
                </div>

                {orders.map(order => <CardOrder key={orders.indexOf(order)} id={order.id} email={order.email} title={order.title} start={order.orderStart.substring(0, 10)} end={order.orderEnd.substring(0, 10)} poster={order.poster} status={order.estado}></CardOrder>)}
            </div>
        </div>

    )
}