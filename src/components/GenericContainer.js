import React from 'react';
import styled from 'styled-components';

const View = styled.View`
    height: 100%;
    width: 100%;
    flex-direction: column;
`;

export default GenericContainer = (props) => {
    return <View {...props}>{props.children}</View>
}
