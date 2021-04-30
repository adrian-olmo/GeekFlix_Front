export const getAllOrders = async (token) => {

    try {

        // Hacemos la petición al back
        const object = await fetch('http://localhost:5000/orders/', {
            method: 'GET',
            headers: { "token": JSON.parse(token) },
        });

        return object;

    } catch (error) {
        return error.message;
    }
}