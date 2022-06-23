import React, { useState, useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

import * as userThunk from '@store/user/thunk';
import { dangerNotification } from '~/utils/notifications';
import { handleUserBirthday, convertDateStringFromDDMMYYYYtoMMDDYYYY } from '~/utils/functions';
import * as Options from '~/utils/options';
import {
    TextInputRightIconButton,
    DatePickerButton,
    ModalSelector,
    GenericAppButton,
    GenericColumnView
} from '@components/index';

export default function CompleteYourProfileContent() {

    const dispatch = useDispatch();
    const navigation = useNavigation();

    const { userData } = useSelector(state => state.user);

    const [birthdayLocal, setBirthdayLocal] = useState();
    const [genderLocal, setGenderLocal] = useState(null);
    const [searchingByLocal, setSearchingByLocal] = useState(null);
    const [schoolingLocal, setSchoolingLocal] = useState(null);
    const [phoneLocal, setPhoneLocal] = useState('');
    const [company, setCompany] = useState('');
    const [position, setPosition] = useState('');

    const tiCompany = useRef();
    const tiPosition = useRef();

    useEffect(() => {

        const { birthday, gender, searchingBy, phone } = userData;

        setBirthdayLocal(handleUserBirthday(birthday));

        setGenderLocal(gender);
        setSearchingByLocal(searchingBy);
        setPhoneLocal(phone);
    }, [userData]);

    const updateUserInfo = async () => {
        if (birthdayLocal && genderLocal && searchingByLocal && schoolingLocal && position) {

            const userData = ({
                birthday: convertDateStringFromDDMMYYYYtoMMDDYYYY(birthdayLocal),
                gender: genderLocal.key,
                searchingBy: searchingByLocal.key,
                schooling: schoolingLocal.key,
                phone: phoneLocal,
                company,
                position,
                profileComplete: 1,
                showMeOnApp: 1
            });

            dispatch(userThunk.updateUser(userData, true)).then(() => navigation.goBack());
        }
        else dangerNotification('"Dt. de nascimento", "Gênero", "Procuro por", "Escolaridade" e "Cargo" são campos obrigatórios.');
    }

    return <GenericColumnView>

        <DatePickerButton
            selectedDate={birthdayLocal}
            updateSelectedDate={(selectedDate) => setBirthdayLocal(selectedDate)}
        />

        <ModalSelector
            title={'Meu gênero'}
            data={Options.genderOptions()}
            selectedItem={genderLocal}
            handleChange={(selectedItem) => setGenderLocal(selectedItem)}
        />

        <ModalSelector
            title={'Procuro por'}
            data={Options.searchingByOptions()}
            selectedItem={searchingByLocal}
            handleChange={(selectedItem) => setSearchingByLocal(selectedItem)}
        />

        <ModalSelector
            title={'Escolaridade'}
            data={Options.schoolingOptions()}
            selectedItem={schoolingLocal}
            handleChange={(selectedItem) => setSchoolingLocal(selectedItem)}
        />

        <TextInputRightIconButton
            placeholder={'Telefone'}
            keyboardType={'number-pad'}
            value={phoneLocal}
            returnKeyType={'next'}
            onChangeText={(value) => setPhoneLocal(value)}
            onSubmitEditing={() => tiCompany.current.focus()}
        />

        <TextInputRightIconButton
            reference={tiCompany}
            placeholder={'Empresa onde trabalha'}
            value={company}
            returnKeyType={'next'}
            onChangeText={(value) => setCompany(value)}
            onSubmitEditing={() => tiPosition.current.focus()}
        />

        <TextInputRightIconButton
            reference={tiPosition}
            placeholder={'Cargo'}
            value={position}
            onChangeText={(value) => setPosition(value)}
        />

        <GenericAppButton
            customButtonStyle={{ margin: 30, width: 'auto' }}
            textButton={'CONTINUAR'}
            onPress={() => updateUserInfo()}
        />

    </GenericColumnView>
}
