import React from 'react';
import styled from 'styled-components';

const Input = styled.TextInput`
    flex: 1;
    margin-left: 3px;
    margin-right: 3px;
    height: 100%;
    background-color: white;
    border-width: 1px;
    border-color: ${props => props.theme.$lightGray};
    border-radius: ${props => props.theme.$smallBorderRadius}px;
    padding-left: 10px;
    color: ${props => props.theme.$textColor};
`;

export default TextInput = (props) => {

    const {
        placeholder,
        value,
        onChangeText,
        secureTextEntry,
        returnKeyType,
        onSubmitEditing,
        keyboardType,
        reference,
        multiline,
        customInputStyle,
        textAlignVertical
    } = props;

    return <Input
        ref={reference}
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
}
