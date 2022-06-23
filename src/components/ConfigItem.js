import React from 'react';
import styled from 'styled-components';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import { Switch } from 'react-native';

import { theme } from '@constants/StyledComponentsTheme';
import GenericRowView from './GenericRowView';
import P from './P';

const Button = styled.TouchableHighlight`
    height: ${props => props.theme.$heightOfGenericComponent}px;
    width: 100%;
    margin-bottom: -1px;
    background-color: white;
    border-width: 1px;
    border-color: ${props => props.theme.$lightGray};
`;

const ButtonContainer = styled(GenericRowView)`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

const LeftText = styled(P)`
    flex: 1;
    margin-left: 10px;
    color: ${props => props.theme.$lightTextColor};
    font-size: 14px;
    text-align: left;
`;

const RightText = styled(P)`
    flex: 1;
    margin-right: 10px;
    color: ${props => props.theme.$lightTextColor};
    font-size: 13px;
    text-align: right;
`;

const Awesome5Icon = styled(FontAwesome)`
    font-size: 14px;
    margin-right: 5px;
    color: ${props => props.theme.$gray};
`;

export default ConfigItem = ({ leftText,
    rightText,
    onPress,
    isThisSwitch,
    isSwitchOn,
    handleSwitchChange,
    customButtonStyle,
    rightIconName
}) => {

    const { $primaryColor, $lightGray, $gray } = theme;

    const RightElement = () => {
        return isThisSwitch ?
            <Switch
                trackColor={{ false: $gray, true: $gray }}
                thumbColor={isSwitchOn ? $primaryColor : $lightGray}
                ios_backgroundColor="#3e3e3e"
                onValueChange={handleSwitchChange}
                value={isSwitchOn}
            />
            :
            <ButtonContainer>
                <RightText>{rightText}</RightText>
                {rightIconName != 'none' && <Awesome5Icon name={rightIconName ? rightIconName : 'chevron-right'} />}
            </ButtonContainer>
    }

    const LeftElement = () => <LeftText>{leftText}</LeftText>

    return <Button style={customButtonStyle} underlayColor={$lightGray} onPress={onPress}>
        <ButtonContainer>

            <LeftElement />

            <RightElement />

        </ButtonContainer>
    </Button>
}
