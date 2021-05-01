export const getAllOrders = async (token) => {

    try {
        const object = await fetch('http://localhost:5000/orders/', {
            method: 'GET',
            headers: { "token": JSON.parse(token) },
        });

        return object;

    } catch (error) {
        return error.message;
    }
}

export const cancelOrder = async (id, token) => {
    try {
        const object = await fetch(`http://localhost:5000/orders/order/${id}`, {
            method: 'GET',
            headers: { "token": JSON.parse(token) },
        });
        return object;

    } catch (error) {
        return error.message;
    }
}