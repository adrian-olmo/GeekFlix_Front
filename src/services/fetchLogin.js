export const fetchLogin = async (email, password) => {



    try {
        console.log(`Datos recibidos: ${email} y ${password}`);
        console.log('Consultando datos');

        const urlLogin = 'http://localhost:5000/login';

        const result = await fetch(urlLogin, {
            method: 'GET',
            headers: {
                email: email,
                password: password
            }
        });

        return result;

    } catch (error) {

    }

}