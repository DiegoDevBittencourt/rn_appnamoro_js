import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';

import * as userActions from '@store/user/actions';
import * as authActions from '@store/auth/actions';
import * as authThunk from '@store/auth/thunk';
import { decodeJwtToken } from '~/utils/functions';
import DashboardTabNavigator from './DashboardTabNavigator';
import { GenericContainer } from '@components/index';

export default function Dashboard() {

    const dispatch = useDispatch();

    useEffect(() => {
        dashboardInitialization();
    }, []);

    const dashboardInitialization = async () => {

        const accessToken = await AsyncStorage.getItem('accessToken');

        //needs the id to be used when download data from resource server:
        dispatch(userActions.updateUserDataOnRedux({ id: decodeJwtToken(accessToken).id }));
        dispatch(authActions.updateAccessTokenOnRedux(accessToken));
        dispatch(authThunk.checkIfTokenHasExpired());
    }

    return <GenericContainer>
        <DashboardTabNavigator />
    </GenericContainer>
}
