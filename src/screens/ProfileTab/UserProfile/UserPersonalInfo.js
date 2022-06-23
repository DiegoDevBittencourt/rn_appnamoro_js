import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

import { GenericContainer, P } from '@components/index';
import noProfile from '@assets/noProfile.png';

const UserPersonalInfoContainer = styled(GenericContainer)`
    height: auto;
    align-items: center;
`;

const UserImage = styled.Image`
    width: 150px;
    height: 150px;
    resize-mode: cover;
    border-radius: 300px;
    border-width: 3px;
    border-color: ${props => props.theme.$lightGray};
`;

const P1 = styled(P)`
    margin-top: 10px;
    font-size: 20px;
    width: 100%;
    text-align: center;
    color: black;
`;

const P2 = styled(P)`
    margin-top: 2px;
    font-size: 13px;
    color: ${props => props.theme.$gray};
    text-align: center;
`;

export default UserPersonalInfo = () => {

    const {
        userImages,
        firstName,
        lastName,
        age,
        position,
        schooling
    } = useSelector(state => state.user?.userData);

    const imageSource = userImages && userImages.length > 0 ? { uri: userImages[0].imageUrl } : noProfile

    return <UserPersonalInfoContainer>

        <UserImage source={imageSource} />

        <P1>{`${firstName || ''} ${lastName || ''}, ${age || ''}`}</P1>

        <P2>{position}</P2>

        <P2>{schooling?.label}</P2>

    </UserPersonalInfoContainer>
}
