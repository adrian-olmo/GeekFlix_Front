import store from "../../store/store";
import "./CardOrder.css"
import React, { useState, useEffect } from "react";
import { cancelOrder } from "../../services/fetchAdminDashboard";

const CardOrder = (props) => {

    const adminToken = store.getState().token;
    const isAdmin = store.getState().isAdmin;

    const cancelOrderHandler = async () => {
        try {
            console.log("cancenladno")
            await cancelOrder(props.id, adminToken);
        } catch (error) {
            console.log(error);
        }
    }

    return (

        <div className="card-order-box">

            <div className="card-order">
                {isAdmin && <div>{props.id}</div>}
                {isAdmin && <div>{props.email}</div>}
                <div className="poster">
                    <img src={props.poster}></img>
                </div>
                <div>{props.title}</div>
                <div>{props.start}</div>
                <div>{props.end}</div>
                {props.status == "Caducada" && <div style={{ color: "red" }}>{props.status}</div>}
                {props.status == "Alquilada" && <div style={{ color: "green" }}>{props.status} </div>}
                {props.status == "Alquilada" && !isAdmin && <button className="button button-order">Ver ahora</button>}
                {props.status == "Alquilada" && isAdmin && <button onClick={() => cancelOrderHandler(props.id)} className="button button-order">Cancelar</button>}


            </div>

        </div>

    )
}

export default CardOrder;