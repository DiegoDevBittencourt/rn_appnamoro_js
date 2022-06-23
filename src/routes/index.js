import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { modalOptions } from '@constants/ModalOptions';
import Login from '@screens/Login';
import Dashboard from '@screens/Dashboard';
import ForgotPasswordModal from '@modals/ForgotPassword';
import SignUpModal from '@modals/SignUp';
import TurnOnLocationModal from '@modals/TurnOnLocation';
import GenericYesNoModal from '@modals/GenericYesNoModal';
import ContactModal from '@modals/Contact';
import CompleteYourProfileModal from '@modals/CompleteYourProfile';
import ChatModal from '@modals/Chat';

const MainStack = createStackNavigator();
const RootStack = createStackNavigator();

const MainStackNavigator = () => {
    return <MainStack.Navigator mode={'card'} headerMode={'none'} initialRouteName='Dashboard'>
        <MainStack.Screen name="Login" component={Login} />
        <MainStack.Screen name="Dashboard" component={Dashboard} />
    </MainStack.Navigator>
}

const RootStackNavigator = () => {
    return <RootStack.Navigator mode={'modal'} headerMode={'none'}>
        <RootStack.Screen name="MainStack" component={MainStackNavigator} />
        <RootStack.Screen options={modalOptions} name="ForgotPasswordModal" component={ForgotPasswordModal} />
        <RootStack.Screen options={modalOptions} name="SignUpModal" component={SignUpModal} />
        <RootStack.Screen options={modalOptions} name="CompleteYourProfileModal" component={CompleteYourProfileModal} />
        <RootStack.Screen options={modalOptions} name="TurnOnLocationModal" component={TurnOnLocationModal} />
        <RootStack.Screen options={modalOptions} name="GenericYesNoModal" component={GenericYesNoModal} />
        <RootStack.Screen options={modalOptions} name="ContactModal" component={ContactModal} />
        <RootStack.Screen options={modalOptions} name="ChatModal" component={ChatModal} />
    </RootStack.Navigator>
}

export default function Application() {
    return <RootStackNavigator />
};
