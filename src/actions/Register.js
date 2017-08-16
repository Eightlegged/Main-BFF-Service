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
export function signUpRequest(email, password, userName) {
    return (dispatch) => {
        // Inform Login API is starting
        dispatch(signUp());

        return axios.post('http://10.250.65.116:8080/user/add', { email, password, userName })
        .then((response) => {
            console.log(response);
            // SUCCEED
            if(response.data.result=="SUCCESS"){
              dispatch(signUpSuccess());
            }else{
              dispatch(signUpFailure());
            }

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
