import React from 'react';

import logo from '@assets/logo.png';
import appBackgroundOpaque from '@assets/appBackgroundOpaque.jpg';
import LoginCard from './LoginCard';
import { AppLogo, ImageBackgroundContainer, GenericScrollView } from '@components/index';

export default function Login(props) {

    return <ImageBackgroundContainer source={appBackgroundOpaque}>
        <GenericScrollView style={{ backgroundColor: 'transparent' }} >

            <AppLogo source={logo} />

            <LoginCard {...props} />

        </GenericScrollView>
    </ImageBackgroundContainer>
}
