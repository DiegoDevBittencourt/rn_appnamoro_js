import React from 'react';
import { useNavigation } from '@react-navigation/native';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import * as Progress from 'react-native-progress';

import { pickFile } from './uploadMedia';
import { theme } from '@constants/StyledComponentsTheme';
import { RoundCloseButton } from '@components/index';
import noProfile from '@assets/noProfile.png';

const UserImageContainer = styled.View`
    flex: 1;
    padding: 15px;
    background-color: white;
    border-width: 0.5px;
    border-style: dotted;
    border-color: ${props => props.theme.$lightGray};
`;

const Button = styled.TouchableHighlight`
    flex: 1;
    border-radius: ${props => props.theme.$smallBorderRadius}px;
`;

const ButtonContainer = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

const UserImage = styled.Image`
    height: 100%;
    width: 100%;
    border-radius: ${props => props.theme.$smallBorderRadius}px;
`;

const ProgressBarContainer = styled.View`
    position: absolute;
    height: auto;
    width: auto;
    justify-content: center;
    align-items: center;
    background-color: white;
    border-radius: 50px;
`;

export default function PictureItem({ PictureItem }) {

    const dispatch = useDispatch();
    const navigation = useNavigation();

    const { userImages } = useSelector(state => state.user.userData);

    const imageSource = PictureItem.imageUrl ? { uri: PictureItem.imageUrl } : noProfile;

    const customButtonStyle = {
        position: 'absolute',
        height: 40,
        width: 40,
        right: 0,
        top: 0,
        backgroundColor: 'white'
    };

    const handleDeletePicture = () => {
        navigation.push('GenericYesNoModal', {
            title: 'Excluir imagem?',
            subtitle: 'Esta ação não pode ser desfeita!',
            acceptText: 'Excluir',
            denyText: 'Cancelar',
            selectedMethod: 'genericYesNoModalDeleteUserImage',
            selectedUserImageId: PictureItem.id
        });
    }

    const DeleteImageButton = () => {
        return PictureItem.imageUrl ? PictureItem.uploaded &&
            <RoundCloseButton
                customIconStyle={{ fontSize: 23, color: theme.$red }}
                customButtonStyle={customButtonStyle}
                onPress={handleDeletePicture}
            /> : null
    }

    const UploadProgressBar = () => {
        return PictureItem.progress > 0 ?
            <ProgressBarContainer>

                <Progress.Circle
                    progress={PictureItem.progress / 100}
                    color={theme.$primaryColor}
                    textStyle={{ fontSize: 12 }}
                    showsText
                />

            </ProgressBarContainer> : null
    }

    const pickImages = () => pickFile(userImages.length, dispatch);

    return <UserImageContainer>

        <Button underlayColor={theme.$darkGray} onPress={pickImages}>
            <ButtonContainer>

                <UserImage source={imageSource} />

                <UploadProgressBar />

            </ButtonContainer>
        </Button>

        <DeleteImageButton />

    </UserImageContainer>
}
