import "./movieDetail.css"
import Kong from "../../img/carousel/kong.jpg"
import { useEffect, useState } from "react"
import { getMovieDetail } from "../../services/fetchDetail"

export const MovieDetail = (props) => {

    let [detail, setDetail] = useState([])


    useEffect(() => {
        getDetail();
    }, [])

    const getDetail = async () => {
        try {

            const result = await getMovieDetail(4);
            let json = await result.json();
            setDetail(json[0])
        } catch (error) {
            console.log(error);
        }
    }


    return (
        <>
            <div className="card">

                <div className="card-image">
                    <div className="poster">
                        <img src={Kong} />
                    </div>

                </div>

                <div className="card-data">
                    <div className="title-content">
                        <p>Titulo: </p>
                    </div>

                    <div className="title-data">
                        <p>Kong vs Godzilla </p>
                    </div>

                    <div className="title-content">
                        <p>Año: </p>
                    </div>

                    <div className="title-data">
                        <p>2021</p>
                    </div>

                    <div className="title-content">
                        <p>Sinopsis:  </p>
                    </div>

                    <div className="title-data">
                        <p>Godzilla y Kong, dos de las fuerzas más poderosas de un planeta habitado por todo tipo de aterradoras criaturas, se enfrentan en un espectacular combate que sacude los cimientos de la humanidad. Monarch (Kyle Chandler) se embarca en una misión de alto riesgo y pone rumbo hacia territorios inexplorados para descubrir los orígenes de estos dos titanes, en un último esfuerzo por tratar de salvar a dos bestias que parecen tener las horas contadas sobre la faz de la Tierra.</p>
                    </div>

                    <div className="title-content">
                        <button className="button button-card">Alquilar</button>
                    </div>

                    <div className="title-content">

                        <button className="button button-card">Volver</button>
                    </div>
                </div>


            </div>
        </>



    )
}