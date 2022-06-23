import React from 'react';
import styled from 'styled-components';
import { useNavigation } from '@react-navigation/native';

import { theme } from '@constants/StyledComponentsTheme';
import { GenericColumnView, GenericRowView, P, RoundImage } from '@components/index';
import noProfile from '@assets/noProfile.png';
import { setLimitCharactereSizeToString } from '~/utils/functions';

const Button = styled.TouchableHighlight`
    height: 80px;
    width: 100%;
    border-top-width: 0.7px;
    border-top-color: ${props => props.theme.$lightGray};
`;

const MainContainer = styled(GenericRowView)`
    flex: 1;
    align-items: center;
`;

const TextContainer = styled(GenericColumnView)`
    padding-left: 10px;
    flex: 1;
`;

const PTitle = styled(P)`
    font-size: 17px;
    font-weight: 700;
    margin-bottom: 5px;
`;

const PMessage = styled(P)`
    font-size: 15px;
`;

const PTime = styled(P)`
    font-size: 12px;
`;

const TimeContainer = styled.View`
    width: 35px;
    height: 100%;
    padding-bottom: 5px;
    justify-content: flex-end;
`;

export default function ConversationItem({ conversationItem, matchedProfile }) {

    const navigation = useNavigation();

    const { hourMinute, message } = conversationItem;
    const { firstName, lastName, userImages } = matchedProfile || { firstName: '', lastName: '' };

    const profileImage = userImages?.length > 0 ? { uri: userImages[0]?.imageUrl } : noProfile;

    const openChatScreen = () => navigation.push('ChatModal', { profileImage, matchedProfile });

    return <Button underlayColor={theme.$lightGray} onPress={openChatScreen}>
        <MainContainer>

            <RoundImage customImageStyle={{ marginLeft: 5 }} source={profileImage} />

            <TextContainer>
                <PTitle>{setLimitCharactereSizeToString(`${firstName} ${lastName}`, 30)}</PTitle>
                <PMessage>{setLimitCharactereSizeToString(message, 37)}</PMessage>
            </TextContainer>

            <TimeContainer>
                <PTime>{hourMinute}</PTime>
            </TimeContainer>

        </MainContainer>
    </Button>
}
