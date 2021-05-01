import "./CardMovie.css";
import { useState } from "react";
import { Link, useHistory } from "react-router-dom";



const CardMovie = (props) => {

    let [pelicula, setPelicula] = useState(null)
    let history = useHistory();

    const handlerID = async () => {
        setPelicula(props.id)
        history.push(`/movie/${props.id}`)

    }

    return (

        <div className="card-movie-box">
            <div className="card-movie">

                <div className="poster-card">
                    <img src={props.posterPath}></img>
                </div>
                <p>{props.title}</p>
                <p>{props.genre}</p>

                <button onClick={() => handlerID()} className="button button-card">Ver más</button>



            </div>
        </div>

    )
}

export default CardMovie;