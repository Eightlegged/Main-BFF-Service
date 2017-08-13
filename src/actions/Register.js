import {
  SIGNUP,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
  SIGNUP_END
} from './ActionTypes';
import axios from 'axios';

/*============================================================================
    register
==============================================================================*/

/* SIGNUP */
export function signUpRequest(email, password, username) {
    return (dispatch) => {
        // Inform Login API is starting
        dispatch(signUp());

        return axios.post('http://localhost:3000/api/register/signUp', { email, password, username })
        .then((response) => {
            console.log(response);
            // SUCCEED
            dispatch(signUpSuccess());
        }).catch((error) => {
            // FAILED
            dispatch(signUpFailure());
        });
    };
}

export function signUp() {
    return {
        type: SIGNUP
    };
}

export function signUpSuccess() {
    return {
        type: SIGNUP_SUCCESS
    };
}

export function signUpFailure() {
    return {
        type: SIGNUP_FAILURE
    };
}

export function signUpEnd() {
  return {
      type: SIGNUP_END
  }
}
