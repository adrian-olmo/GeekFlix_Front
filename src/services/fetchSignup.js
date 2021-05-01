const fetchSignup = async (email, password) => {

    try {
        console.log(`Date received from signup form: email: ${email} | password: ${password}`);
        console.log("Fetching...");

        const urlSignup = 'http://localhost:5000/signup';

        const object = await fetch(urlSignup, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 'email': email, 'password': password })
        });

        return object;

    } catch (error) {
        return error;
    }
}

export default fetchSignup;