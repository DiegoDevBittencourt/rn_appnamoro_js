import React from 'react';
import styled from 'styled-components';

const Image = styled.Image`
    height: 65px;
    width: 65px;
    border-radius: 80px;
`;

export default RoundImage = ({ source, customImageStyle }) => {
    return <Image style={customImageStyle} source={source} />
}
