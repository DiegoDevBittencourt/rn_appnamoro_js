import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import SwipeCards from 'react-native-swipe-cards';
import { useDispatch, useSelector } from 'react-redux';

import * as matchActions from '@store/match/actions';
import { GenericContainer } from '@components/index';
import ProfileCard from './ProfileCard';
import { theme } from '@constants/StyledComponentsTheme';
import { ignoreCurrentProfile, likeCurrentProfile } from './MatchSearcherFunctions';
import MatchSearcherPlaceholder from './MatchSearcherPlaceholder';

const MainContainer = styled(GenericContainer)`
    flex: 1;
    padding-top: 15px;
    padding-left: 15px;
    padding-right: 15px;
`;

export default function ProfileSelector() {

    const dispatch = useDispatch();
    var swipeCardRef = useRef();

    const { matchSearcherProfiles, isSuperLikeAvailable } = useSelector(state => state.match);
    const { $lightBlue, $green, $red } = theme;

    const handleLikeCurrentProfile = (superLike, currentProfile) => likeCurrentProfile(dispatch, superLike, currentProfile);

    useEffect(() => {
        dispatch(matchActions.updateSwipeCardRef(swipeCardRef));
    }, []);

    return <MainContainer>
        <SwipeCards
            ref={ref => { swipeCardRef = ref }}
            keyExtractor={item => item.id.toString()}
            cards={matchSearcherProfiles}
            renderNoMoreCards={() => <MatchSearcherPlaceholder bodyText={'Buscando perfis...'} />}
            renderCard={(cardData) => <ProfileCard {...cardData} />}
            smoothTransition={false}
            yupText={'Gostei'}
            yupStyle={{ borderColor: $green }}
            yupTextStyle={{ color: $green }}
            handleYup={(cardData) => handleLikeCurrentProfile(false, cardData)}

            nopeText={'Não gostei'}
            nopeStyle={{ borderColor: $red }}
            nopeTextStyle={{ color: $red }}
            handleNope={(cardData) => ignoreCurrentProfile(dispatch, cardData?.id)}

            showMaybe={isSuperLikeAvailable}
            hasMaybeAction={isSuperLikeAvailable}
            maybeText={'Super Like'}
            maybeStyle={{ borderColor: $lightBlue }}
            maybeTextStyle={{ color: $lightBlue }}
            handleMaybe={(cardData) => isSuperLikeAvailable && handleLikeCurrentProfile(true, cardData)}
        />
    </MainContainer>
}
