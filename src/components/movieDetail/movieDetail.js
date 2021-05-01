import "./movieDetail.css"
import { useEffect, useState } from "react"
import { getMovieDetail } from "../../services/fetchDetail"
import { Link, useParams } from "react-router-dom";
import { newOrder } from "../../services/fetchOrder"
import store from "../../store/store";
import PopupOrder from "../../components/popupOrder/PopupOrder.js";

export const MovieDetail = (props) => {

    let [detail, setDetail] = useState([])
    let [orderSuccess, setOrderSuccess] = useState(false);
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
            let json = await result.json();
            setOrderSuccess(true);
            console.log(json);
        } catch (error) {
            console.log({ error: error })
        }
    }


    return (
        <>
            {orderSuccess && <PopupOrder></PopupOrder>}
            {!orderSuccess &&

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
                            <Link to="/movies">
                                <button className="button button-card">Volver</button>
                            </Link>

                        </div>
                    </div>


                </div>}
        </>

    )
}