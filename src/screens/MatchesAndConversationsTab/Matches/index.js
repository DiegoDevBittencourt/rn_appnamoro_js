import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

import MatchesContent from './MatchesContent';
import { P } from '@components/index';

const YouHaveNoMatchesContainer = styled.View`
    height: 70%;
    width: 100%;
    justify-content: center;
    align-items: center;
`;

export default function Matches() {

    const matchedProfilesLength = useSelector(state => {
        const { matchedProfiles } = state.match;
        return matchedProfiles.length;
    });

    const YouHaveNoMatches = () => <YouHaveNoMatchesContainer>
        <P>{'Você ainda não tem nenhuma match!'}</P>
    </YouHaveNoMatchesContainer>

    return matchedProfilesLength > 0 ? <MatchesContent /> : <YouHaveNoMatches />
}
