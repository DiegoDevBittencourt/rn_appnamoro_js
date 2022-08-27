import * as dashboardTypes from './types';

export function updateUploadingImagesPreview(imagesArray) {
    return {
        type: dashboardTypes.UPLOADING_IMAGES,
        imagesArray
    };
}

export function setSelectedConfigMenu(selectedConfigMenu, selectedConfigMenuTitle) {
    return ({
        type: dashboardTypes.SET_SELECTED_CONFIG_MENU,
        selectedConfigMenuTitle,
        selectedConfigMenu
    })
}