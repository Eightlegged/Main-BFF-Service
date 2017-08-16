import * as types from '../actions/ActionTypes';
import update from 'react-addons-update';

const initialState = {
    login: {
        status: 'INIT'
    },
    logout: {
        status: 'INIT'
    },
    status: {
        isLoggedIn: false,
        currentUser: '',
        user_id: null
    }
};

export default function authentication(state, action) {
    if(typeof state === "undefined")
        state = initialState;

    switch(action.type) {
        /* LOGIN */
        case types.AUTH_LOGIN:
            return update(state, {
                login: {
                    status: { $set: 'WAITING' }
                }
            });

        case types.AUTH_LOGIN_SUCCESS:
            return update(state, {
                login: {
                    status: { $set: 'SUCCESS' }
                },
                status: {
                    isLoggedIn: { $set: true },
                    currentUser: { $set: action.email },
                    user_id: { $set: action.user_id }
                }
            });
        case types.AUTH_LOGIN_END:
            return update(state, {
                login: {
                    status: { $set: 'END'}
                }
            })
        case types.AUTH_LOGIN_FAILURE:
            return update(state, {
                login: {
                    status: { $set: 'FAILURE' }
                }
            });
        case types.AUTH_LOGOUT:
            return update(state, {
                logout: {
                    status: { $set: 'WAITING' }
                }
            });
        case types.AUTH_LOGOUT_SUCCESS:
            return update(state, {
                logout: {
                    status: { $set: 'SUCCESS' }
                },
                status: {
                    isLoggedIn: { $set: false },
                    currentUser: { $set: '' }
                }
            });
        case types.AUTH_LOGOUT_FAILURE:
            return update(state, {
                logout: {
                    status: { $set: 'FAILURE' }
                }
            });
        case types.AUTH_LOGOUT_END:
            return update(state, {
                logout: {
                    status: { $set: 'END'}
                }
            })
        case types.AUTH_LOGGED_IN:
            return update(state, {
                login: {
                    status: { $set: 'SUCCESS' }
                },
                status: {
                    isLoggedIn: { $set: action.isLoggedIn },
                    currentUser: { $set: action.email },
                    user_id: { $set: action.user_id }
                }
            });
        default:
            return state;
    }
}
