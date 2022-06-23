import * as userTypes from './types';

export function updateUserDataOnRedux(userData) {
    return {
        type: userTypes.UPDATE_USER_DATA,
        userData
    }
}
