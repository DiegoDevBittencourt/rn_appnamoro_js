import React, { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

import * as dashboardThunk from '@store/dashboard/thunk';
import { emailValidator } from '~/utils/functions';
import { dangerNotification } from '~/utils/notifications';
import { TextInputRightIconButton, GenericAppButton, GenericColumnView } from '@components/index';

export default function SignUpFields() {

    const dispatch = useDispatch();
    const navigation = useNavigation();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const tiEmail = useRef();
    const tiSubject = useRef();
    const tiMessage = useRef();

    const sendNewUserContact = async () => {

        if (emailValidator(email)) {

            name && email && subject && message ?
                dispatch(dashboardThunk.sendNewUserContact(name, email, subject, message))
                .then(() => navigation.goBack())
                :
                dangerNotification('Preencha todos os campos antes de continuar.');

        }
        else dangerNotification('Digite um email válido!');
    }

    return <GenericColumnView>

        <TextInputRightIconButton
            placeholder={'Nome'}
            value={name}
            returnKeyType={'next'}
            onChangeText={(value) => setName(value)}
            onSubmitEditing={() => tiEmail.current.focus()}
        />

        <TextInputRightIconButton
            reference={tiEmail}
            placeholder={'Email'}
            keyboardType={'email-address'}
            value={email}
            returnKeyType={'next'}
            onChangeText={(value) => setEmail(value)}
            onSubmitEditing={() => tiSubject.current.focus()}
        />

        <TextInputRightIconButton
            reference={tiSubject}
            placeholder={'Assunto'}
            value={subject}
            returnKeyType={'next'}
            onChangeText={(value) => setSubject(value)}
            onSubmitEditing={() => tiMessage.current.focus()}
        />

        <TextInputRightIconButton
            reference={tiMessage}
            placeholder={'Mensagem'}
            value={message}
            returnKeyType={'next'}
            multiline
            onChangeText={(value) => setMessage(value)}
            customContainerStyle={{ height: 200 }}
            textAlignVertical='top'
        />

        <GenericAppButton
            customButtonStyle={{ margin: 30, width: 'auto' }}
            textButton={'ENVIAR'}
            onPress={sendNewUserContact}
        />

    </GenericColumnView>
}
