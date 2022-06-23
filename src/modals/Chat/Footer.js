import React, { useState, useRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

import * as firebaseThunk from '@store/firebase/thunk';
import { GenericRowView, TextInput, GenericAppButton, RoundIconButton } from '@components/index';
import { theme } from '@constants/StyledComponentsTheme';
import { successNotification } from '~/utils/notifications';

const MainContainer = styled(GenericRowView)`
    height: 60px;
    background-color: white;
    border-top-width: 0.4px;
    border-color: ${props => props.theme.$lightGray};
    justify-content: center;
    align-items: center;
`;

export default function Footer({ matchedProfile }) {

    const tiMessage = useRef();
    const dispatch = useDispatch();

    const { $lightGray, $primaryColor } = theme;

    const [message, setMessage] = useState('');
    const [isSendingMessage, setIsSendingMessage] = useState(false);
    const [sendMessageButtonEnable, setSendMessageButtonEnable] = useState(false);

    useEffect(() => {
        setSendMessageButtonEnable(message != '');
    }, [message]);

    const sendMessage = async () => {

        if (message != '' && !isSendingMessage) {
            setIsSendingMessage(true);

            dispatch(firebaseThunk.sendMessageToFirebase(message, matchedProfile.id))
                .then(() => {
                    setIsSendingMessage(false);
                    setMessage('');
                });
        }
    }

    const handleEmoticonClick = () => successNotification(
        'Emoticons não estão disponíveis no momento, estamos trabalhando para disponibilizá-los assim que possível! =)'
    );

    const customInputStyle = {
        borderWidth: 0,
    };

    const customEmoticonButtonStyle = {
        backgroundColor: 'white',
        elevation: 0
    };

    return <MainContainer>
        <TextInput
            reference={tiMessage}
            customInputStyle={customInputStyle}
            placeholder={'Digite uma mensagem'}
            solidIcon
            returnKeyType={'done'}
            value={message}
            onChangeText={value => setMessage(value)}
        />

        <RoundIconButton
            customButtonStyle={customEmoticonButtonStyle}
            customIconStyle={{ fontSize: 30, color: $primaryColor }}
            iconName={'smile-wink'}
            underlayColor={$lightGray}
            onPress={handleEmoticonClick}
        />

        <GenericAppButton
            enable={sendMessageButtonEnable}
            customButtonStyle={{ width: 80, marginRight: 5 }}
            textButton={'Enviar'}
            onPress={sendMessage}
        />
    </MainContainer>
}
