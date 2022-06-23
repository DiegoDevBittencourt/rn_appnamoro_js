import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import * as userThunk from '@store/user/thunk';
import { theme } from '@constants/StyledComponentsTheme';
import { GenericContainer, Toolbar, GenericScrollView } from '@components/index';
import PicturesEditor from './PicturesEditor';
import UserInfoEditor from './UserInfoEditor';

export default function EditInfo(props) {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(userThunk.getUserData());
    }, []);

    return <GenericContainer>

        <Toolbar
            leftElement={'arrow-back'}
            customLeftElement={{ color: 'white' }}
            onLeftElementPress={() => props.navigation.goBack()}
            title={'Editar Info'}
            customTitleText={{ alignSelf: 'flex-start', color: 'white' }}
            showSearchIcon={false}
            customContainerStyle={{ backgroundColor: theme.$primaryColor }}
        />

        <GenericScrollView>

            <PicturesEditor />

            <UserInfoEditor />

        </GenericScrollView>

    </GenericContainer>
}
