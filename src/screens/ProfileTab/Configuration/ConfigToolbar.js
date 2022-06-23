import React from 'react';

import { theme } from '@constants/StyledComponentsTheme';
import { Toolbar } from '@components/index';

export default function ConfigToolbar(props) {
    return <Toolbar
        leftElement={'arrow-back'}
        customLeftElement={{ color: 'white' }}
        onLeftElementPress={() => props.navigation.goBack()}
        title={'Configurações'}
        customTitleText={{ alignSelf: 'flex-start', color: 'white' }}
        showSearchIcon={false}
        customContainerStyle={{ backgroundColor: theme.$primaryColor }}
    />
}
