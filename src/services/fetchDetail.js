export const getMovieDetail = async (id) => {

    try {
        const urlDetail = `http://localhost:5000/movies/${id}`
        const resultDetail = await fetch(urlDetail, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        });

        return resultDetail

    } catch (error) {
        return error
    }
}