import React from 'react';
import styled from 'styled-components';

import GenericRowView from './GenericRowView';
import AwesomeIcon from './AwesomeIcon';
import TextInput from './TextInput';

const MainContainer = styled(GenericRowView)`
    height: ${props => props.theme.$heightOfGenericComponent}px;
    width: 100%;
    margin-top: 10px;
    background-color: ${props => props.theme.$lightGray};
    border-radius: ${props => props.theme.$smallBorderRadius}px;
    padding: 0.5px;
    align-items: center;
    align-self: center;
`;

const Button = styled.TouchableHighlight`
    height: 100%;
    width: ${props => props.theme.$heightOfGenericComponent}px;
    justify-content: center;
    background-color: ${props => props.theme.$lightGray};
    border-top-right-radius: ${props => props.theme.$smallBorderRadius}px;
    border-bottom-right-radius: ${props => props.theme.$smallBorderRadius}px;
`;

export default TextInputRightIconButton = (props) => {

    const {
        placeholder,
        value,
        onChangeText,
        secureTextEntry,
        returnKeyType,
        onSubmitEditing,
        keyboardType,
        reference,
        showRightButton,
        customButtonStyle,
        underlayColor,
        multiline,
        customContainerStyle,
        customInputStyle,
        textAlignVertical,
        onButtonPress
    } = props;

    return <MainContainer style={customContainerStyle}>
        <TextInput
            reference={reference}
            style={customInputStyle}
            placeholder={placeholder}
            value={value}
            onChangeText={onChangeText}
            secureTextEntry={secureTextEntry}
            returnKeyType={returnKeyType}
            onSubmitEditing={onSubmitEditing}
            keyboardType={keyboardType}
            multiline={multiline}
            textAlignVertical={textAlignVertical}
        />

        {
            showRightButton &&
            <Button
                style={customButtonStyle}
                underlayColor={underlayColor}
                onPress={onButtonPress}>
                <AwesomeIcon {...props} />
            </Button>
        }
    </MainContainer >
}
