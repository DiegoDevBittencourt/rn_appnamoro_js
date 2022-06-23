import React from 'react';
import styled from 'styled-components';
import Carousel from 'react-native-looped-carousel';
import { Dimensions } from 'react-native';

import noProfile from '@assets/noProfile.png';
import { generateRandomKey } from '~/utils/functions';
import { H2, H3, GenericColumnView, AwesomeIcon } from '@components/index';
import { textShadow } from '@constants/InlineStyling';

const ProfileCardInfo = styled(GenericColumnView)`
    flex: 1;
    width: ${Dimensions.get('window').width - 20}px;
    justify-content: center;
    align-items: center;
    background-color: white;
    elevation: 5;
    border-radius: ${props => props.theme.$bigBorderRadius}px;
`;

const NameAge = styled(H2)`
    position: absolute;
    bottom: 30px;
    left: 10px;
    color: white;
`;

const Distance = styled(H3)`
    position: absolute;
    bottom: 5px;
    left: 10px;
    color: white;
`;

const UserImage = styled.Image`
    flex: 1;
    height: 100%;
    border-radius: ${props => props.theme.$bigBorderRadius}px;
    resize-mode: cover;
`;

export default function ProfileCard({ firstName, lastName, age, userImages, distance }) {

    const arrowStyle = {
        color: 'white',
        fontSize: 22,
        margin: 20
    };

    const customIconStyle = {
        color: 'white',
        width: 20,
        textAlign: 'center'
    };

    const customIconContainer = {
        width: 30,
        alignItems: 'flex-end',
    };

    return <ProfileCardInfo>
        <Carousel
            style={{ width: '100%', height: '100%' }}
            arrowStyle={{ height: '100%', justifyContent: 'center' }}
            pageInfoTextStyle={{ color: 'white' }}
            pageInfoBottomContainerStyle={{ height: 20, position: 'absolute', top: 10 }}
            leftArrowText={'＜'}
            leftArrowStyle={[arrowStyle, textShadow]}
            rightArrowText={'＞'}
            rightArrowStyle={[arrowStyle, textShadow]}
            pageInfo
            arrows
            swipe={false}
            isLooped={false}
            autoplay={false}
        >
            {
                userImages?.length > 0 ?
                    userImages.map(image => <UserImage key={generateRandomKey()} source={{ uri: image.imageUrl }} />)
                    :
                    <UserImage source={noProfile} />
            }
        </Carousel>

        <NameAge style={textShadow}>{`${firstName} ${lastName}, ${age}`}</NameAge>

        <Distance style={textShadow}>
            <AwesomeIcon customIconContainer={customIconContainer} iconName='map-marker-alt' customIconStyle={{ ...textShadow, ...customIconStyle }} />
            {`a ${distance === 0 ? 'menos de 1' : distance}km daqui`}
        </Distance>

    </ProfileCardInfo>
}
