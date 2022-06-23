import React, { useState, useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { useNavigation } from '@react-navigation/native';

import * as userThunk from '@store/user/thunk';
import * as Options from '~/utils/options';
import {
    TextInputRightIconButton,
    DatePickerButton,
    ModalSelector,
    GenericAppButton,
    SectionTitle,
    GenericContainer
} from '@components/index';
import { handleUserBirthday, convertDateStringFromDDMMYYYYtoMMDDYYYY } from '~/utils/functions';

const UserInfoEditorContainer = styled(GenericContainer)`
    height: auto;
    padding-right: 10px;
    padding-left: 10px;
    align-items: center;
`;

export default function UserInfoEditor() {

    const dispatch = useDispatch();
    const navigation = useNavigation();

    const { firstName, lastName } = useSelector(state => state.user.userData);
    const { userData } = useSelector(state => state.user);

    const [aboutLocal, setAboutLocal] = useState();
    const [birthdayLocal, setBirthdayLocal] = useState();
    const [genderLocal, setGenderLocal] = useState();
    const [schoolingLocal, setSchoolingLocal] = useState();
    const [companyLocal, setCompanyLocal] = useState();
    const [positionLocal, setPositionLocal] = useState();

    const tiCompany = useRef();
    const tiPosition = useRef();

    useEffect(() => {

        const { about, birthday, gender, schooling, company, position } = userData;

        setAboutLocal(about);

        setBirthdayLocal(handleUserBirthday(birthday));

        setGenderLocal(gender);
        setSchoolingLocal(schooling);
        setCompanyLocal(company);
        setPositionLocal(position);
    }, [userData]);

    const updateUserInfo = async () => {
        const user = ({
            about: aboutLocal,
            birthday: convertDateStringFromDDMMYYYYtoMMDDYYYY(birthdayLocal),
            gender: genderLocal.key,
            company: companyLocal,
            position: positionLocal
        });

        dispatch(userThunk.updateUser(user, true)).then(() => navigation.goBack());
    }

    return <UserInfoEditorContainer>

        <SectionTitle titleText={`SOBRE ${firstName.toUpperCase()} ${lastName.toUpperCase()}`} />
        <TextInputRightIconButton
            placeholder={'Escreva algo sobre você'}
            value={aboutLocal}
            returnKeyType={'next'}
            multiline
            onChangeText={(value) => setAboutLocal(value)}
            customContainerStyle={{ height: 200 }}
            textAlignVertical='top'
        />

        <SectionTitle titleText='DATA DE NASCIMENTO' />
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
            title={'Escolaridade'}
            data={Options.schoolingOptions()}
            selectedItem={schoolingLocal}
            handleChange={(selectedItem) => setSchoolingLocal(selectedItem)}
        />

        <SectionTitle titleText='EMPRESA ONDE TRABALHA' />
        <TextInputRightIconButton
            reference={tiCompany}
            placeholder={'Empresa onde trabalha'}
            value={companyLocal}
            returnKeyType={'next'}
            onChangeText={(value) => setCompanyLocal(value)}
            onSubmitEditing={() => tiPosition.current.focus()}
        />

        <SectionTitle titleText='CARGO' />
        <TextInputRightIconButton
            reference={tiPosition}
            placeholder={'Cargo'}
            value={positionLocal}
            onChangeText={(value) => setPositionLocal(value)}
        />

        <GenericAppButton
            customButtonStyle={{ margin: 30 }}
            textButton={'SALVAR'}
            onPress={updateUserInfo}
        />

    </UserInfoEditorContainer>
}
