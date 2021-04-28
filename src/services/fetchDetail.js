export const getMovieDetail = async (id) => {

    try {
        console.log(id);

        const urlDetail = 'http://localhost:5000/movies/id'
        const resultDetail = await fetch(urlDetail, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(
                {
                    id: id
                }
            )
        });

        console.log(resultDetail);
        return resultDetail

    } catch (error) {
        return error
    }
}