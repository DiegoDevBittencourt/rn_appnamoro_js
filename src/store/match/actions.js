import * as matchTypes from './types';

export function updateSwipeCardRef(swipeCardRef) {
    return {
        type: matchTypes.UPDATE_SWIPE_CARD_REF,
        swipeCardRef
    }
}

export function updateMatchedProfilesArray(matchedProfiles) {
    return {
        type: matchTypes.UPDATE_MATCHED_PROFILES_ARRAY,
        matchedProfiles
    }
}

export function updateIsGettingProfileForTheMatchSearcher(isGettingProfileForTheMatchSearcher) {
    return {
        type: matchTypes.IS_GETTING_PROFILE_FOR_THE_MATCH_SEARCHER,
        isGettingProfileForTheMatchSearcher
    }
}

export function updateProfileIdsAlreadyDownloaded(userId) {
    return {
        type: matchTypes.UPDATE_PROFILE_IDS_ALREADY_DOWNLOADED,
        userId
    };
}

export function addProfileIntoMatchSearcherArray(profile) {
    return {
        type: matchTypes.ADD_PROFILE_TO_THE_MATCH_SEARCHER_ARRAY,
        profile
    };
}

export function updateIsSuperLikeAvailable(isSuperLikeAvailable) {
    return {
        type: matchTypes.IS_SUPERLIKE_AVAILABLE,
        isSuperLikeAvailable
    }
}

export function removeProfileFromMatchSearcher(profileId, removeAll) {
    return {
        type: matchTypes.REMOVE_PROFILE_FROM_THE_MATCH_SEARCHER_ARRAY,
        profileId,
        removeAll
    };
}

export function removeAllIdsFromProfileIdsAlreadyDownloaded() {
    return {
        type: matchTypes.REMOVE_ALL_IDS_FROM_PROFILE_IDS_ALREADY_DOWNLOADED
    }
}
