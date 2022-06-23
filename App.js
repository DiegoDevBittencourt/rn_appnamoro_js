import React from 'react';
import firebase from 'firebase';
import { createStore, applyMiddleware } from 'redux';
import { Provider, useSelector } from 'react-redux';
import reduxThunk from 'redux-thunk'
import { ThemeProvider } from 'styled-components';
import EStyleSheet from 'react-native-extended-stylesheet';

import {
  REACT_APP_FIREBASE_API_KEY,
  REACT_APP_FIREBASE_AUTHDOMAIN,
  REACT_APP_FIREBASE_DATABASEURL,
  REACT_APP_FIREBASE_PROJECTID,
  REACT_APP_FIREBASE_STORAGEBUCKET,
  REACT_APP_FIREBASE_MESSAGINGSENDERID,
  REACT_APP_FIREBASE_APPID,
  REACT_APP_FIREBASE_MEASUREMENTID
} from 'react-native-expand-dotenv';
import { Loader } from '@components/index';
import { theme } from './src/constants/StyledComponentsTheme';
import reducers from './src/store/reducers';
import Application from './src';

const firebaseConfig = {
  apiKey: REACT_APP_FIREBASE_API_KEY,
  authDomain: REACT_APP_FIREBASE_AUTHDOMAIN,
  databaseURL: REACT_APP_FIREBASE_DATABASEURL,
  projectId: REACT_APP_FIREBASE_PROJECTID,
  storageBucket: REACT_APP_FIREBASE_STORAGEBUCKET,
  messagingSenderId: REACT_APP_FIREBASE_MESSAGINGSENDERID,
  appId: REACT_APP_FIREBASE_APPID,
  measurementId: REACT_APP_FIREBASE_MEASUREMENTID
};

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({ experimentalForceLongPolling: true });
}

EStyleSheet.build(theme);

export default function App() {

  const TheLoader = () => {
    const { showLoader } = useSelector(state => state.utils);
    return showLoader && <Loader />
  }

  return <ThemeProvider theme={theme}>
    <Provider store={createStore(reducers, {}, applyMiddleware(reduxThunk))}>

      <TheLoader />

      <Application />

    </Provider>
  </ThemeProvider>
};
