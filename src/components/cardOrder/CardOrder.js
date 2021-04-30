import "./CardOrder.css"

const CardOrder = (props) => {

    return (

        <div className="card-order-box">

            <div className="card-order">
                <div className="poster">
                    <img src={props.poster}></img>
                </div>
                <div>{props.title}</div>
                <div>{props.start}</div>
                <div>{props.end}</div>
                {props.status == "Caducada" && <div style={{ color: "red" }}>{props.status}</div>}
                {props.status == "Alquilada" && <div style={{ color: "green" }}>{props.status} <button>Ver ahora</button></div>}

            </div>

        </div>

    )
}

export default CardOrder;