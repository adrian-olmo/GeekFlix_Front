export const fetchLogin = async (email, password) => {
    try {
        const urlLogin = 'http://localhost:5000/login';
        let result = await fetch(urlLogin, {

            method: 'GET',
            headers: {
                email: email,
                password: password
            }
        });

        let res = await result.json()
        return res;

    } catch (error) {
        console.log(error.message);
    }

}