import React from "react";

import GenericYesNoModalContent from './GenericYesNoModalContent';
import { GenericModalContainer } from '@components/index';

export default function GenericYesNoModal(props) {

    const { title } = props.route.params;

    return <GenericModalContainer closeButtonPress={() => props.navigation.goBack()} title={title.toUpperCase()}>
        <GenericYesNoModalContent {...props} />
    </GenericModalContainer>
}
