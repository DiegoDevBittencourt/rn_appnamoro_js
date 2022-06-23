import React from 'react';
import styled from 'styled-components';

import { P, GenericRowView } from '@components/index';

const ForgotPasswordContainer = styled(GenericRowView)`
    margin-top: 15px;
    justify-content: flex-end;      
    width: 100%;
`;

const Text = styled(P)`
    font-size: 14px;
    color: ${props => props.theme.$green};
`;

export default function ForgotPassword(props) {

    const showForgotPasswordModal = () => props.navigation.push('ForgotPasswordModal');

    return <ForgotPasswordContainer>
        <Text onPress={showForgotPasswordModal}>Esqueceu a senha?</Text>
    </ForgotPasswordContainer>
}
