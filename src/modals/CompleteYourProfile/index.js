import React, { useEffect } from "react";
import { BackHandler } from 'react-native';
import { useDispatch } from "react-redux";

import * as authThunk from '@store/auth/thunk';
import CompleteYourProfileContent from './CompleteYourProfileContent';
import { GenericModalContainer } from '@components/index';

export default function CompleteYourProfile() {

    const dispatch = useDispatch();

    useEffect(() => {
        BackHandler.addEventListener('hardwareBackPress', handleCloseButtonPress)

        return () => {
            BackHandler.removeEventListener('hardwareBackPress', handleCloseButtonPress)
        }
    }, [])

    const handleCloseButtonPress = () => {
        dispatch(authThunk.signOut());
    }

    return <GenericModalContainer closeButtonPress={() => handleCloseButtonPress()} title={'Vamos completar seu perfil!'}>
        <CompleteYourProfileContent />
    </GenericModalContainer>
}
