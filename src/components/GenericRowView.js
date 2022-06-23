import React from 'react';
import styled from 'styled-components';

const View = styled.View`
    flex-direction: row;
    width: 100%;
`;

export default GenericRowView = (props) => {
    return <View {...props}>{props.children}</View>
}
