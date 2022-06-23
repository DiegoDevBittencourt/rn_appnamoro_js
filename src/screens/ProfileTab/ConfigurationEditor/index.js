import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

import { GenericContainer, SectionTitle } from '@components/index';
import EmailEditor from './EmailEditor';
import PhoneEditor from './PhoneEditor';
import LocationEditor from './LocationEditor';
import SearchingByEditor from './SearchingByEditor';
import ConfigToolbar from '@screens/ProfileTab/Configuration/ConfigToolbar';

const MainContainer = styled(GenericContainer)`
    background-color: ${props => props.theme.$darkerBackgroundColor};
`;

export default function ConfigurationEditor(props) {

    const { selectedConfigMenu, selectedConfigMenuTitle } = useSelector(state => state.dashboard);

    const RenderBody = () => {
        switch (selectedConfigMenu) {
            case 'emailEditor':
                return <EmailEditor />
            case 'phoneEditor':
                return <PhoneEditor navigation={props.navigation} />
            case 'locationEditor':
                return <LocationEditor />
            case 'searchingByEditor':
                return <SearchingByEditor />
            default:
                return null;
        }
    }

    return <MainContainer>

        <ConfigToolbar {...props} />

        <SectionTitle titleText={selectedConfigMenuTitle} />

        <RenderBody />

    </MainContainer>
}
