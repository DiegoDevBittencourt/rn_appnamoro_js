import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import UserProfile from './UserProfile';
import Configuration from './Configuration';
import ConfigurationEditor from './ConfigurationEditor';
import EditInfo from './EditInfo';

const ProfileNavigator = createStackNavigator();

const TheNavigator = () => {
    return <ProfileNavigator.Navigator mode={'card'} headerMode={'none'} initialRouteName='UserProfile'>
        <ProfileNavigator.Screen name="UserProfile" component={UserProfile} />
        <ProfileNavigator.Screen name="Configuration" component={Configuration} />
        <ProfileNavigator.Screen name="ConfigurationEditor" component={ConfigurationEditor} />
        <ProfileNavigator.Screen name="EditInfo" component={EditInfo} />
    </ProfileNavigator.Navigator>
}

export default function ProfileStackNavigator() {
    return <TheNavigator />
};
