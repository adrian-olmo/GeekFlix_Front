import { useEffect, useRef, useState } from "react"
import "./Login.css"
import { fetchLogin } from "../../services/fetchLogin.js";
import Message from "../../components/message/Message";
import { useHistory } from "react-router-dom"
import { loginSuccessAction, loginFailedAction } from '../../store/actions/logginActions';
import store from '../../store/store'
import { setAsAdminAction, setAsUserAction } from "../../store/actions/adminActions";

export const Login = () => {

    let history = useHistory();

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

            try {

                const loginUser = await fetchLogin(email, password);

                console.log(loginUser);
                //Almacena el token               

                if (loginUser.token) {
                    setValidation(true)
                    setMessage('Iniciando Sesion');
                    store.dispatch(loginSuccessAction(JSON.stringify(loginUser.token)))

                    // Redireccionando a nuestros pedidos
                    if (loginUser.role === "admin") {
                        store.dispatch(setAsAdminAction());
                    } else {
                        store.dispatch(setAsUserAction());
                    }
                    history.push('/user');

                } else {
                    setMessage('El email o contraseñas son incorrectos')
                    store.dispatch(loginFailedAction())
                }

            } catch (e) {
                setMessage('Algo no salio como se esperaba')
                store.dispatch(loginFailedAction())
            }

        } else {
            setMessage('Algo no salio como se esperaba')
        }

    }

    return (
        <div className="app-body">
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