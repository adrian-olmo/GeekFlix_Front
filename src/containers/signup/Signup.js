import React, { useEffect, useRef, useState } from "react";
import "./Signup.css";

const Signup = () => {

    const [passwordIsValid, setPasswordIsValid] = useState(false);
    const [confirmPasswordIsValid, setConfirmPasswordIsValid] = useState(false);
    const [password, setPassword] = useState("");

    let email;
    // let password;
    let confirmedPassword;

    // Using a ref in a functional component:
    // https://es.reactjs.org/docs/refs-and-the-dom.html
    let textInput = useRef(null);

    useEffect(() => {
        textInput.current.focus();
    }, []);

    const getEmailChange = (event) => {
        email = event.target.value;
    }

    const getPasswordChange = (event) => {
        if (event.target.value.length < 4) {
            console.log("La contraseña no es válida");
            setPasswordIsValid(false);
        } else {
            setPassword(event.target.value);
            // password = event.target.value;
            setPasswordIsValid(true);
        }
    }

    const getConfirmPasswordChange = (event) => {

        confirmedPassword = event.target.value;

        // password is undefined
        console.log(`${password} -- ${confirmedPassword}`);

        if (confirmedPassword === password) {
            console.log("Las contraseñas coinciden");
            setConfirmPasswordIsValid(true);
        } else {
            setConfirmPasswordIsValid(false);
            console.log("Las contraseñas no coinciden");
        }
        console.log(event.target.value);
    }

    const signupHandler = async (e) => {
        e.preventDefault();
        if (passwordIsValid && confirmPasswordIsValid) {
            alert("Registro realizado correctamente");
            // console.log("Signup handler is working");
        } else {
            alert("Algo falla: descibir errores");
        }



        // Validar las password (y el email si es necesario)

        // si OK, hacer el fetch al endpoint de registro.

        // const res = await fetchSignup(email, password);
        // Manejar los mensajes de error
    }

    return (

        <>
            <div className="signup-form-box">

                <form onSubmit={signupHandler} className="signup-form">
                    <h2 className="text-h2">¡Regístrate y empieza a disfrutar!</h2>

                    <input className="input signup-input" type="email" name="email" placeholder="Enter your email" required
                        ref={textInput} onInput={e => getEmailChange(e)}></input>

                    <input className="input signup-input" type="password" name="password" placeholder="Enter your password" required
                        onInput={e => getPasswordChange(e)}></input>

                    <input className="input signup-input" type="password" name="confirm-password" placeholder="Repeat your password" required
                        onInput={e => getConfirmPasswordChange(e)}></input>

                    <button className="button signup-button" type="submit">Signup</button>

                </form>
            </div>
        </>

    )
}

export default Signup;