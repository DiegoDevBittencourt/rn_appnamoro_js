import React from 'react';
import styled from 'styled-components';

import GenericRowView from './GenericRowView';
import AwesomeIcon from './AwesomeIcon';

const ButtonContainer = styled(GenericRowView)`
    align-items: center;
`;

const Button = styled.TouchableHighlight`
    height: ${props => props.theme.$heightOfGenericComponent}px;
    width: 100%;
    justify-content: center;
    border-radius: ${props => props.theme.$smallBorderRadius}px;
    margin-top: 10px;
`;

const ButtonText = styled.Text`
    color: white;
    font-size: 17px;
`;

const IconContainer = styled.View`
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: ${props => props.theme.$heightOfGenericComponent + 10}px;
    height: ${props => props.theme.$heightOfGenericComponent}px;
`;

export default SocialButton = (props) => {
    return <Button style={props.customButtonStyle} underlayColor={props.underlayColor} onPress={() => props.onPress()}>
        <ButtonContainer>

            <IconContainer>
                <AwesomeIcon {...props} customIconStyle={{ color: 'white' }} />
            </IconContainer>

            <ButtonText>
                {'Entrar com '}
                <ButtonText style={{ fontWeight: 'bold' }}>{props.text}</ButtonText>
            </ButtonText>

        </ButtonContainer>
    </Button>
}
