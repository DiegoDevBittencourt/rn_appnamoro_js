import * as dashboardTypes from './types';

export function updateUploadingImagesPreview(image, removeImageByThisId) {
    return {
        type: dashboardTypes.UPLOADING_IMAGES,
        image,
        removeImageByThisId
    };
}

export function setSelectedConfigMenu(selectedConfigMenu, selectedConfigMenuTitle) {
    return ({
        type: dashboardTypes.SET_SELECTED_CONFIG_MENU,
        selectedConfigMenuTitle,
        selectedConfigMenu
    })
}