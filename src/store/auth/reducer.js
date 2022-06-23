import * as authTypes from './types';

const INITIAL_STATE = {
    isAuthenticated: true,
    isCheckingIfTokenHasExpired: false,
    accessToken: '',
}

export default (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case authTypes.AUTH_SIGN_UP:
            return { ...state, isAuthenticated: true }
        case authTypes.AUTH_SIGN_IN:
            return { ...state, isAuthenticated: true }
        case authTypes.AUTH_SIGN_OUT:
            return { ...state, isAuthenticated: false }
        case authTypes.UPDATE_ACCESS_TOKEN:
            return { ...state, accessToken: action.accessToken }
        case authTypes.CHECKING_IF_TOKEN_HAS_EXPIRED:
            return { ...state, isCheckingIfTokenHasExpired: action.isCheckingIfTokenHasExpired }
        default:
            return state;
    }
}
