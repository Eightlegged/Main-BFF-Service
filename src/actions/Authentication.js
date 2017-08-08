import {
    AUTH_LOGIN,
    AUTH_LOGIN_SUCCESS,
    AUTH_LOGIN_FAILURE,
    AUTH_LOGOUT,
    AUTH_LOGOUT_SUCCESS,
    AUTH_LOGOUT_FAILURE,
    AUTH_LOGGED_IN
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

        return axios.post('http://127.0.0.1:8000/api/authentication/login', { email, password })
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

export function loginCheck(email, isLoggedIn) {
    return {
      type: AUTH_LOGGED_IN,
      email,
      isLoggedIn
    };
}

export function sessionCheck() {
  return (dispatch) => {
    return axios.get('http://127.0.0.1:8000/api/authentication/session')
    .then((response) => {
      console.log(response);
      dispatch(loginCheck(response.data.email, response.data.isLoggedIn));
    }).catch((error) => {
      console.log(error);
    });
  }
}

/* LOGOUT */
export function logoutRequest() {
    return (dispatch) => {
        // Inform Login API is starting
        dispatch(logout());

        return axios.get('http://127.0.0.1:8000/api/authentication/logout')
        .then((response) => {
            console.log(response);
            dispatch(logoutSuccess());
        }).catch((error) => {
            // FAILED
            dispatch(logoutFailure());
        });
    };
}

export function logout() {
    return {
        type: AUTH_LOGOUT
    };
}

export function logoutSuccess() {
    return {
        type: AUTH_LOGOUT_SUCCESS
    };
}

export function logoutFailure() {
    return {
        type: AUTH_LOGOUT_FAILURE
    };
}
