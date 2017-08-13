import {
    AUTH_LOGIN,
    AUTH_LOGIN_SUCCESS,
    AUTH_LOGIN_FAILURE,
    AUTH_LOGIN_END,
    AUTH_LOGOUT,
    AUTH_LOGOUT_SUCCESS,
    AUTH_LOGOUT_FAILURE,
    AUTH_LOGOUT_END,
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

        return axios.post('http://localhost:3000/api/authentication/login', { email, password })
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

export function loginEnd() {
  return {
      type: AUTH_LOGIN_END
  }
}


/* LOGOUT */
export function logoutRequest() {
    return (dispatch) => {
        // Inform Login API is starting
        dispatch(logout());

        return dispatch(logoutSuccess());

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

export function logoutEnd() {
  return {
      type: AUTH_LOGOUT_END
  }
}

export function loginCheck(email, isLoggedIn) {
    return {
      type: AUTH_LOGGED_IN,
      email,
      isLoggedIn
    };
}
