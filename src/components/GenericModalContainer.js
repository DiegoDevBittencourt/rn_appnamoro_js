import React from 'react';
import styled from 'styled-components';

import GenericColumnView from './GenericColumnView';
import H2 from './H2';
import RoundCloseButton from './RoundCloseButton';

const MainContainer = styled(GenericColumnView)`
    flex: 1; 
    justify-content: center;
    margin: 10px 0;
`;

const ModalContainer = styled(GenericColumnView)`
    margin: 10px;
    max-height: 100%;
    width: auto;
    background-color: white;
    border-radius: ${props => props.theme.$mediumBorderRadius}px;
`;

const HeaderContainer = styled.View`
    padding: 10px;
    width: auto;
`;

const H2Custom = styled(H2)`
    text-align: center;
`;

const ScrollViewCustom = styled.ScrollView`
    padding: 0 10px 0;
`;

export default GenericModalContainer = ({ title, children, closeButtonPress, customTitleStyle }) => {
    return <MainContainer>
        <ModalContainer>

            <HeaderContainer>
                <RoundCloseButton onPress={closeButtonPress} />
                {title && <H2Custom style={customTitleStyle}>{title}</H2Custom>}
            </HeaderContainer>

            <ScrollViewCustom>
                {children}
            </ScrollViewCustom>

        </ModalContainer>
    </MainContainer>
}
