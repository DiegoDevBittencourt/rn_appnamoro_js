import React from 'react';
import styled from 'styled-components';

import GenericColumnView from './GenericColumnView';
import P from './P';

const Container = styled(GenericColumnView)`
    height: 50px;
    justify-content: flex-end;
    align-items: flex-start;
`;

const Title = styled(P)`
    margin: 0 0 3px 10px;
    color: ${props => props.theme.$lightTextColor};
`;

export default SectionTitle = ({ titleText, customTitleStyle }) => {
    return <Container>

        <Title style={customTitleStyle}>{titleText}</Title>

    </Container>
}
