import * as firebaseTypes from './types';

const INITIAL_STATE = {
    firebaseUid: '',
    firebaseUser: {},
    realTimeFirebaseChat: [],
}

export default (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case firebaseTypes.UPDATE_FIREBASE_UID:
            return { ...state, firebaseUid: action.firebaseUid }
        case firebaseTypes.UPDATE_FIREBASE_USER:
            return { ...state, firebaseUser: action.firebaseUser }
        case firebaseTypes.UPDATE_REAL_TIME_FIREBASE_CHAT:
            return { ...state, realTimeFirebaseChat: action.realTimeFirebaseChat }
        default:
            return state;
    }
}
