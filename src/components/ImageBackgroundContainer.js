import React from 'react';
import styled from 'styled-components';

const ImageBackground = styled.ImageBackground`
    height: 100%;
    width: 100%;
    align-items: center;
    flex-direction: column;
`;

export default ImageBackgroundContainer = ({ source, children }) => {
    return <ImageBackground source={source}>
        {children}
    </ImageBackground>
}
