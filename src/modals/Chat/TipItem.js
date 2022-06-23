import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { RoundImage } from '@components/index';

const TipContainer = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
`;

const TipText = styled.Text`
    font-size: 16px;
    margin-bottom: 6px;
    color: ${props => props.theme.$textColor};
    padding: 30px;
`;

const tips = [
    'Quebre barreiras!',
    'Faça uma piada sobre si mesmo.',
    'Elogios nunca são demais!',
    'Seja artístico!',
    'Convidar para comer nunca fez mal a ninguém!',
    'Não tenha medo de ser vulnerável!'
];

export default function TipItem({ profileImage }) {

    const [tipIndex, setTipIndex] = useState([Math.floor(Math.random() * tips.length)]);

    useEffect(() => {
        //sets a random number to show a random tip message to the user:
        setTipIndex([Math.floor(Math.random() * tips.length)]);
    }, []);

    return <TipContainer>

        <RoundImage customImageStyle={{ height: 150, width: 150, borderRadius: 100 }} source={profileImage} />

        <TipText>{tips[tipIndex]}</TipText>

    </TipContainer>
}
