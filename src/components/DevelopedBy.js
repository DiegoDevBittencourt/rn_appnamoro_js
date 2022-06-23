import React from 'react';
import styled from 'styled-components';

import { theme } from '@constants/StyledComponentsTheme';
import GenericColumnView from './GenericColumnView';
import AwesomeIcon from './AwesomeIcon';
import P from './P';

const DevelopedByContainer = styled(GenericColumnView)`
    width: 100%;
    align-items: center;
    justify-content: center;
`;

const P1 = styled(P)`
    font-weight: bold;
    color: #202020;
    margin-top: 8px;
    font-size: 14px;
`;

const P2 = styled(P)`
    margin-top: 10px;
    font-size: 13px;
`;

const P3 = styled(P)`
    font-size: 11px;
    margin-top: 4px;
    margin-bottom: 10px;
`;

export default DevelopedBy = () => {
    return <DevelopedByContainer>

        <P2>{'DESENVOLVIDO POR'}</P2>

        <P1>
            {'DIEGO DEV BITTENCOURT'}
            <AwesomeIcon
                customIconContainer={{ height: 12, width: 30 }}
                iconName={'vr-cardboard'}
                customIconStyle={{ color: theme.$primaryColor, marginLeft: 3 }}
            />
        </P1>

        <P3>{'DIEGO6D@GMAIL.COM'}</P3>

    </DevelopedByContainer>
}
