import React from 'react';
import styled from 'styled-components';

import { P, GenericRowView } from '@components/index';

const SignUpNowContainer = styled(GenericRowView)`
    margin-top: 30px;
    justify-content: center;      
`;

const Text1 = styled(P)`
    font-size: 13px;
`;

const Text2 = styled(P)`
    color: ${props => props.theme.$green};
    font-size: 14px;
`;

export default function SignUpNow(props) {

    const showSignUpModal = () => props.navigation.push('SignUpModal');

    return <SignUpNowContainer>
        <Text1>Ainda não possui conta? <Text2 className="p" onPress={showSignUpModal}>Cadastre-se agora!</Text2></Text1>
    </SignUpNowContainer>
}
