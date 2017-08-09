import authentication from './authentication';
import register from './register';

import { combineReducers } from 'redux';

export default combineReducers({
    authentication,
    register
});
