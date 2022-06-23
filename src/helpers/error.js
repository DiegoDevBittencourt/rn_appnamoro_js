// import * as Sentry from '@sentry/react-native';
import AsyncStorage from '@react-native-community/async-storage';

import { dangerNotification } from '~/utils/notifications';

const handleException = async (error, errorCode, hideNotification) => {

  let serial = await AsyncStorage.getItem('posSerial');

  const errorMessage = error?.message || error?.msg ||
    error?.response?.data?.error?.message ||
    error?.response?.data?.message;

    if(errorMessage == 'Invalid token') return forceUpdate();

  const getErrorCode = () => {
    if (!error?.hideCode) {
      return errorCode
    } else {
      return ''
    }
  }

  !hideNotification && dangerNotification(errorMessage + ' ' + getErrorCode());

  // Sentry.captureException(error, {
  //   tags: {
  //     serial,
  //   },

  //   contexts: {
  //     'POS Information': {
  //       serial,
  //       context: errorCode,
  //       error,
  //     },
  //   },
  // });
};

export { handleException };
