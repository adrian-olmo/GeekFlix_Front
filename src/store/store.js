import { createStore } from 'redux';
import { SET_AS_ADMIN, SET_AS_USER } from './actions/adminActions';
import { LOGIN_SUCCESS, LOGIN_FAILED } from './actions/logginActions'

const initialState = {
    token: null,
    isAdmin: false
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

    if (action.type === SET_AS_ADMIN) {
        return {
            ...currentState,
            isAdmin: true
        }
    }

    if (action.type === SET_AS_USER) {
        return {
            ...currentState,
            isAdmin: false
        }
    }

    return currentState;
}

export default createStore(reducer);