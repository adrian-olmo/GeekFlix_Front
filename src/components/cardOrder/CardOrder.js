import "./CardOrder.css"

const CardOrder = (props) => {

    return (

        <div className="card-order-box">

            <div className="card-order">
                <div>POSTER
                    <img></img>
                </div>
                <div>{props.title}</div>
                <div>{props.start}</div>
                <div>{props.end}</div>
            </div>

        </div>

    )
}

export default CardOrder;