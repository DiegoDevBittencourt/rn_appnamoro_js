import * as utilsTypes from './types';

export function showLoader(show) {
    return {
        type: utilsTypes.SHOW_LOADER,
        showLoader: show
    }
}

export function updateIsGettingLocation(isGettingLocation) {
    return {
        type: utilsTypes.IS_GETTING_LOCATION,
        isGettingLocation
    }
}

export function setIsGeoLocationEnable(isGeolocationEnabled) {
    return {
        type: utilsTypes.IS_GEOLOCATION_ENABLE,
        isGeolocationEnabled
    }
}
