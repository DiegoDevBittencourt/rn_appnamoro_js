import React, { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import EStyleSheet from 'react-native-extended-stylesheet';
import styled from 'styled-components';

import * as authThunk from '@store/auth/thunk';
import SocialButtons from './SocialButtons';
import ForgotPassword from './ForgotPassword';
import SignUpNow from './SignUpNow';
import { theme } from '@constants/StyledComponentsTheme';
import { dangerNotification } from '~/utils/notifications'
import { H2, LineTextLine, TextInputRightIconButton, GenericAppButton } from '@components/index';

const Styles = EStyleSheet.create({
    '@media (min-width: 0)': {
        loginCardContainer: {
            height: '$loginCardHeightMin0Width',
            width: '$loginCardWidthMin0Width'
        },
    },

    '@media(min-width: 768px)': {
        loginCardContainer: {
            height: '$loginCardHeightMin768Width',
            width: '$loginCardWidthMin768Width'
        },
    },

    '@media(min-width: 1024px)': {
        loginCardContainer: {
            height: '$loginCardHeightMin1024Width',
            width: '$loginCardWidthMin1024Width'
        },
    }
});

export const LoginCardContainer = styled.View`
    padding: 30px 15px 15px;
    border-radius: ${props => props.theme.$mediumBorderRadius}px;
    text-align: center;
    background-color: white;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    elevation: 10;
    margin: 10px 0 30px;
`;

export default function LoginCard(props) {

    const dispatch = useDispatch();

    const [email, setEmail] = useState('diego6d@hotmail.com');
    const [password, setPassword] = useState('123456789a');
    const [passwordSecureTextEntry, setPasswordSecureTextEntry] = useState(true);
    const tiPassword = useRef();

    const localLogin = () => {

        if (email && password) {
            const userData = { email, password };
            dispatch(authThunk.signInLocal(userData));
        }
        else
            dangerNotification("Preencha os campos Email e Senha");
    }

    return <LoginCardContainer style={Styles.loginCardContainer}>

        <H2>Entrar</H2>

        <SocialButtons />

        <LineTextLine text={'ou'} />

        <TextInputRightIconButton
            placeholder={'Email'}
            value={email}
            returnKeyType={'next'}
            onChangeText={(value) => setEmail(value)}
            onSubmitEditing={() => tiPassword.current.focus()}
        />

        <TextInputRightIconButton
            reference={tiPassword}
            placeholder={'Senha'}
            showRightButton
            solidIcon
            value={password}
            onChangeText={(value) => setPassword(value)}
            customIconStyle={{ color: theme.$gray }}
            iconName={passwordSecureTextEntry ? 'eye-slash' : 'eye'}
            secureTextEntry={passwordSecureTextEntry}
            underlayColor={theme.$lightGray}
            onButtonPress={() => setPasswordSecureTextEntry(!passwordSecureTextEntry)}
        />

        <GenericAppButton customButtonStyle={{ marginTop: 20 }} textButton={'ENTRAR'} onPress={localLogin} />

        <ForgotPassword {...props} />

        <SignUpNow {...props} />

    </LoginCardContainer>
}
