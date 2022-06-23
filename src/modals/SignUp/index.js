import React from "react";

import SignUpFields from './SignUpFields';
import { GenericModalContainer } from '@components/index';

export default function SignUp(props) {
    return <GenericModalContainer closeButtonPress={() => props.navigation.goBack()} title={'Criar nova conta'}>
        <SignUpFields />
    </GenericModalContainer>
}
