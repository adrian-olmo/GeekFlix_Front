import store from "../../store/store";
import "./CardOrder.css"

const CardOrder = (props) => {

    const isAdmin = store.getState().isAdmin;

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
                {props.status == "Alquilada" && <button className="button button-order">Ver ahora</button>}


            </div>

        </div>

    )
}

export default CardOrder;