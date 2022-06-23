import * as dashboardTypes from './types';

const INITIAL_STATE = {
    uploadingImagesPreview: [],
    selectedConfigMenu: '',
    selectedConfigMenuTitle: '',
}

export default (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case dashboardTypes.UPLOADING_IMAGES:
            return {
                ...state, uploadingImagesPreview:
                    action.removeImageByThisId ?
                        state.uploadingImagesPreview.filter(item => item.id !== action.removeImageByThisId)
                        :
                        state.uploadingImagesPreview.some(item => item.id === action.image.id)//verify if item already exists
                            ? state.uploadingImagesPreview.map(item =>
                                item.id === action.image.id//if so update
                                    ? { ...item, progress: action.image.progress }
                                    : item)
                            : [...state.uploadingImagesPreview, action.image]//if not add
            }
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
