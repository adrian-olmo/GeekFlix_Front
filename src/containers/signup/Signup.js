import React, { useEffect, useRef, useState } from "react";
import fetchSignup from '../../services/fetchSignup.js'
import "./Signup.css";
import Message from '../../components/message/Message.js';
import PopupSignup from "../../components/popupSignup/PopupSignup.js";

export const Signup = () => {

    const [passwordIsValid, setPasswordIsValid] = useState(false);
    const [confirmPasswordIsValid, setConfirmPasswordIsValid] = useState(false);
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState(null);
    const [isValid, setIsValid] = useState(false);

    let confirmedPassword;

    // Using a ref in a functional component:
    // https://es.reactjs.org/docs/refs-and-the-dom.html
    let textInput = useRef(null);

    useEffect(() => {
        textInput.current.focus();
    }, []);

    const getEmailChange = (event) => {
        // email = event.target.value;
        setEmail(event.target.value);
    }

    const getPasswordChange = (event) => {
        if (event.target.value.length < 4) {
            setMessage("La contraseña debe tener al menos 4 caracteres");
            // console.log("La contraseña no es válida");
            setPasswordIsValid(false);
        } else {
            setPassword(event.target.value);
            setMessage("");
            // password = event.target.value;
            setPasswordIsValid(true);
        }
    }

    const getConfirmPasswordChange = (event) => {

        confirmedPassword = event.target.value;

        // password is undefined
        console.log(`${password} -- ${confirmedPassword}`);

        if (confirmedPassword === password) {
            // console.log("Las contraseñas coinciden");
            setConfirmPasswordIsValid(true);
            setMessage("");
        } else {
            setConfirmPasswordIsValid(false);
            setMessage("Las contraseñas no coinciden");
            // console.log("Las contraseñas no coinciden");
        }
        console.log(event.target.value);
    }

    const signupHandler = async (e) => {
        e.preventDefault();
        if (passwordIsValid && confirmPasswordIsValid) {

            console.log(email, password);

            const newUser = await fetchSignup(email, password);

            if (newUser.status === 200) {
                setIsValid(true);
                setMessage("El registro se realizó correctamente");
            }
            else if (newUser.status === 409) {
                setMessage("El email ya está registrado");
            }
            else {
                setMessage("Algo fue mal durante el registro");
            }
            // Lanzar un pop up con resgistro satisfactorio
            // alert("Registro realizado correctamente");
            // console.log("Signup handler is working");
        } else {
            setMessage("El formulario no está cumplimentado correctamente");
        }
    }


    return (

        <div className="app-body">

            {isValid && <PopupSignup></PopupSignup>}

            {!isValid && <div className="signup-form-box">
                <form onSubmit={signupHandler} className="signup-form">
                    <h2 className="text-h2">¡Regístrate y empieza a disfrutar!</h2>

                    <input className="input signup-input" type="email" name="email" placeholder="Enter your email" required
                        ref={textInput} onInput={e => getEmailChange(e)}></input>

                    <input className="input signup-input" type="password" name="password" placeholder="Enter your password" required
                        onInput={e => getPasswordChange(e)}></input>

                    <input className="input signup-input" type="password" name="confirm-password" placeholder="Repeat your password" required
                        onInput={e => getConfirmPasswordChange(e)}></input>

                    <button className="button signup-button" type="submit">Signup</button>

                    <Message msg={message}></Message>

                </form>
            </div>}

        </div>

    )
}