import * as types from '../actions/ActionTypes';
import update from 'react-addons-update';

const initialState = {
    signUp: {
        status: 'END'
    }
};

export default function register(state, action) {
    if(typeof state === "undefined")
        state = initialState;

    switch(action.type) {
        /* SIGNUP */
        case types.SIGNUP:
            return update(state, {
                signUp: {
                    status: { $set: 'WAITING' }
                }
            });

        case types.SIGNUP_SUCCESS:
            return update(state, {
                signUp: {
                    status: { $set: 'SUCCESS' }
                }
            });
        case types.SIGNUP_END:
            return update(state, {
                signUp: {
                    status: { $set: 'END'}
                }
            })
        case types.SIGNUP_FAILURE:
            return update(state, {
                signUp: {
                    status: { $set: 'FAILURE' }
                }
            });
        default:
            return state;
    }
}
