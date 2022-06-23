import * as matchTypes from './types';

const INITIAL_STATE = {
    isGettingProfileForTheMatchSearcher: null,
    matchSearcherProfiles: [],
    matchedProfiles: [],
    profileIdsAlreadyDownloaded: [],
    isSuperLikeAvailable: false,
    swipeCardRef: null,
}

export default (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case matchTypes.IS_GETTING_PROFILE_FOR_THE_MATCH_SEARCHER:
            return { ...state, isGettingProfileForTheMatchSearcher: action.isGettingProfileForTheMatchSearcher }
        case matchTypes.ADD_PROFILE_TO_THE_MATCH_SEARCHER_ARRAY:
            return { ...state, matchSearcherProfiles: [...state.matchSearcherProfiles, action.profile] }
        case matchTypes.REMOVE_PROFILE_FROM_THE_MATCH_SEARCHER_ARRAY:
            return {
                ...state, matchSearcherProfiles:
                    action.removeAll ? [] :
                        state.matchSearcherProfiles.filter(item => item.id !== action.profileId)
            }
        case matchTypes.UPDATE_MATCHED_PROFILES_ARRAY:
            return { ...state, matchedProfiles: action.matchedProfiles }
        case matchTypes.UPDATE_PROFILE_IDS_ALREADY_DOWNLOADED:
            return { ...state, profileIdsAlreadyDownloaded: [...state.profileIdsAlreadyDownloaded, action.userId] }
        case matchTypes.REMOVE_ALL_IDS_FROM_PROFILE_IDS_ALREADY_DOWNLOADED:
            return { ...state, profileIdsAlreadyDownloaded: [] }
        case matchTypes.IS_SUPERLIKE_AVAILABLE:
            return { ...state, isSuperLikeAvailable: action.isSuperLikeAvailable }
        case matchTypes.UPDATE_SWIPE_CARD_REF:
            return { ...state, swipeCardRef: action.swipeCardRef }
        default:
            return state;
    }
}
