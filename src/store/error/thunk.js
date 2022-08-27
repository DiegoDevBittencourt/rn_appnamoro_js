import { handleError } from '~/utils/functions';
import * as utilsActions from '@store/utils/actions';
import * as authThunk from '@store/auth/thunk';

export function handleThunkError(error) {
    return dispatch => {

        dispatch(utilsActions.showLoader(false));

        //status 401 is Unauthorized, which means that user loses the access to the API
        if (error?.response?.status == 401 && error?.response?.data == 'Unauthorized')
            dispatch(authThunk.signOut());
        else if (error?.message != 'Location permission not granted.')
            handleError(error);
    }
}
