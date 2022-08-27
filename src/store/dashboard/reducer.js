import * as dashboardTypes from './types';

const INITIAL_STATE = {
    uploadingImagesPreview: [],
    selectedConfigMenu: '',
    selectedConfigMenuTitle: '',
}

export default (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case dashboardTypes.UPLOADING_IMAGES:
            return { ...state, uploadingImagesPreview: action?.imagesArray }
        case dashboardTypes.SET_SELECTED_CONFIG_MENU:
            return {
                ...state,
                selectedConfigMenu: action.selectedConfigMenu,
                selectedConfigMenuTitle: action.selectedConfigMenuTitle
            }
        default:
            return state;
    }
}
