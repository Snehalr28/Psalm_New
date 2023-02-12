import {UserController} from '../controllers';
import {debug} from 'react-native-reanimated';
import idx from 'idx';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {navigate} from '../navigation/NavigationService';
import {Alert} from 'react-native';

export const TYPES = {
  CLEAR_STORE: 'CLEAR_STORE',
  LOGIN: 'LOGIN',
  LOGIN_REQUEST: 'LOGIN_REQUEST',
  LOGIN_ERROR: 'LOGIN_ERROR',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',

  UPDATE_MENTOR_REQUEST: 'UPDATE_MENTOR',
  UPDATE_MENTOR_ERROR: 'UPDATE_MENTOR_ERROR',
  UPDATE_MENTOR_SUCCESS: 'UPDATE_MENTOR_SUCCESS',

  ADD_MENTOR_REQUEST: 'ADD_MENTOR_REQUEST',
  ADD_MENTOR_ERROR: 'ADD_MENTOR_ERROR',
  ADD_MENTOR_SUCCESS: 'ADD_MENTOR_SUCCESS',

  REGISTER_REQUEST: 'REGISTER_REQUEST',
  REGISTER_ERROR: 'REGISTER_ERROR',
  REGISTER_SUCCESS: 'REGISTER_SUCCESS',

  FORGOT_PASS_REQUEST: 'FORGOT_PASS_REQUEST',
  FORGOT_PASS_ERROR: 'FORGOT_PASS_ERROR',
  FORGOT_PASS_SUCCESS: 'FORGOT_PASS_SUCCESS',

  RESEND_OTP_PASS_REQUEST: 'RESEND_OTP_PASS_REQUEST',
  RESEND_OTP_PASS_ERROR: 'RESEND_OTP_PASS_ERROR',
  RESEND_OTP_PASS_SUCCESS: 'RESEND_OTP_PASS_SUCCESS',

  CONFIRM_OTP_REQUEST: 'CONFIRM_OTP_REQUEST',
  CONFIRM_OTP_ERROR: 'CONFIRM_OTP_ERROR',
  CONFIRM_OTP_SUCCESS: 'CONFIRM_OTP_SUCCESS',
  CONFIRM_OTP_SUCCESS_NAVIGATE: 'CONFIRM_OTP_SUCCESS_NAVIGATE',

  RESET_PASS_REQUEST: 'RESET_PASS_REQUEST',
  RESET_PASS_ERROR: 'RESET_PASS_ERROR',
  RESET_PASS_SUCCESS: 'RESET_PASS_SUCCESS',

  JUST_TOKEN: 'JUST_TOKEN',
  LOADER_REQUEST: 'LOADER_REQUEST',
  LOADER_FAIL: 'LOADER_FAIL',
  LOADER_SUCCESS: 'LOADER_SUCCESS',

  UPLOAD_IMAGE_REQUEST: 'UPLOAD_IMAGE_REQUEST',
  UPLOAD_IMAGE_SUCCESS: 'UPLOAD_IMAGE_SUCCESS',
  UPLOAD_IMAGE_SUCCESS: 'UPLOAD_IMAGE_SUCCESS',
};

const loginRequest = () => ({
  type: TYPES.LOGIN_REQUEST,
  payload: null,
});

const updateMentorRequest = () => ({
  type: TYPES.UPDATE_MENTOR_REQUEST,
  payload: null,
});
const updateMentorSuccess = user => ({
  type: TYPES.UPDATE_MENTOR_SUCCESS,
  payload: {user},
});
const updateMentorError = error => ({
  type: TYPES.UPDATE_MENTOR_ERROR,
  payload: {error},
});

const addMentorRequest = () => ({
  type: TYPES.ADD_MENTOR_REQUEST,
  payload: null,
});
const addMentorSuccess = user => ({
  type: TYPES.ADD_MENTOR_SUCCESS,
  payload: {user},
});
const addMentorError = error => ({
  type: TYPES.ADD_MENTOR_ERROR,
  payload: {error},
});

const loginSuccess = user => ({
  type: TYPES.LOGIN_SUCCESS,
  payload: {user},
});

const loginError = error => ({
  type: TYPES.LOGIN_ERROR,
  payload: {error},
});

const loaderRequest = () => ({
  type: TYPES.LOADER_REQUEST,
});

const loaderSuccess = user => ({
  type: TYPES.LOADER_SUCCESS,
});

const loaderError = () => ({
  type: TYPES.LOADER_FAIL,
});

const registerRequest = () => ({
  type: TYPES.REGISTER_REQUEST,
  payload: null,
});

const registerSuccess = user => ({
  type: TYPES.REGISTER_SUCCESS,
  payload: {user},
});

const registerError = error => ({
  type: TYPES.REGISTER_ERROR,
  payload: {error},
});
const forgotPassRequest = () => ({
  type: TYPES.FORGOT_PASS_REQUEST,
});

const forgotPassSuccess = payload => ({
  type: TYPES.FORGOT_PASS_SUCCESS,
  payload,
});

const forgotPassError = payload => ({
  type: TYPES.FORGOT_PASS_ERROR,
  payload,
});

const resendOtpRequest = () => ({
  type: TYPES.RESEND_OTP_PASS_REQUEST,
});

const resendOtpSuccess = payload => ({
  type: TYPES.RESEND_OTP_PASS_SUCCESS,
  payload,
});

const resendOtpError = payload => ({
  type: TYPES.RESEND_OTP_PASS_ERROR,
  payload,
});
const confirmOTPRequest = () => ({
  type: TYPES.CONFIRM_OTP_REQUEST,
});

const confirmOTPSuccess = user => ({
  type: TYPES.CONFIRM_OTP_SUCCESS,
  payload: {user},
});

