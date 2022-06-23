import React from 'react';
import styled from 'styled-components';
import LinearGradient from 'react-native-linear-gradient';

import { theme } from '@constants/StyledComponentsTheme';

const Button = styled.TouchableHighlight`
    height: ${props => props.theme.$heightOfGenericComponent}px;
    width: 100%;
    max-width: 350px;
    justify-content: center;
    align-items: center;
    border-radius: ${props => props.theme.$bigBorderRadius}px;
`;

const ButtonText = styled.Text`
    color: white;
    font-size: 17px;
`;

const Gradient = styled(LinearGradient)`
    height: 100%;
    width: 100%;
    justify-content: center;
    align-items: center;
    border-radius: ${props => props.theme.$bigBorderRadius}px;
`;

export default GenericAppButton = ({ customButtonStyle, underlayColor, onPress, textButton, enable }) => {

    const { $lightGray, $degradeColor_1, $degradeColor_2 } = theme;

    const customButtonStyleLocal = {
        backgroundColor: !enable && $lightGray
    };

    return <Button
        style={[customButtonStyleLocal, customButtonStyle]}
        underlayColor={!enable ? $lightGray : underlayColor}
        onPress={onPress}
    >
        {
            !enable && enable != undefined ?
                <ButtonText>{textButton}</ButtonText>
                :
                <Gradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={[$degradeColor_1, $degradeColor_2]}>
                    <ButtonText>{textButton}</ButtonText>
                </Gradient>
        }
    </Button >
}
