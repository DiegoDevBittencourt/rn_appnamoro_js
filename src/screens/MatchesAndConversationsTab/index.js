import React from 'react';
import styled from 'styled-components';

import { theme } from '@constants/StyledComponentsTheme';
import { GenericColumnView, GenericContainer, SectionTitle } from '@components/index';
import Matches from './Matches';
import Conversations from './Conversations';

const MatchesContainer = styled(GenericColumnView)`
    height: 160px;
`;

const ConversationsContainer = styled(GenericColumnView)`
    flex: 1;
`;

export default function MatchesAndConversationsTab() {

    const CustomTitle = ({ title }) => <SectionTitle
        titleText={title}
        customTitleStyle={{
            color: theme.$primaryColor,
            fontSize: 16
        }}
    />

    return <GenericContainer style={{ backgroundColor: 'white' }}>

        <MatchesContainer>
            <CustomTitle title={'Suas Matches'} />
            <Matches />
        </MatchesContainer>

        <ConversationsContainer>
            <CustomTitle title={'Mensagens'} />
            <Conversations />
        </ConversationsContainer>

    </GenericContainer>
}
