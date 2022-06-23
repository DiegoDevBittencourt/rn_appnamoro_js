import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

import * as dashboardThunk from '@store/dashboard/thunk';
import * as matchThunk from '@store/match/thunk';
import * as userThunk from '@store/user/thunk';
import { GenericRowView, GenericColumnView, P, GenericAppButton } from '@components/index';
import { handleError } from '~/utils/functions';

export const PCustom = styled(P)`
    margin-top: 10px;
    text-align: center;
`;

export default function GenericYesNoModalContent(props) {

    const { subtitle, acceptText, denyText, selectedMethod, selectedUserImageId, matchedProfile } = props.route.params;

    const dispatch = useDispatch();

    const customButtonStyle = {
        flex: 1,
        margin: 10,
        marginTop: 40,
        width: 'auto',
    }

    const handleClose = () => props.navigation.goBack();

    const acceptMethod = () => {
        try {
            switch (selectedMethod) {
                case 'genericYesNoModalDeleteAccount':
                    handleClose();
                    dispatch(dashboardThunk.deleteAccount());
                    break;
                case 'genericYesNoModalUnmatch':
                    dispatch(matchThunk.unmatch(matchedProfile?.id));
                    break;
                case 'genericYesNoModalDeleteUserImage':
                    dispatch(userThunk.deleteUserImage(selectedUserImageId));
                    break;
                default:
                    break;
            }
        } catch (error) {
            handleError(error);
        }
    }

    return <GenericColumnView>

        <PCustom>{subtitle}</PCustom>

        <GenericRowView>
            <GenericAppButton
                customButtonStyle={customButtonStyle}
                textButton={denyText.toUpperCase()}
                onPress={handleClose}
            />

            <GenericAppButton
                customButtonStyle={customButtonStyle}
                textButton={acceptText.toUpperCase()}
                onPress={acceptMethod}
            />
        </GenericRowView>

    </GenericColumnView>
}
