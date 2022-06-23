import Geolocation from 'react-native-geolocation-service';
import { PermissionsAndroid } from 'react-native';
import Geocoder from 'react-native-geocoding';

import { REACT_APP_GEOCODE_API_KEY } from 'react-native-expand-dotenv';
import * as RootNavigationRef from '@routes/RootNavigationRef';
import * as utilsActions from '@store/utils/actions';
import * as userActions from '@store/user/actions';
import * as errorThunk from '@store/error/thunk';
import * as userThunk from '@store/user/thunk';
import * as matchThunk from '@store/match/thunk';

Geocoder.init(REACT_APP_GEOCODE_API_KEY, { language: 'pt-br' });

export function getAddress() {
    return async dispatch => {

        const handleGeolocationError = (error) => {

            dispatch(utilsActions.updateIsGettingLocation(false));

            dispatch(utilsActions.setIsGeoLocationEnable(false));

            RootNavigationRef.push('TurnOnLocationModal');

            dispatch(errorThunk.handleThunkError(error));
        }

        dispatch(utilsActions.updateIsGettingLocation(true));

        await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
            {
                title: "Libere o acesso a sua localização!",
                message: 'O App Namoro precisa acessar sua localização para encontrar pessoas próximas.',
                buttonNeutral: "Perguntar depois",
                buttonNegative: "Cancelar",
                buttonPositive: "OK"
            }
        );

        Geolocation.getCurrentPosition(
            (position) => {

                let lat = position?.coords?.latitude;
                let lng = position?.coords?.longitude;

                Geocoder.from({ lat, lng }).then(json => {

                    const address = json.results[6].formatted_address;

                    dispatch(utilsActions.setIsGeoLocationEnable(true));

                    dispatch(userActions.updateUserDataOnRedux({
                        address,
                        currentLongitude: lng,
                        currentLatitude: lat
                    }));

                    dispatch(userThunk.updateUser({
                        lastLongitude: lng,
                        lastLatitude: lat
                    }));

                    dispatch(utilsActions.updateIsGettingLocation(false));

                    dispatch(matchThunk.getNextProfileForTheMatchSearcher());

                }).catch(error => handleGeolocationError(error));
            },
            (error) => {
                handleGeolocationError(error);
            },
            { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
        )
    }
}
