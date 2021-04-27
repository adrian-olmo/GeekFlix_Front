export const getUserOrders = async () => {

    try {

        // Recogemos el token del localStorage
        // const userDataLocal = localStorage.getItem('');

        // Provisional:
        const userDataLocal = {
            token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkcmlAZ21haWwuY29tIiwiaWQiOjIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNjE5NTQyNjE5fQ.WjnsZkTYQDn91LThK07BouuBWm9PfEE528guTKWXQ4Y", password: "1234"
        }

        // Hacemos la petición al back
        const object = await fetch('http://localhost:5000/orders/userOrders', {
            method: 'GET',
            headers: { "token": userDataLocal.token, password: userDataLocal.password },
        });

        return object;

    } catch (error) {
        return error.message;
    }
}