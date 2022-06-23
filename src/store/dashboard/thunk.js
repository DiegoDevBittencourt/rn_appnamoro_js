import * as dashboardActions from './actions';
import * as utilsActions from '@store/utils/actions';
import * as authThunk from '@store/auth/thunk';
import * as errorThunk from '@store/error/thunk';
import * as userThunk from '@store/user/thunk';
import api from '@utils/api';
import { decodeJwtToken } from '~/utils/functions';
import { successNotification } from '~/utils/notifications';

export function uploadImageToServer(imageData, selectedFile) {
    return async (dispatch, getState) => {

        const { id: userId } = getState().user.userData;

        try {
            await api.post(`users/user_images/${userId}`, imageData, {
                onUploadProgress: e => {

                    const progress = parseInt(Math.round((e.loaded * 100) / e.total));
                    dispatch(dashboardActions.updateUploadingImagesPreview({ ...selectedFile, progress }));
                }
            });

            dispatch(dashboardActions.updateUploadingImagesPreview(null, selectedFile.id));
            dispatch(userThunk.getUserData(true));

        } catch (err) {

            dispatch(dashboardActions.updateUploadingImagesPreview(null, selectedFile.id));
            dispatch(errorThunk.handleThunkError(err));
        }
    }
}

export function sendNewUserContact(name, email, subject, message) {
    return async (dispatch) => {

        try {
            dispatch(utilsActions.showLoader(true));

            await api.post('users/contact', { name, email, subject, message });

            dispatch(utilsActions.showLoader(false));

            successNotification('Contato enviado com sucesso! Obrigado por nos contactar.');

        } catch (err) {
            dispatch(errorThunk.handleThunkError(err));
        }
    }
}

export function sendRecoverPasswordEmail(email) {
    return async (dispatch) => {

        try {
            dispatch(utilsActions.showLoader(true));

            await api.post('account/send_recovery_password_email', { email });

            dispatch(utilsActions.showLoader(false));

            successNotification('E-mail enviado, verifique sua caixa de entrada.');

        } catch (err) {

            dispatch(utilsActions.showLoader(false));
            dispatch(errorThunk.handleThunkError(err));
        }
    }
}

export function sendEmailVerification(email) {
    return async (dispatch, getState) => {

        const { accessToken } = getState().auth;

        try {
            dispatch(utilsActions.showLoader(true));

            const userId = decodeJwtToken(accessToken).id;

            await api.post('account/send_email_verification', { email, id: userId });

            dispatch(utilsActions.showLoader(false));

            successNotification('E-mail enviado, verifique sua caixa de entrada.');

        } catch (err) {
            dispatch(errorThunk.handleThunkError(err));
        }
    }
}

export function resetPassword(email, token, password, passwordConfirmation) {
    return async (dispatch) => {

        try {
            dispatch(utilsActions.showLoader(true));

            const res = await api.post('account/passwordreset', { email, token, password, passwordConfirmation });

            dispatch(utilsActions.showLoader(false));

            return res;

        } catch (err) {
            dispatch(errorThunk.handleThunkError(err));
        }
    }
}

export function deleteAccount() {
    return async (dispatch, getState) => {

        dispatch(utilsActions.showLoader(true));

        const userState = getState().user;

        try {
            await api.delete(`account/delete-account/${userState.userData.id}`, { email, token, password, passwordConfirmation })
                .then(() => dispatch(authThunk.signOut()));

        } catch (err) {
            dispatch(errorThunk.handleThunkError(err));
        }
    }
}
