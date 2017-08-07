import {
    AUTH_LOGIN,
    AUTH_LOGIN_SUCCESS,
    AUTH_LOGIN_FAILURE
} from './ActionTypes';
import axios from 'axios';


/*============================================================================
    authentication
==============================================================================*/

/* LOGIN */
export function loginRequest(email, password) {
    return (dispatch) => {
        // Inform Login API is starting
        dispatch(login());

        return axios.post('/api/authentication/', { email, password })
        .then((response) => {
            console.log(response);
            // SUCCEED
            dispatch(loginSuccess(email));
        }).catch((error) => {
            // FAILED
            dispatch(loginFailure());
        });
    };
}

export function login() {
    return {
        type: AUTH_LOGIN
    };
}

export function loginSuccess(email) {
    return {
        type: AUTH_LOGIN_SUCCESS,
        email
    };
}

export function loginFailure() {
    return {
        type: AUTH_LOGIN_FAILURE
    };
}
