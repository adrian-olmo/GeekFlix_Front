const getAllMovies = async () => {

    try {
        const object = await fetch('http://localhost:5000/movies', {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        });

        return object;

    } catch (error) {
        return error;
    }
}

export default getAllMovies;