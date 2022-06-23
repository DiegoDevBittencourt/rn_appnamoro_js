import * as authTypes from './types';

export function updateAccessTokenOnRedux(accessToken) {
    return {
        type: authTypes.UPDATE_ACCESS_TOKEN,
        accessToken
    }
}

export function isCheckingIfTokenHasExpiredStatus(isCheckingIfTokenHasExpired) {
    return {
        type: authTypes.CHECKING_IF_TOKEN_HAS_EXPIRED,
        isCheckingIfTokenHasExpired
    }
}

export function signOutAction() {
    return {
        type: authTypes.AUTH_SIGN_OUT
    };
}

export function signUpAction() {
    return {
        type: authTypes.AUTH_SIGN_UP
    };
}

export function signInAction() {
    return {
        type: authTypes.AUTH_SIGN_IN
    };
}
