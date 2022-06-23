import React from 'react';
import styled from 'styled-components';

import GenericRowView from './GenericRowView';
import P from './P';

const LineTextLineContainer = styled(GenericRowView)`
    width: auto;
    align-items: center;
`;

const Line = styled.View`
    display: flex;
    width: 40%;
    margin-top: 4px;
    border-bottom-width: 1px;
    border-color: ${props => props.theme.$lightTextColor};
`;

export default LineTextLine = ({ text }) => {
    return <LineTextLineContainer>
        <Line />
        <P style={{ padding: 5 }}>{text}</P>
        <Line />
    </LineTextLineContainer>
}
