import React from 'react';
import styled from 'styled-components';

import { GenericColumnView } from '@components/index';
import UserPersonalInfo from './UserPersonalInfo';
import ControlButtonsContainer from './ControlButtonsContainer';

const TheCircle = styled(GenericColumnView)`
    align-self: center;
    height: 1500px;
    width: 1500px;
    margin-bottom: 50px;
    background-color: white;
    border-radius: 3000px;
    elevation: 2;
    justify-content: flex-end;
    align-items: center;
`;

export default function ProfileCircle() {
    return <TheCircle>

        <UserPersonalInfo />

        <ControlButtonsContainer />

    </TheCircle>
}
