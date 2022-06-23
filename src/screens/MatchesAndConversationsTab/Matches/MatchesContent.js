import React from 'react';
import { useSelector } from 'react-redux';

import MatchItem from './MatchItem';
import { GenericDataList } from '@components/index';

export default function MatchesContent() {

    const { matchedProfiles } = useSelector(state => state.match);

    const MatchItemFL = ({ item }) => <MatchItem matchedProfile={item} />

    return <GenericDataList
        horizontal
        data={matchedProfiles}
        keyExtractor={item => item.id.toString()}
        renderItem={MatchItemFL}
    />
}
