const fetchImages = async () => {

    try {
        const urlImages = 'http://localhost:5000/movies/poster'
        const resultImages = await fetch(urlImages, {
            method: 'GET',
            headers: { 'Content.Type': 'application/json' }
        })
    } catch (error) {
        return error
    }
}