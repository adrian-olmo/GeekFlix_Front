import { useEffect, useRef, useState } from "react"
import "./Login.css"
import { fetchLogin } from "../../services/fetchLogin.js";

const Login = () => {

    let [email, setEmail] = useState("")
    let [password, setPassword] = useState("")

    let inputLogin = useRef(null);

    useEffect(() => {
        inputLogin.current.focus()
    }, [])

    const getEmail = (event) => {
        setEmail(event.target.value);
    }

    const getPassword = (event) => {
        setPassword(event.target.value)
    }

    const loginHandler = async (e) => {
        e.preventDefault();
        console.log(email, password);
        if (email && password) {
            console.log(email, password);
            const loginUser = await fetchLogin(email, password);
            console.log(loginUser);

        } else {
            alert('Algo salio mal')
        }

    }

    return (

        <>

            <div className='login-form-container'>
                <form className='login-box' onSubmit={loginHandler}>
                    <h2 className='text-h2'>Bienvenido a GeekFlix</h2>

                    <input className='input login-input' type='email' name='email' placeholder='Email' required
                        ref={inputLogin} onInput={e => getEmail(e)}></input>

                    <input className='input login-input' type='password' name='password' placeholder='Password' required
                        onInput={e => getPassword(e)}></input>

                    <button className='button login-button' type='submit'>Login</button>

                </form>
            </div>

        </>

    )

}

export default Login;