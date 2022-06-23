import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import { theme } from '@constants/StyledComponentsTheme';
import { P, GenericRowView, GenericColumnView, GenericScrollView, AwesomeIcon } from '@components/index';

const PTitle = styled(P)`
    color: ${props => props.theme.$textColor};
`;

const PCustom = styled(P)`
    color: ${props => props.theme.$lightTextColor};
`;

const AddressInfo = styled(GenericRowView)`
    height: ${props => props.theme.$heightOfGenericComponent + 10}px;
    width: 100%;
    align-items: center;
    background-color: white;
    border-width: 1px;
    border-color: ${props => props.theme.$lightGray};
`;

export default function LocationEditor() {

    const { address } = useSelector(state => state.user.userData)

    const AddressComponent = () => {
        return <AddressInfo>

            <AwesomeIcon customIconStyle={{ color: theme.$blue }} iconName='map-marker-alt' />

            <GenericColumnView>
                <PTitle>Minha Localização atual</PTitle>
                <PCustom>{address ? address : 'Não definida'}</PCustom>
            </GenericColumnView>

        </AddressInfo>
    }

    return <GenericScrollView customStyle={{ marginTop: 10 }}>

        <AddressComponent />

    </GenericScrollView>
}
