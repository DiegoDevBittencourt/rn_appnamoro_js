import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import * as dashboardThunk from '@store/dashboard/thunk';
import { theme } from '@constants/StyledComponentsTheme';
import { P, GenericAppButton, TextInputRightIconButton, GenericScrollView } from '@components/index';
import { dangerNotification } from '~/utils/notifications';
import { emailValidator } from '~/utils/functions';

const PCustom = styled(P)`
    margin-top: 15px;
`;

export default function EmailEditor() {

    const dispatch = useDispatch();

    const { verifiedEmail, email } = useSelector(state => state.user.userData);

    const [emailLocal, setEmailLocal] = useState(email);
    const [verifiedEmailLocal, setVerifiedEmailLocal] = useState(verifiedEmail == 1);

    useEffect(() => {
        setVerifiedEmailLocal((emailLocal == email) && verifiedEmail == 1);
    }, [verifiedEmailLocal]);

    const sendEmailVerification = async () => {

        if (!verifiedEmailLocal)

            if (emailValidator(emailLocal))
                dispatch(dashboardThunk.sendEmailVerification(emailLocal));
            else dangerNotification('Digite um email válido!');
    }

    const changeEmailText = (value) => {
        setEmailLocal(value);
        setVerifiedEmailLocal(value == email);
    }

    const EmailStatusText = () => {
        return verifiedEmailLocal ? <PCustom>{'Email já verificado'}</PCustom>
            : <PCustom>{'Email ainda não verificado, verifique-o para aumentar sua segurança.'}</PCustom>
    }

    const customButtonStyle = {
        alignSelf: 'center',
        marginTop: 20,
    }

    return <GenericScrollView customStyle={{ paddingLeft: 10, paddingRight: 10 }}>

        <TextInputRightIconButton
            placeholder={'Digite seu email aqui'}
            showRightButton
            keyboardType={'email-address'}
            solidIcon
            value={emailLocal}
            onChangeText={changeEmailText}
            customIconStyle={{ color: verifiedEmailLocal ? theme.$blue : theme.$red }}
            iconName={verifiedEmailLocal ? 'check' : 'times'}
            onButtonPress={null}
        />

        <EmailStatusText />

        <GenericAppButton
            enable={!verifiedEmailLocal}
            customButtonStyle={customButtonStyle}
            textButton='Me envie um email de verificação'
            onPress={sendEmailVerification}
        />

    </GenericScrollView>
}
