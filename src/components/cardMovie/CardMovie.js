import { useState } from "react";
import { MovieDetail } from "../movieDetail/MovieDetail";
import "./CardMovie.css";

const CardMovie = (props) => {

    let [pelicula, setPelicula] = useState(null)

    const handlerID = async () => {
        setPelicula(props.id)
    }

    return (

        <div className="card-movie-box">
            <div className="card-movie">

                <div className="poster">
                    <img src={props.posterPath}></img>
                    {/* <img src="https://image.tmdb.org/t/p/w500/rkuvJnamPl3xW9wKJsIS6qkmOCW.jpg"></img> */}
                </div>
                <p>{props.title}</p>
                <p>{props.genre}</p>

                <button onClick={() => handlerID()} className="button button-card">Ver más</button>

                {/* Lo pinta encima */}
                {pelicula && <MovieDetail id={pelicula} />}

            </div>
        </div>

    )
}

export default CardMovie;