import React, { useEffect, useState } from 'react';
import CardMovie from '../../components/cardMovie/CardMovie';
import getAllMovies from '../../services/fetchMovies';
import './DisplayMovies.css';

const DisplayMovies = () => {

    const [movies, setMovies] = useState(null);
    // const [results, setResults] = useState(null);

    useEffect(() => {
        getMovies();
    }, [])

    const getMovies = async () => {
        try {
            const res = await getAllMovies();
            const json = await res.json();
            const { rows } = json;

            if (rows) {
                setMovies(rows)
            }

        } catch (error) {
            console.log(error);
        }
    }

    return (

        <div className="app-body">
            <div className="display-movies">
                <h2><strong>Películas disponibles</strong></h2>
                {movies && <div className="display-movies-grid">

                    {movies.map(movie => <CardMovie key={movies.indexOf(movie)}
                        id={movie.id}
                        title={movie.title}
                        year={movie.year}
                        posterPath={movie.poster_path}
                        genre={movie.Genre.name}></CardMovie>)}
                </div>}

            </div>
        </div>
    )
}

export default DisplayMovies;