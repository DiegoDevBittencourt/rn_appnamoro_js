import React from "react";
import styled from 'styled-components';

import { GenericContainer } from '@components/index';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';

export const ChatContainer = styled(GenericContainer)`
    background-color: white;
`;

export default function Chat(props) {

    return <ChatContainer>

        <Header {...props.route.params} />

        <Body {...props.route.params} />

        <Footer {...props.route.params} />

    </ChatContainer>
}
