import { useState } from "react";
import "./Signup.css";

const Signup = () => {

    // const [status, setStatus] = useState(true);

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
            <div>

                <form onSubmit={signupHandler} className="signup-form">

                    <input className="input" type="email" name="email" placeholder="Enter your email" required
                        onInput={e => getEmailChange(e)}></input>

                    <input className="input" type="password" name="password" placeholder="Enter your password" required
                        onInput={e => getPasswordChange(e)}></input>

                    <input className="input" type="password" name="confirm-password" placeholder="Repeat your password" required
                        onInput={e => getConfirmPasswordChange(e)}></input>

                    <button className="basic-button" type="submit">Signup</button>

                </form>
            </div>
        </>

    )
}

export default Signup;