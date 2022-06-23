import React from "react";
import styled from 'styled-components';

import { GenericModalContainer, GenericAppButton, GenericContainer, P } from '@components/index';
import { InfoText } from '@constants/InfoText';

export const TurnOnLocationContainer = styled(GenericContainer)`
    padding: 10px;
`;

export const PCustom = styled(P)`
    margin-top: 10px;
    padding: 0 20px;
    text-align: center;
`;

export default function TurnOnLocation(props) {
    return <TurnOnLocationContainer>
        <GenericModalContainer closeButtonPress={() => props.navigation.goBack()} title={InfoText.weFoundAProblem}>

            <PCustom>{InfoText.turnOnLocation}</PCustom>

            <GenericAppButton
                customButtonStyle={{ margin: 30, width: 'auto' }}
                textButton={'ENTENDI'}
                onPress={() => props.navigation.goBack()}
            />

        </GenericModalContainer>
    </TurnOnLocationContainer>
}
