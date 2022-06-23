import React from 'react';
import styled from 'styled-components';

import { theme } from '@constants/StyledComponentsTheme';

const MainContainer = styled.View`
    min-height: 50px;
    height: auto;
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 3px;
`;

const MessageContainer = styled.View`
    min-height: 50px;
    height: auto;
    min-width: 60px;
    max-width: 80%;
    justify-content: center;
    border-radius: ${props => props.theme.$bigBorderRadius}px;
    padding: 15px;
`;

const MessageText = styled.Text`
    font-size: 16px;
    margin-bottom: 6px;
`;

const TimeText = styled.Text`
    font-size: 11px;
    position: absolute;
    bottom: 3px;
`;

export default class MessageItem extends React.PureComponent {
    render() {
        const { messageItem, userId } = this.props;
        const { message, hourMinute, userId_1 } = messageItem;
        const { $myChatMessageColor, $notMyChatMessageColor, $bigBorderRadius, $textColor } = theme;

        const customContainerStyle = { alignItems: userId_1 == userId ? 'flex-end' : 'flex-start' };

        const customMessageContainerStyle = {
            backgroundColor: userId_1 == userId ? $myChatMessageColor : $notMyChatMessageColor,
            borderBottomRightRadius: userId_1 == userId ? 0 : $bigBorderRadius,
            borderBottomLeftRadius: userId_1 != userId ? 0 : $bigBorderRadius
        };

        const customTextStyle = { color: userId_1 == userId ? 'white' : $textColor };

        const customTimeStyle = userId_1 == userId ? { right: 5 } : { left: 5 };

        return <MainContainer style={customContainerStyle}>

            <MessageContainer style={customMessageContainerStyle}>

                <MessageText style={customTextStyle}>{message}</MessageText>
                <TimeText style={[customTextStyle, customTimeStyle]}>{hourMinute}</TimeText>

            </MessageContainer>

        </MainContainer>
    }
}
