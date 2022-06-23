import React from 'react';
import { useSelector } from 'react-redux';

import { GenericRowView } from '@components/index';
import PictureItem from './PictureItem';

export default function Pictures() {

    const { userImages } = useSelector(state => state.user.userData);
    const { uploadingImagesPreview } = useSelector(state => state.dashboard);

    const PictureItems = () => {

        const pictureItemsArray = [];

        //uploading images should appear together with profile images (but showing a progressbar):
        const helperArray = userImages ? userImages.concat(uploadingImagesPreview) : [];

        for (var i = 0; i <= 8; i++) {
            pictureItemsArray.push(
                <PictureItem
                    key={i}
                    PictureItem={helperArray[i] || {}}
                />
            )
        }

        //splits pictureItemsArray (9 slots) by 3 arrays, containing 3 items each new array
        const pictureItemsArray1 = pictureItemsArray.slice(0, 3);
        const pictureItemsArray2 = pictureItemsArray.slice(3, 6);
        const pictureItemsArray3 = pictureItemsArray.slice(6, 9);
        const lineArrays = [pictureItemsArray1, pictureItemsArray2, pictureItemsArray3];

        const finalArray = [];

        for (i = 0; i <= 2; i++) {
            finalArray.push(
                <GenericRowView style={{ flex: 1, backgroundColor: 'blue' }} key={i}>
                    {lineArrays[i]}
                </GenericRowView>
            )
        }

        return finalArray
    }

    return <PictureItems />
}
