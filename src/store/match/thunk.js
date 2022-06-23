import * as RootNavigationRef from '@routes/RootNavigationRef';
import * as matchActions from './actions';
import * as userActions from '@store/user/actions';
import * as utilsActions from '@store/utils/actions';
import * as errorThunk from '@store/error/thunk';
import * as firebaseThunk from '@store/firebase/thunk';
import * as userThunk from '@store/user/thunk';
import api from '@utils/api';
import { calculateDistanceFromLatLonInKm, calculateAge } from '~/utils/functions';

export function getMatchedProfiles() {
    return async (dispatch, getState) => {
        //get only profiles that was already matched with current user

        const userState = getState().user;

        try {
            const res = await api.get(`users/get_match_profiles/${userState.userData.id}`, {});

            res.data.map(item => {
                item.age = calculateAge(new Date(item.birthday))
                item.distance = parseInt(calculateDistanceFromLatLonInKm(
                    userState.userData.currentLongitude,
                    userState.userData.currentLatitude,
                    item.lastLongitude,
                    item.lastLatitude
                ))
            });

            dispatch(matchActions.updateMatchedProfilesArray(res.data));

        } catch (err) {
            dispatch(errorThunk.handleThunkError(err));
        }
    }
}

export function cleanMatchSearcherArrayAndGetNextProfile(shouldGetProfilesForMatchSearcher) {
    return dispatch => {
        dispatch(matchActions.removeAllIdsFromProfileIdsAlreadyDownloaded());
        dispatch(matchActions.removeProfileFromMatchSearcher(null, true));

        shouldGetProfilesForMatchSearcher && dispatch(getNextProfileForTheMatchSearcher());
    }
}

export function getNextProfileForTheMatchSearcher() {
    return async (dispatch, getState) => {

        const { isGettingProfileForTheMatchSearcher, profileIdsAlreadyDownloaded, matchSearcherProfiles } = getState().match;
        const { userData } = getState().user;
        const { isGeolocationEnabled } = getState().utils;

        try {
            if (!isGettingProfileForTheMatchSearcher && matchSearcherProfiles.length < 2 && isGeolocationEnabled) {

                dispatch(matchActions.updateIsGettingProfileForTheMatchSearcher(true));

                const res = await api.post('users/get_profile_to_the_match_searcher', {
                    currentLongitude: userData.currentLongitude,
                    currentLatitude: userData.currentLatitude,
                    maxDistance: userData.maxDistance,
                    userId: userData.id,
                    searchingBy: userData.searchingBy.key,
                    profileIdsAlreadyDownloaded: profileIdsAlreadyDownloaded,
                    ageRange: userData.ageRange
                });

                if (res.data.user) {

                    res.data.user.distance = parseInt(calculateDistanceFromLatLonInKm(
                        userData.currentLongitude,
                        userData.currentLatitude,
                        res.data.user.lastLongitude,
                        res.data.user.lastLatitude
                    ));

                    res.data.user.age = calculateAge(new Date(res.data.user.birthday));

                    dispatch(matchActions.addProfileIntoMatchSearcherArray(res.data.user));

                    dispatch(matchActions.updateProfileIdsAlreadyDownloaded(res.data.user.id));

                    dispatch(matchActions.updateIsGettingProfileForTheMatchSearcher(false));

                    /*matchSearcherProfiles must have at least 2 profiles, so when user likes/ignores the first one, the second will appear*/
                    matchSearcherProfiles.length < 2 && dispatch(getNextProfileForTheMatchSearcher());
                }
                else
                    dispatch(matchActions.updateIsGettingProfileForTheMatchSearcher(false));
            }
            else
                dispatch(matchActions.updateIsGettingProfileForTheMatchSearcher(false));

        } catch (err) {
            dispatch(matchActions.updateIsGettingProfileForTheMatchSearcher(false));
            dispatch(errorThunk.handleThunkError(err));
        }
    }
}

export function ignoreCurrentProfile(profileId) {
    return dispatch => {
        dispatch(matchActions.removeProfileFromMatchSearcher(profileId));
        dispatch(getNextProfileForTheMatchSearcher());
    }
}

export function likeCurrentProfile(profile, superLike) {
    return dispatch => {
        superLike && dispatch(userActions.updateUserDataOnRedux({ lastTimeSuperLikeWasUsed: new Date() }));
        dispatch(matchActions.removeProfileFromMatchSearcher(profile.id));
        dispatch(getNextProfileForTheMatchSearcher());
    }
}

export function unmatch(profileId) {
    return async (dispatch, getState) => {

        const userState = getState().user;

        try {

            dispatch(utilsActions.showLoader(true));

            await api.post('users/unmatch', { userId: userState.userData.id, profileId });

            await dispatch(firebaseThunk.removeAllConversationsFromThisMatch(profileId));

            dispatch(utilsActions.showLoader(false));

            dispatch(userThunk.getUserData(true, true, false, true));

            RootNavigationRef.goBack();//hides yesNo modal
            RootNavigationRef.goBack();//hides chat screen modal

        } catch (err) {
            dispatch(errorThunk.handleThunkError(err));
        }
    }
}
