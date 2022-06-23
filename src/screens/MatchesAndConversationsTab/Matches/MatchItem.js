import React from 'react';
import styled from 'styled-components';
import { useNavigation } from '@react-navigation/native';

import { theme } from '@constants/StyledComponentsTheme';
import noProfile from '@assets/noProfile.png';
import { RoundImage, GenericColumnView, P } from '@components/index';
import { setLimitCharactereSizeToString } from '~/utils/functions';

const MatchItemBorderRadius = 80;

const MatchItemContainer = styled(GenericColumnView)`
    height: 100%;
    width: 80px;
    align-items: center;
    margin: 5px;
`;

const MatchItemButton = styled.TouchableHighlight`
    height: 80px;
    width: 80px;
    border-radius: ${MatchItemBorderRadius}px;
    background-color: white;
    padding: 2px;
    border-width: 2px;
    border-color: ${props => props.theme.$primaryColor};
`;

export default function MatchItem({ matchedProfile }) {

    const navigation = useNavigation();

    const { userImages, firstName } = matchedProfile;

    const profileImage = userImages.length > 0 ? { uri: userImages[0].imageUrl } : noProfile;

    const openChatScreen = () => navigation.push('ChatModal', { profileImage, matchedProfile });

    return <MatchItemContainer>

        <MatchItemButton underlayColor={theme.$lightGray} onPress={openChatScreen}>
            <RoundImage customImageStyle={{ height: '100%', width: '100%' }} source={profileImage} />
        </MatchItemButton>

        <P>{setLimitCharactereSizeToString(firstName, 11)}</P>

    </MatchItemContainer>
}
