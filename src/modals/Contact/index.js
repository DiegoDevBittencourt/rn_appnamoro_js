import React from "react";

import ContactContent from './ContactContent';
import { GenericModalContainer } from '@components/index';

export default function SignUp(props) {
    return <GenericModalContainer closeButtonPress={() => props.navigation.goBack()} title={'Fale conosco!'}>
        <ContactContent />
    </GenericModalContainer>
}
