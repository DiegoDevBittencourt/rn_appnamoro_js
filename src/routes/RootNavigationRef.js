import { createRef } from 'react';
import { CommonActions } from '@react-navigation/native';

export const navigationRef = createRef();

export function getCurrentRoutName() {
    return navigationRef.current?.getCurrentRoute().name;
}

export function push(name, params) {
    navigationRef.current?.navigate(name, params);
}

export function reset(name) {
    navigationRef.current?.dispatch(CommonActions.reset({
        index: 0,
        routes: [{ name }],
    }));
}

export function goBack() {
    navigationRef.current?.dispatch(CommonActions.goBack());
}
