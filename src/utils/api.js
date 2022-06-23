
// export function Api({ accessToken }) {
//     return axios.create({
//         baseURL: REACT_APP_API_URL,//'http://192.168.0.104:3333/',
//         headers: { 'Authorization': `Bearer ${accessToken}` }
//     })
// };

import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';
import { REACT_APP_API_URL } from 'react-native-expand-dotenv';

const api = axios.create({
  baseURL: REACT_APP_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use(

  async (config) => {
    const accessToken = await AsyncStorage.getItem('accessToken');

    if (accessToken)
      config.headers.common['Authorization'] = `Bearer ${accessToken}`;

    return config;
  },
)

api.interceptors.response.use(
  async (response) => {

    console.log(response);

    return response;
  }
)

export default api;
