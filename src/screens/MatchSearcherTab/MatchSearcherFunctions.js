import * as matchThunk from '@store/match/thunk';
import * as matchActions from '@store/match/actions';

export function ignoreCurrentProfile(dispatch, profileId) {
    dispatch(matchThunk.ignoreCurrentProfile(profileId));
}

export function likeCurrentProfile(dispatch, superLike, currentProfile) {
    superLike && dispatch(matchActions.updateIsSuperLikeAvailable(false));
    dispatch(matchThunk.likeCurrentProfile(currentProfile, superLike));
}
