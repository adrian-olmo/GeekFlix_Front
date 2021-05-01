import "./movieDetail.css"
import { useEffect, useState } from "react"
import { getMovieDetail } from "../../services/fetchDetail"
import { Link, useParams } from "react-router-dom";
import { newOrder } from "../../services/fetchOrder"
import store from "../../store/store";
import PopupOrder from "../popupOrder/PopupOrder.js";

export const MovieDetail = () => {

    let [detail, setDetail] = useState([])
    let [orderSuccess, setOrderSuccess] = useState(false);
    let [orderFail, setOrderFail] = useState(false);
    let { id } = useParams();
    let token = store.getState().token;

    useEffect(() => {
        getDetail();
    }, [])

    const getDetail = async () => {
        try {
            const result = await getMovieDetail(id);
            let json = await result.json();
            setDetail(json[0])
        } catch (error) {
            console.log({ error: error });
        }
    }

    const handleOrder = async (id, token) => {
        try {
            const result = await newOrder(id, token);
            // let json = await result.json();
            // console.log(json);
            if (result.status === 409) {
                setOrderSuccess(false);
                setOrderFail(true);
            }

            else if (result.status === 200) {
                setOrderSuccess(true);
                setOrderFail(null);
            }

        } catch (error) {
            console.log({ error: error })
        }
    }


    return (
        <>
            {orderSuccess && <PopupOrder message={"Pedido realizado correctamente"} status={orderSuccess}></PopupOrder>}
            {orderFail && <PopupOrder message={"El pedido ya existe"} status={orderSuccess}></PopupOrder>}
            {!orderSuccess && !orderFail &&

                <div className="card">

                    <div className="card-image">
                        <div className="poster-detail">
                            <img src={detail.poster_path} />
                        </div>

                    </div>

                    <div className="card-data">
                        <div className="title-content">
                            <p>Titulo: </p>
                        </div>

                        <div className="title-data">
                            <p>{detail.title} </p>
                        </div>

                        <div className="title-content">
                            <p>Año: </p>
                        </div>

                        <div className="title-data">
                            <p>{detail.year}</p>
                        </div>

                        <div className="title-content">
                            <p>Sinopsis:  </p>
                        </div>

                        <div className="title-data">
                            <p>{detail.overview}</p>
                        </div>

                        <div className="title-content">
                            <button onClick={() => handleOrder(id, token)} className="button button-card">Alquilar</button>
                        </div>

                        <div className="title-content">
                            <Link to="/displayMovies">
                                <button className="button button-card">Volver</button>
                            </Link>

                        </div>
                    </div>


                </div>}
        </>

    )
}