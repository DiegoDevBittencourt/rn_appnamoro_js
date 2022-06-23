import * as utilsTypes from './types';

const INITIAL_STATE = {
    showLoader: false,
    isGeolocationEnabled: null,
    isGettingLocation: null
}

export default (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case utilsTypes.SHOW_LOADER:
            return { ...state, showLoader: action.showLoader }
        case utilsTypes.IS_GEOLOCATION_ENABLE:
            return { ...state, isGeolocationEnabled: action.isGeolocationEnabled }
        case utilsTypes.IS_GETTING_LOCATION:
            return { ...state, isGettingLocation: action.isGettingLocation }
        default:
            return state;
    }
}
