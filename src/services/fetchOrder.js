export const newOrder = async (id, token) => {

    try {

        const object = await fetch('http://localhost:5000/orders/newOrder', {
            method: 'GET',
            headers: { "token": JSON.parse(token), "movieid": id },
        });

        return object;

    } catch (error) {
        return error.message;
    }
}