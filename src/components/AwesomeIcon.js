import React from 'react';
import styled from 'styled-components';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';

const Awesome5Icon = styled(FontAwesome)`
    font-size: 18px;
`;

const EvilIcon = styled(EvilIcons)`
    font-size: 18px;
`;

const IconContainer = styled.View`
    flex-direction: row;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: ${props => props.theme.$heightOfGenericComponent}px;
    height: ${props => props.theme.$heightOfGenericComponent}px;
`;

export default AwesomeIcon = ({ customIconContainer, evilIcon, iconName, customIconStyle, solidIcon }) => {
    return <IconContainer style={customIconContainer}>
        {
            evilIcon ?
                <EvilIcon name={iconName} style={customIconStyle} solid={solidIcon} />
                : <Awesome5Icon name={iconName} style={customIconStyle} solid={solidIcon} />
        }
    </IconContainer>
}
