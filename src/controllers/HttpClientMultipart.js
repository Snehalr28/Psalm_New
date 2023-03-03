import axios from 'axios';
import { Config } from 'react-native-config';
import { strings } from '../localization';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';
import {NAVIGATION} from '@/constants/navigation'
import { logout } from '../actions/UserActions';
import { useDispatch } from 'react-redux';

const clientMultipart = axios.create({
  // baseURL: 'http://54.190.192.105:9121/',
  baseURL: 'http://54.190.192.105:9192/',
  headers: {
    'Content-Type': 'multipart/form-data',
  },
});


clientMultipart.interceptors.response.use(
  // (response) => response.data,
  // (response) => { console.log('responseßDetails<<<',response); return response.data },
  (response) => {
    console.log(response,'HTTP MULTIPART')
    if (response?.data?.code == 400 || response?.data?.code == 401 || response?.data?.code == 403 ){
      console.log('useDispatchNav(logout())');
      // window.useDispatchNav(logout());
  } return response.data},
  (error) => {
    console.log(error.response,'client multipart error')
    if (error.response) {
      return Promise.reject(error.response.data);
    } else if (error.request) {
      return Promise.reject(new Error(strings.common.connectionError));
    } else {
      return Promise.reject(error);
    }
  }
);


const setAuthorization = async (token) => {
  console.log('token<<<<setaut',token)
  // debugger;
  let newToken = token;
  client.defaults.headers.common.authorization = newToken;
  console.log('New Token<<<<',newToken)
};
const clearAuthorization  = async () => {
   await AsyncStorage.removeItem('userToken');
  delete client.defaults.headers.common.authorization;
};


export const HttpClientMultipart = { ...clientMultipart, setAuthorization, clearAuthorization, };
console.log("multipart client response", HttpClientMultipart )