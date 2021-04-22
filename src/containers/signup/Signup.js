import React, { useEffect, useRef, useState } from "react";
import "./Signup.css";

const Signup = () => {

    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [confirmPassword, setConfirmPassword] = useState(null);

    let textInput = useRef(null);

    useEffect(() => {
        textInput.current.focus();
    }, []);

    const signupHandler = () => {
        console.log("Signup handler is working");
    }

    const getEmailChange = (event) => {
        console.log(event.target.value);
    }

    const getPasswordChange = (event) => {
        console.log(event.target.value);
    }

    const getConfirmPasswordChange = (event) => {
        console.log(event.target.value);
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