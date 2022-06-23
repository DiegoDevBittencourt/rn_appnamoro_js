import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import * as userThunk from '@store/user/thunk';
import { GenericContainer } from '@components/index';
import ConfigurationContent from './ConfigurationContent';
import ConfigToolbar from './ConfigToolbar';

export default function Configuration(props) {

    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(userThunk.getUserData());
    }, []);

    return <GenericContainer>

        <ConfigToolbar {...props} />

        <ConfigurationContent />

    </GenericContainer>
}
