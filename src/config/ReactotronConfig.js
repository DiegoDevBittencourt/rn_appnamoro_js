import AsyncStorage from '@react-native-community/async-storage';
import { Platform } from 'react-native';
import Reactotron from 'reactotron-react-native';

const tron = Reactotron.setAsyncStorageHandler(AsyncStorage)
    .configure({ host: Platform.OS !== 'ios' ? '10.0.2.2' : 'localhost' })
    .useReactNative()
    .connect();

tron.clear();
console.log = tron.log;
