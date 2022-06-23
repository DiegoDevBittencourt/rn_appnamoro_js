import React, { useState } from 'react';
import { Toolbar as ToolbarComponent } from 'react-native-material-ui'

import { theme } from '@constants/StyledComponentsTheme';

export default Toolbar = (props) => {

    const [titleAlignSelf, setTitleAlignSelf] = useState('center');

    return <ToolbarComponent
        leftElement={props.leftElement}
        onLeftElementPress={() => props.onLeftElementPress()}
        rightElement={props.rightElement}
        onRightElementPress={() => props.onRightElementPress()}
        centerElement={props.title}
        searchable={props.showSearchIcon ? {
            autoFocus: true,
            placeholder: props.searchPlaceholder,
            onChangeText: (text) => props.onChangeText(text),
            onSearchPressed: () => (setTitleAlignSelf('flex-start'), props.onSearchPressed && props.onSearchPressed()),
            onSearchCloseRequested: () => (setTitleAlignSelf('center'), props.onSearchCloseRequested && props.onSearchCloseRequested()),
            onSubmitEditing: () => props.onSubmitEditing()
        } : null}
        style={{
            container: { height: 48, ...props.customContainerStyle },
            titleText: { color: theme.$textColor, alignSelf: titleAlignSelf, ...props.customTitleText },
            rightElement: { color: theme.$textColor, ...props.customRightElement },
            leftElement: { color: theme.$textColor, ...props.customLeftElement },
            rightElementContainer: {}
        }}
    />
}
