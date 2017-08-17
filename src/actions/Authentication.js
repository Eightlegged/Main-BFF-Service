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
        // Inform Login http://smabackend.mybluemix.net is starting
        dispatch(login());
        let P_url = 'http://10.250.65.116:8080/user/login';
        let url = 'api/user/login';
        return axios.post(url, { email, password })
        .then((response) => {
            console.log(response);
            // SUCCEED
            if(response.data.result=="SUCCESS"){
              let data = response.data;
              dispatch(loginSuccess(data.USER_ID, email));
            }else{
              dispatch(loginFailure());
            }
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

export function loginSuccess(user_id, email) {
    return {
        type: AUTH_LOGIN_SUCCESS,
        user_id,
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
        // Inform Login http://smabackend.mybluemix.net is starting
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

export function loginCheck(email, isLoggedIn, user_id) {
    return {
      type: AUTH_LOGGED_IN,
      email,
      isLoggedIn,
      user_id
    };
}
