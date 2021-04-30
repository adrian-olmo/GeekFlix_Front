export const getUserOrders = async () => {

    try {

        // Recogemos el token del localStorage
        // const userDataLocal = localStorage.getItem('');

        // Provisional con token hardcodeada para comprobar que funciona.
        // const userDataLocal = {
        //     // token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkcmlAZ21haWwuY29tIiwiaWQiOjIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNjE5NTQyNjE5fQ.WjnsZkTYQDn91LThK07BouuBWm9PfEE528guTKWXQ4Y",
        //     token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkcmlAZ21haWwuY29tIiwiaWQiOjIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNjE5NzcxOTU3fQ.wYaCA1hSSRNmDyFOtwqDvOKCgK6oR65u4BzdXNXMaJU"
        // }

        const userDataLocal = localStorage.getItem('auth');
        console.log(userDataLocal);
        const userData = JSON.parse(userDataLocal);

        // Hacemos la petición al back
        const object = await fetch('http://localhost:5000/orders/userOrders', {
            method: 'GET',
            headers: { "token": userData },
        });

        return object;

    } catch (error) {
        return error.message;
    }
}