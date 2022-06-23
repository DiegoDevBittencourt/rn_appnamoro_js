import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

if (__DEV__) { import('@config/ReactotronConfig').then(() => console.warn('Reactotron Configured')) };

import { navigationRef } from '@routes/RootNavigationRef';
import Routes from '@routes/index';

export default function Application() {
    return <NavigationContainer ref={navigationRef}>
        <Routes />
    </NavigationContainer>
};
