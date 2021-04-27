import { useEffect, useRef, useState } from "react"
import "./Login.css"
import { fetchLogin } from "../../services/fetchLogin.js";
import PopupSignup from "../../components/popupSignup/PopupSignup";
import Message from "../../components/message/Message";

const Login = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [message, setMessage] = useState(null)
    const [validation, setValidation] = useState(false)

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
        if (email && password) {
            const loginUser = await fetchLogin(email, password);
            //Almacena el token
            localStorage.setItem('auth', JSON.stringify(loginUser.token))

            if (loginUser.token) {
                setValidation(true)
                setMessage('Iniciando Sesion');
            } else {
                setMessage('El email o contraseñas son incorrectos')
            }

        } else {
            setMessage('Algo no salio como se esperaba')
        }

    }

    //Pendiente incluir redireccion a Home
    return (
        <div className="app-body">
            {validation && <PopupSignup />}


            {!validation && <div className='login-form-container'>
                <form className='login-box' onSubmit={loginHandler}>
                    <h2 className='text-h2'>Bienvenido a GeekFlix</h2>

                    <input className='input login-input' type='email' name='email' placeholder='Email' required
                        ref={inputLogin} onInput={e => getEmail(e)}></input>

                    <input className='input login-input' type='password' name='password' placeholder='Password' required
                        onInput={e => getPassword(e)}></input>

                    <button className='button login-button' type='submit'>Login</button>

                    <Message msg={message} />

                </form>

            </div>}

        </div>
    )
}

export default Login;