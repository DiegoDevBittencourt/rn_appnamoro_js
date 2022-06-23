import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import { InfoText } from '@constants/InfoText';
import { GenericContainer } from '@components/index';
import MatchSearcherPlaceholder from './MatchSearcherPlaceholder';
import ProfileSelector from './ProfileSelector';
import ControlButtons from './ControlButtons';

const MainContainer = styled(GenericContainer)`
    background-color: ${props => props.theme.$darkerBackgroundColor};
`;

export default function MatchSearcherTab() {

    const { matchSearcherProfiles, isGettingProfileForTheMatchSearcher } = useSelector(state => state.match);
    const { showMeOnApp } = useSelector(state => state.user?.userData);
    const { isGeolocationEnabled, isGettingLocation } = useSelector(state => state.utils);
    const { weFoundAProblem, turnOnShowMeOnApp, turnOnLocation } = InfoText;

    const shouldRenderLoadingScreen = (isGettingProfileForTheMatchSearcher || isGettingProfileForTheMatchSearcher == null || isGettingLocation) && matchSearcherProfiles.length == 0;

    const MatchSeacherBody = shouldRenderLoadingScreen ? <MatchSearcherPlaceholder bodyText={'Buscando perfis...'} />
        :
        !showMeOnApp ? <MatchSearcherPlaceholder title={weFoundAProblem} bodyText={turnOnShowMeOnApp} />
            :
            !isGeolocationEnabled ? <MatchSearcherPlaceholder title={weFoundAProblem} bodyText={turnOnLocation} />
                :
                matchSearcherProfiles.length > 0 ? <ProfileSelector />
                    :
                    <MatchSearcherPlaceholder bodyText={'Oops, não encontramos ninguém próximo a você. Tente aumentar sua "Distância máxima" ou a\n"Faixa etária" no menu "Configurações".\nBoa sorte!'} />

    const ControlButtonSection = matchSearcherProfiles.length > 0 && <ControlButtons currentProfile={matchSearcherProfiles[0]} />

    return <MainContainer>

        {MatchSeacherBody}

        {ControlButtonSection}

    </MainContainer>
}
