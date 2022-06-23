import React, { useState } from "react";
import { Keyboard } from 'react-native';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

import * as dashboardThunk from '@store/dashboard/thunk';
import { dangerNotification } from '~/utils/notifications';
import { emailValidator } from '~/utils/functions';
import { GenericModalContainer, TextInputRightIconButton, GenericAppButton, P } from '@components/index';

export const PCustom = styled(P)`
    margin-top: 10px;
    text-align: center;
`;

export default function ForgotPassword(props) {

    const dispatch = useDispatch();

    const [forgotPasswordEmail, setForgotPasswordEmail] = useState('');

    const sendRecoverPasswordEmail = async () => {
        if (emailValidator(forgotPasswordEmail)) {

            Keyboard.dismiss();

            dispatch(dashboardThunk.sendRecoverPasswordEmail(email)).then(() => props.navigation.goBack());

        }
        else dangerNotification('Digite um email válido!');
    }

    return <GenericModalContainer closeButtonPress={() => props.navigation.goBack()} title={'Digite seu email abaixo'}>

        <TextInputRightIconButton
            placeholder={'Email'}
            value={forgotPasswordEmail}
            returnKeyType={'done'}
            onChangeText={(value) => setForgotPasswordEmail(value)}
        />

        <GenericAppButton
            customButtonStyle={{ margin: 30, width: 'auto' }}
            textButton={'ENVIAR'}
            onPress={() => sendRecoverPasswordEmail()}
        />

        <PCustom>Enviaremos um e-mail contendo os passos para resetar sua senha!</PCustom>

    </GenericModalContainer>
}
