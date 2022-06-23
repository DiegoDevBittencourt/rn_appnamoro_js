import React from 'react';
import styled from 'styled-components';

const View = styled.View`
    flex-direction: column;
    width: 100%;
`;

export default GenericColumnView = (props) => {
    return <View {...props}>{props.children}</View>
}
