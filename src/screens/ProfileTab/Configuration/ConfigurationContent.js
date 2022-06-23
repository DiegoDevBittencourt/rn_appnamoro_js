import React, { useState, useEffect } from 'react';
import { Linking } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

import { theme } from '@constants/StyledComponentsTheme';
import * as userThunk from '@store/user/thunk';
import * as dashboardActions from '@store/dashboard/actions';
import {
    SectionTitle,
    ConfigItem,
    MultiSlider,
    DevelopedBy,
    AppVersion,
    GenericScrollView
} from '@components/index';

export default function ConfigurationContent() {

    const dispatch = useDispatch();
    const navigation = useNavigation();

    const {
        email,
        phone,
        address,
        searchingBy,
        maxDistance,
        ageRange,
        showMeOnApp,
        emailNotification,
        pushNotification
    } = useSelector(state => state.user?.userData);

    const { userData } = useSelector(state => state.user);

    const [maxDistanceLocal, setMaxDistanceLocal] = useState([maxDistance]);
    const [ageRangeLocal, setAgeRangeLocal] = useState([ageRange[0], ageRange[1]]);
    const [showMeOnAppLocal, setShowMeOnAppLocal] = useState(showMeOnApp);
    const [emailNotificationLocal, setEmailNotificationLocal] = useState(emailNotification);
    const [pushNotificationLocal, setPushNotificationLocal] = useState(pushNotification);

    useEffect(() => {
        setMaxDistanceLocal([maxDistance]);
        setAgeRangeLocal([ageRange[0], ageRange[1]]);
        setShowMeOnAppLocal(showMeOnApp);
        setEmailNotificationLocal(emailNotification);
        setPushNotificationLocal(pushNotification);
    }, [userData]);

    const multiSliderCustomStyle = {
        backgroundColor: 'white',
        borderColor: theme.$lightGray,
        borderWidth: 1,
        marginBottom: -1,
        height: 90
    };

    const handleDeleteAccountPress = () => {
        navigation.push('GenericYesNoModal', {
            title: 'Excluir conta?',
            subtitle: 'Todos os dados serão apagados. Esta ação não pode ser desfeita!',
            acceptText: 'Excluir',
            denyText: 'Cancelar',
            selectedMethod: 'genericYesNoModalDeleteAccount'
        });
    }

    const setSelectedConfigMenuAndChangeScreen = (selectedMenu, selectedConfigMenuTitle) => {
        dispatch(dashboardActions.setSelectedConfigMenu(selectedMenu, selectedConfigMenuTitle));

        changeScreen('ConfigurationEditor');
    }

    const changeScreen = (screenName) => navigation.push(screenName);

    const updateUserData = (newUserData, CleanMatchSearcherArrayAndGetNextProfile) => dispatch(
        userThunk.updateUser(newUserData, false, CleanMatchSearcherArrayAndGetNextProfile)
    );

    const handleTermsPress = () => Linking.openURL('https://www.appnamoro.com/terms');

    return <GenericScrollView>

        <SectionTitle titleText='CONFIGURAÇÕES DA CONTA' />

        <ConfigItem
            leftText='E-mail'
            rightText={email}
            onPress={() => setSelectedConfigMenuAndChangeScreen('emailEditor', 'SEU EMAIL')}
        />

        <ConfigItem
            leftText='Número de telefone'
            rightText={phone}
            onPress={() => setSelectedConfigMenuAndChangeScreen('phoneEditor', 'SEU TELEFONE')}
        />

        <SectionTitle titleText='AJUSTES DE DESCOBERTA' />

        <ConfigItem
            onPress={() => setSelectedConfigMenuAndChangeScreen('locationEditor', 'LOCALIZAÇÃO')}
            leftText='Localização'
            rightText={address ? address : 'Não definida'}
        />

        <MultiSlider
            title={'Faixa etária'}
            customContainerStyle={multiSliderCustomStyle}
            values={ageRangeLocal}
            onValuesChange={(value) => setAgeRangeLocal([value[0], value[1]])}
            onValuesChangeFinish={() => updateUserData({ ageRange: `${ageRangeLocal[0]},${ageRangeLocal[1]}` }, true)}
            min={18}
            max={55}
        />

        <MultiSlider
            title={'Distância máxima'}
            values={maxDistanceLocal}
            customContainerStyle={multiSliderCustomStyle}
            rightText={'km'}
            onValuesChange={(value) => setMaxDistanceLocal(value)}
            onValuesChangeFinish={(value) => updateUserData({ maxDistance: value[0] }, true)}
            min={2}
            max={500}
        />

        <ConfigItem
            leftText='Procurando por'
            rightText={searchingBy.label}
            onPress={() => setSelectedConfigMenuAndChangeScreen('searchingByEditor', 'PROCURO POR')}
        />

        <ConfigItem
            handleSwitchChange={(value) => { setShowMeOnAppLocal(value), updateUserData({ showMeOnApp: value }) }}
            leftText='Mostrar-me no App'
            isThisSwitch
            isSwitchOn={showMeOnAppLocal}
        />

        <SectionTitle titleText='NOTIFICAÇÕES' />

        <ConfigItem
            handleSwitchChange={(value) => {
                setEmailNotificationLocal(value), updateUserData({ emailNotification: value })
            }}
            leftText='Email'
            isThisSwitch
            isSwitchOn={emailNotificationLocal}
        />

        <ConfigItem
            handleSwitchChange={(value) => {
                setPushNotificationLocal(value), updateUserData({ pushNotification: value })
            }}
            leftText='Notificações por Push'
            isThisSwitch
            isSwitchOn={pushNotificationLocal}
        />

        <SectionTitle titleText='CONTATO' />

        <ConfigItem onPress={() => changeScreen('ContactModal')} leftText='Ajuda e Suporte' />

        <SectionTitle titleText='JURÍDICO' />

        <ConfigItem onPress={handleTermsPress} leftText='Termos de uso' />

        <SectionTitle titleText='ZONA DE PERIGO' />

        <ConfigItem
            leftText='Excluir conta'
            onPress={handleDeleteAccountPress}
        />

        <DevelopedBy />

        <AppVersion />

    </GenericScrollView>
}
