import "./CardMovie.css";

const CardMovie = () => {


    return (

        <div className="app-body">
            <div className="card-movie-box">
                <div className="card-movie">

                    <div className="poster">
                        <img src="https://image.tmdb.org/t/p/w500/rkuvJnamPl3xW9wKJsIS6qkmOCW.jpg"></img>
                    </div>
                    <h3>Titulo de la película</h3>
                    <button className="button button-card">Ver más</button>

                </div>

            </div>

        </div>

    )
}

export default CardMovie;