import React from 'react';
import styled from 'styled-components';

const Text = styled.Text`
    font-weight: 100;
    font-size: 21px;
    color: ${props => props.theme.$lightTextColor};
`;

export default H3 = (props) => {
    return <Text {...props}>{props.children}</Text>
}
