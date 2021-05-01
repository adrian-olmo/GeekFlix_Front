import React, { useEffect, useState } from 'react';
import CardMovie from '../../components/cardMovie/CardMovie';
import getAllMovies from '../../services/fetchMovies';
import store from '../../store/store';
import './DisplayMovies.css';
import { useHistory } from "react-router-dom";


const DisplayMovies = () => {

    const [movies, setMovies] = useState(null);
    const isAdmin = store.getState().isAdmin;
    const token = store.getState().token;
    let history = useHistory();

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

    const goToOrders = () => {
        history.push('/user')
    }

    const goToUserOrders = () => {
        history.push('/user')
    }

    return (

        <div className="app-body">

            <div className="display-movies">
                {isAdmin && <button className="button button-users-orders" onClick={() => goToOrders()}>Ver pedidos</button>}
                {token && <button className="button button-user-order" onClick={() => goToUserOrders()}>Mis pedidos</button>}
                <h2><strong>Películas disponibles</strong></h2>
                {movies && <div className="display-movies-grid">

                    {movies.map(movie => <CardMovie key={movies.indexOf(movie)}
                        id={movie.id}
                        title={movie.title}
                        posterPath={movie.poster_path}
                        genre={movie.Genre.name}></CardMovie>)}
                </div>}

            </div>
        </div>
    )
}

export default DisplayMovies;