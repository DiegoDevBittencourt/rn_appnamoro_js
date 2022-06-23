import React from 'react';
import styled from 'styled-components';
import RNModalSelector from 'react-native-modal-selector'

import GenericRowView from './GenericRowView';
import P from './P';

const MainContainer = styled(GenericRowView)`
    height: ${props => props.theme.$heightOfGenericComponent}px;
    width: 100%;
    margin-top: 10px;
    background-color: ${props => props.theme.$lightGray};
    border-radius: ${props => props.theme.$smallBorderRadius}px;
    padding: 1px 4px;
    align-items: center;
    justify-content: center;
    text-align: left;
`;

const RNModalSelectorCustom = styled(RNModalSelector)`
    height: 100%;
    width: 100%;
    justify-content: center;
    background-color: white;
`;
const TextContainer = styled(GenericRowView)`
    height: 100%;
    width: 100%;
    justify-content: center;
`;

const PCustom = styled(P)`
    flex: 1;
    align-self: center;
    padding: 10px 0 10px 10px;
`;

export default ModalSelector = ({ selectedItem, title, data, handleChange }) => {

    const titleSection = [
        { key: -1, section: true, label: title },
    ];

    return <MainContainer>
        <RNModalSelectorCustom
            data={titleSection.concat(data)}
            supportedOrientations={['portrait']}
            onChange={handleChange}>

            <TextContainer>
                <PCustom>{selectedItem && selectedItem.label ? selectedItem.label : title}</PCustom>
            </TextContainer>

        </RNModalSelectorCustom>
    </MainContainer>
}
