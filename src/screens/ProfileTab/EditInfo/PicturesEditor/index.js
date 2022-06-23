import React from 'react';
import styled from 'styled-components';
import { Dimensions } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { GenericContainer, GenericColumnView, SectionTitle, GenericAppButton } from '@components/index';
import Pictures from './Pictures';
import { pickFile } from './uploadMedia';

const PicturesEditorContainer = styled(GenericContainer)`
    height: auto;
    align-items: center;
`;

const PicturesContainer = styled(GenericColumnView)`
    height: ${(Dimensions.get('window').height / 100) * 65}px;
    margin-top: 10px;
`;

export default function PicturesEditor() {

    const dispatch = useDispatch();

    const { userImages } = useSelector(state => state.user.userData);

    const pickImages = () => pickFile(userImages.length, dispatch);

    return <PicturesEditorContainer>

        <SectionTitle titleText='ADICIONE FOTOS SUAS' />

        <PicturesContainer>
            <Pictures />
        </PicturesContainer>

        <GenericAppButton
            customButtonStyle={{ margin: 20 }}
            textButton='ADICIONAR MÍDIA'
            onPress={pickImages}
        />

    </PicturesEditorContainer>
}
