export const LOGIN_SUCCESS = "LOGIN_SUCCESS"
export const LOGIN_FAILED = "LOGIN_FAILED"

export const loginSuccessAction = (token) => {
    return {
        type: LOGIN_SUCCESS,
        payload: token
    }
}


export const loginFailedAction = () => {
    return {
        type: LOGIN_FAILED
    }
}