import "./MovieDetail.css"
import Kong from "../../img/carousel/kong.jpg"
import { useEffect, useState } from "react"
import { getMovieDetail } from "../../services/fetchDetail"
import { Link, useParams } from "react-router-dom";

export const MovieDetail = (props) => {

    let [detail, setDetail] = useState([])
    let { id } = useParams();

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


    return (
        <>
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
                        <button className="button button-card">Alquilar</button>
                    </div>

                    <div className="title-content">
                        <Link to="/movies">
                            <button className="button button-card">Volver</button>
                        </Link>

                    </div>
                </div>


            </div>
        </>



    )
}