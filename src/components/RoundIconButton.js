import React from 'react';
import styled from 'styled-components';

import AwesomeIcon from './AwesomeIcon';

const Button = styled.TouchableHighlight`
    height: 60px;
    width: 60px;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    background-color: white;
    elevation: 3;
`;

const IconContainer = styled.View`
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: ${props => props.theme.$heightOfGenericComponent + 10}px;
    height: ${props => props.theme.$heightOfGenericComponent}px;
`;

export default RoundIconButton = (props) => {

    const { underlayColor, customButtonStyle, onPress, customIconStyle } = props;

    return <Button onPress={onPress} underlayColor={underlayColor} style={customButtonStyle}>

        <IconContainer>
            <AwesomeIcon {...props} customIconStyle={customIconStyle} />
        </IconContainer>

    </Button>
}
