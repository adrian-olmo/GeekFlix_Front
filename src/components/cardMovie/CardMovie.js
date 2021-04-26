import "./CardMovie.css";

const CardMovie = (props) => {


    return (

        <div className="card-movie-box">
            <div className="card-movie">

                <div className="poster">
                    <img src={props.posterPath}></img>
                    {/* <img src="https://image.tmdb.org/t/p/w500/rkuvJnamPl3xW9wKJsIS6qkmOCW.jpg"></img> */}
                </div>
                <p>{props.title}</p>
                <p>{props.genre}</p>

                <button className="button button-card">Ver más</button>

            </div>
        </div>

    )
}

export default CardMovie;