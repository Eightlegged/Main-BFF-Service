import authentication from './authentication';
import register from './register';
import meeting from './meeting';

import { combineReducers } from 'redux';

export default combineReducers({
    authentication,
    register,
    meeting
});
