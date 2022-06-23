import { combineReducers } from 'redux';

import auth from './auth/reducer';
import dashboard from './dashboard/reducer';
import firebase from './firebase/reducer';
import match from './match/reducer';
import user from './user/reducer';
import utils from './utils/reducer';

export default combineReducers({
    auth,
    dashboard,
    firebase,
    match,
    user,
    utils
});