const confirmOTPSuccessNavigate = user => ({
  type: TYPES.CONFIRM_OTP_SUCCESS_NAVIGATE,
  payload: {user},
});

const confirmOTPError = payload => ({
  type: TYPES.CONFIRM_OTP_ERROR,
  payload,
});

const resetPassRequest = () => ({
  type: TYPES.RESET_PASS_REQUEST,
});

const resetPassSuccess = payload => ({
  type: TYPES.RESET_PASS_SUCCESS,
  payload,
});

const resetPassError = payload => ({
  type: TYPES.RESET_PASS_ERROR,
  payload,
});

const justToken = value => ({
  type: TYPES.JUST_TOKEN,
});

const clearStore = () => ({
  type: TYPES.CLEAR_STORE,
});

const uploadImageRequest = () => ({
  type: TYPES.UPLOAD_IMAGE_REQUEST,
});

const uploadImageSuccess = response => ({
  type: TYPES.UPLOAD_IMAGE_SUCCESS,
  payload: response,
});

const uploadImageError = () => ({
  type: TYPES.UPLOAD_IMAGE_ERROR,
});

export const updateMentor = data => async dispatch => {
  console.log('dataaisss', data);
  dispatch(updateMentorRequest());
  // dispatch(loaderRequest());
  console.log('Loder req call');
  try {
    const user = await UserController.updateMentor(data);
    console.log('user------>', user);
    console.log('userToken<<<', userToken);
    dispatch(updateMentorSuccess(user));
    console.log('Login success call');
    dispatch(loaderSuccess());
    console.log('Loder success call');
  } catch (error) {
    console.log(error);
    dispatch(loaderError());
    alert(error.response.message);
    dispatch(updateMentorError(error));
  }
};

export const addMentor = data => async dispatch => {
  console.log('dataaisss', data);
  dispatch(addMentorRequest());
  // dispatch(loaderRequest());
  console.log('Loder req call');
  try {
    const user = await UserController.addMentor(data);
    console.log('user------>', user);
    dispatch(addMentorSuccess(user));
    console.log('Login success call');
    dispatch(loaderSuccess());
    console.log('Loder success call');
  } catch (error) {
    console.log(error);
    dispatch(addMentorError(error));
  }
};

export const loginUser = data => async dispatch => {
  console.log('dataaisss', data);
  dispatch(loginRequest());
  dispatch(loaderRequest());
  console.log('Loder req call');
  try {
    console.log('üser');
    const user = await UserController.login(data);
    console.log('user------>', user);
    let userToken = idx(user, _ => _.response.data.token);
    console.log('usertoken issssssss', userToken);
    await AsyncStorage.setItem('userToken', userToken);
    console.log('userToken<<<', userToken);
    dispatch(loginSuccess(user));
    console.log('Login success call');
    dispatch(loaderSuccess());
    console.log('Loder success call');
  } catch (error) {
    console.log(error);
    dispatch(loaderError());
    alert(error.response.message);
    dispatch(loginError(error));
  }
};

export const forgotPassword = (data, cb) => async dispatch => {
  dispatch(forgotPassRequest());
  try {
    console.log('forget password try');
    const user = await UserController.forgotPassword(data.email);
    console.log('forget password data', user);
    cb(user.response);
    console.log('forget password data response', user.response);

    dispatch(forgotPassSuccess(user.response));
  } catch (error) {
    ƒ;
    console.log('ërror isssss', error);
    alert(error.message || error);
    cb(false);
    dispatch(forgotPassError(error));
  }
};
export const resendOtp = (data, cb) => async dispatch => {
  dispatch(resendOtpRequest());
  try {
    const user = await UserController.resendOtp();
    cb(user.response);
    dispatch(resendOtpSuccess(user.response));
  } catch (error) {
    alert(error.message || error);
    cb(false);
    dispatch(resendOtpError(error));
  }
};
export const confirmOTP = (data, cb) => async dispatch => {
  dispatch(confirmOTPRequest());
  try {
    const user = await UserController.confirmOtp(data);
    alert(user.response.message);
    cb(user.response);
    console.log('confirm OTP response', user.response);
    if (data.type) {
      dispatch(confirmOTPSuccessNavigate(user.response));
    } else {
      dispatch(confirmOTPSuccess(user.response));
    }

    //  dispatch(confirmOTPSuccess(user));
  } catch (error) {
    alert(error.message || error);
    cb(false);
    dispatch(confirmOTPError(error));
  }
};

export const resetPassword = (data, cb) => async dispatch => {
  dispatch(resetPassRequest());
  try {
    const user = await UserController.resetPassword(data);
    console.log(user, 'üserdata');
    alert(user.response.message);
    cb(user.response);
    dispatch(resetPassSuccess(user.response));
  } catch (error) {
    alert(error.message || error);
    cb(false);
    dispatch(resetPassError(error));
  }
};
export const registerUser = (data, cb) => async dispatch => {
  dispatch(registerRequest());
  try {
    const user = await UserController.signup(data);
    console.log('User signUp', user);
    cb(user.response);
    dispatch(registerSuccess(user));
    alert(user.response.message);
  } catch (error) {
    alert(error.message || error);
    cb(false);
    dispatch(registerError(error));
  }
};

// export const uploadProfileImage = (data, groupImages) => async (dispatch) => {
//   dispatch(uploadImageRequest());
//   try {
//     const response = await UserController.uploadImage(data);
//     dispatch(uploadImageSuccess(response));
//     dispatch(getMyAddressDetails());
//   } catch (error) {
//     Toast.show(error.message || error);
//     dispatch(uploadImageError());
//   }
// };
export const logout = () => async dispatch => {
  try {
    // let logutResponse = await UserController.logout();
  } finally {
    console.log('clear store');
    dispatch(clearStore());
  }
};
