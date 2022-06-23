import React from 'react';
import styled from 'styled-components';

import { GenericColumnView, DevelopedBy, AppVersion } from '@components/index';
import ProfileCircle from './ProfileCircle';

export default function UserProfile() {

    const ProfileScreenContainer = styled(GenericColumnView)`
        height: 100%;
        background-color: ${props => props.theme.$darkerBackgroundColor};
        justify-content: flex-end;
    `;

    return <ProfileScreenContainer>

        <ProfileCircle />

        <DevelopedBy />

        <AppVersion />

    </ProfileScreenContainer >
}
