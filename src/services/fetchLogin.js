const fetchLogin = async (email, password) => {

    const urlLogin = 'localhost:5000/login';

    try {
        console.log(`Datos recibidos: ${email} y ${password}`);
        console.log('Consultando datos');

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