import { createStore } from 'redux';
import { LOGIN_SUCCESS, LOGIN_FAILED } from './actions/logginActions'

const initialState = {
    token: null
}

const reducer = (currentState = initialState, action) => {

    if (action.type === LOGIN_SUCCESS) {
        return {
            ...currentState,
            token: action.payload
        }
    }

    if (action.type === LOGIN_FAILED) {
        return {
            ...currentState,
            token: null
        }
    }

    return currentState;
}

export default createStore(reducer);