import { useEffect, useRef, useState } from "react"
import "./Login.css"

const Login = () => {

    const [email, setEmail] = useState(false)
    const [password, setPassword] = useState("")

    let loginEmail
    let loginPassword
    let inputLogin = useRef(null);

    useEffect(() => {
        inputLogin.current.focus()
    }, [])

    const getEmail = (event) => {
        loginEmail = event.target.value;
    }

    const getPassword = (event) => {
        loginPassword = event.target.value
    }

    const loginHandler = async (e) => {
        e.preventDefault();
        if (getEmail === "" || getPassword === "") {
            alert('Campos vacios')
        } else {
            alert('Iniciando sesion')
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

                    <button className='button login-button' type='submit'>Inicar Sesion</button>

                </form>
            </div>

        </>

    )

}

export default Login;