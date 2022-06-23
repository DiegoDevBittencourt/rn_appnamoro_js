import * as userTypes from './types';

const defaultUserData = {
    ageRange: [25, 35],
    maxDistance: 80,
    firstName: '',
    lastName: '',
    showMeOnApp: true
};

const INITIAL_STATE = {
    userData: defaultUserData,
}

export default (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case userTypes.UPDATE_USER_DATA:
            return { ...state, userData: { ...state.userData, ...action.userData } };
        default:
            return state;
    }
}
