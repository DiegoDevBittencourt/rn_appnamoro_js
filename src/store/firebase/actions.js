import * as firebaseTypes from './types';

export function updateFirebaseUidOnRedux(firebaseUid) {
    return {
        type: firebaseTypes.UPDATE_FIREBASE_UID,
        firebaseUid
    }
}

export function updateFirebaseUserOnRedux(firebaseUser) {
    return {
        type: firebaseTypes.UPDATE_FIREBASE_USER,
        firebaseUser
    }
}

export function updateRealTimeFirebaseChat(realTimeFirebaseChat) {
    return {
        type: firebaseTypes.UPDATE_REAL_TIME_FIREBASE_CHAT,
        realTimeFirebaseChat
    }
}
