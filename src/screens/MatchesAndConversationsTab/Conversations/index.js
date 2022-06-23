import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

import ConversationsContent from './ConversationsContent';
import { P } from '@components/index';

const YouHaveNoConversationsContainer = styled.View`
    height: 70%;
    width: 100%;
    justify-content: center;
    align-items: center;
`;

export default function Conversations() {

    const doWeHaveConversations = useSelector(state => {
        const { matchedProfiles } = state.match;
        const { realTimeFirebaseChat } = state.firebase;
        return matchedProfiles.length > 0 && realTimeFirebaseChat.length > 0;
    });

    const YouHaveNoConversations = () => <YouHaveNoConversationsContainer>
        <P>{'Você ainda não iniciou nenhuma conversa.'}</P>
    </YouHaveNoConversationsContainer>

    return doWeHaveConversations ? <ConversationsContent /> : <YouHaveNoConversations />
}
