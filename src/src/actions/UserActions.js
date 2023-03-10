import {UserController} from '../controllers';
import idx from 'idx';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const TYPES = {
  CLEAR_STORE: 'CLEAR_STORE',
  LOGIN: 'LOGIN',
  LOGIN_REQUEST: 'LOGIN_REQUEST',
  LOGIN_ERROR: 'LOGIN_ERROR',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',

  UPDATE_MENTOR_REQUEST: 'UPDATE_MENTOR_REQUEST',
  UPDATE_MENTOR_ERROR: 'UPDATE_MENTOR_ERROR',
  UPDATE_MENTOR_SUCCESS: 'UPDATE_MENTOR_SUCCESS',

 
  PROGRAM_LIST_REQUEST: 'PROGRAM_LIST_REQUEST',
  PROGRAM_LIST_ERROR: 'PROGRAM_LIST_ERROR',
  PROGRAM_LIST_SUCCESS: 'PROGRAM_LIST_SUCCESS',

  PROGRAM_DETAILS_REQUEST: 'PROGRAM_DETAILS_REQUEST',
  PROGRAM_DETAILS_SUCCESS: 'PROGRAM_DETAILS_SUCCESS',
  PROGRAM_DETAILS_ERROR: 'PROGRAM_DETAILS_ERROR',

  UPDATE_PROGRAM_REQUEST: 'UPDATE_PROGRAM_REQUEST',
  UPDATE_PROGRAM_ERROR: 'UPDATE_PROGRAM_ERROR',
  UPDATE_PROGRAM_SUCCESS: 'UPDATE_PROGRAM_SUCCESS',

  ADD_MENTOR_REQUEST: 'ADD_MENTOR_REQUEST',
  ADD_MENTOR_ERROR: 'ADD_MENTOR_ERROR',
  ADD_MENTOR_SUCCESS: 'ADD_MENTOR_SUCCESS',

  CATEGORY_DISPLAY_REQUEST: 'CATEGORY_DISPLAY_REQUEST',
  CATEGORY_DISPLAY_ERROR: ' CATEGORY_DISPLAY_ERROR',
  CATEGORY_DISPLAY_SUCCESS: 'CATEGORY_DISPLAY_SUCCESS',

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

  FETCH_PROFILE_REQUEST: 'FETCH_PROFILE_REQUEST',
  FETCH_PROFILE_SUCCESS: 'FETCH_PROFILE_SUCCESS',
  FETCH_PROFILE_ERROR: 'FETCH_PROFILE_ERROR',
};

const loginRequest = () => ({
  type: TYPES.LOGIN_REQUEST,
  payload: null,
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

const clearStore = () => ({
  type: TYPES.CLEAR_STORE,
});

const updateMentorRequest = () => ({
  type: TYPES.UPDATE_MENTOR_REQUEST,
  payload: null,
});
const updateMentorSuccess = UMdata => ({
  type: TYPES.UPDATE_MENTOR_SUCCESS,
  payload: {UMdata},
});
const updateMentorError = error => ({
  type: TYPES.UPDATE_MENTOR_ERROR,
  payload: {error},
});

const addMentorRequest = () => ({
  type: TYPES.ADD_MENTOR_REQUEST,
  payload: null,
});
const addMentorSuccess = addMentor => ({
  type: TYPES.ADD_MENTOR_SUCCESS,
  payload: {addMentor},
});
const addMentorError = error => ({
  type: TYPES.ADD_MENTOR_ERROR,
  payload: {error},
});

const updateProgramRequest = () => ({
  type: TYPES.UPDATE_PROGRAM_REQUEST,
  payload: null,
});
const updateProgramSuccess = UpProgram => ({
  type: TYPES.UPDATE_PROGRAM_SUCCESS,
  payload: {UpProgram},
});
const updateProgramError = error => ({
  type: TYPES.UPDATE_PROGRAM_ERROR,
  payload: {error},
});

const categoryDisplayRequest = () => ({
  type: TYPES.CATEGORY_DISPLAY_REQUEST,
  payload: null,
});
const categoryDisplaySuccess = category => ({
  type: TYPES.CATEGORY_DISPLAY_SUCCESS,
  payload: {category},
});
const categoryDisplayError = error => ({
  type: TYPES.CATEGORY_DISPLAY_ERROR,
  payload: {error},
});


const ProgramListShowRequest = () => ({
  type: TYPES.PROGRAM_LIST_REQUEST,
  payload: null,
});
const ProgramListShowSuccess = showlist => ({
  type: TYPES.PROGRAM_LIST_SUCCESS,
  payload: {showlist},
});
const ProgramListShowError = error => ({
  type: TYPES.PROGRAM_LIST_ERROR,
  payload: {error},
});

const PrograDetailsRequest = () => ({
  type: TYPES.PROGRAM_DETAILS_REQUEST,
  payload: null,
});
const ProgramDetailsSuccess= ProgramDetailsShow => ({
  type: TYPES.PROGRAM_DETAILS_SUCCESS,
  payload: {ProgramDetailsShow},
});
const ProgramDetailsError = error => ({
  type: TYPES.PROGRAM_DETAILS_ERROR,
  payload: {error},
});



const FetchProfileRequest = () => ({
  type:TYPES.FETCH_PROFILE_REQUEST,
  payload: null
})

const FetchProfileSuccess = (profiledata) => ({
  type:TYPES.FETCH_PROFILE_SUCCESS,
  payload: profiledata
})
const FetchProfileError = () => ({
  type:TYPES.FETCH_PROFILE_ERROR,
  payload: {error}
})




export const loginUser = data => async dispatch => {
  console.log('Login Email and password Data', data);
  dispatch(loginRequest());
  dispatch(loaderRequest());
  try {
    const user = await UserController.login(data);
    console.log('Login user------>', user);
    let userToken = idx(user, _ => _.response.data.token);
    console.log('Login user token', userToken);
    await AsyncStorage.setItem('userToken', userToken);
    dispatch(loginSuccess(user));
    dispatch(loaderSuccess());
  } catch (error) {
    alert(error.response.message);
    dispatch(loginError(error));
    dispatch(loaderError());
  }
};

export const forgotPassword = (data, cb) => async dispatch => {
  dispatch(forgotPassRequest());
  try {
    const user = await UserController.forgotPassword(data.email);
    console.log('forget password data', user);
    console.log('forget password response', user.response);
    cb(user.response);
    dispatch(forgotPassSuccess(user.response));
  } catch (error) {
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
  console.log("confirm OTP")
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
    console.log('üserdata',user);
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

export const logout = () => async dispatch => {
  try {
    // let logutResponse = await UserController.logout();
  } finally {
    console.log('clear store');
    dispatch(clearStore());
  }
};

export const updateMentor = (data, cb) => async dispatch => {
  console.log('update mentor request', data);
  dispatch(updateMentorRequest());
  // dispatch(loaderRequest());
  console.log('Loder req call');
  try {
    const UMdata = await UserController.updateMentor(data);
    console.log('update profile response is', UMdata);
    console.log('update profile final response is', UMdata.response);

    cb(UMdata.response);
    dispatch(updateMentorSuccess(UMdata));
    console.log('Update mentor success call');
  } catch (error) {
    console.log('update mentor error', error);
    dispatch(updateMentorError(error));
    alert(error.response.message);
  }
};


export const addMentor = (data,cb) => async dispatch => {
  console.log('add program response', data);
  dispatch(addMentorRequest());
  try {
    const addMentor = await UserController.addMentor(data);
    console.log('Add program final response', addMentor);
    cb(addMentor.response)
    console.log("Add Program cb",addMentor.response)
    dispatch(addMentorSuccess(addMentor));
  } catch (error) {
    console.log("add program error", error);
    dispatch(addMentorError(error));
  }
};

export const updateProgram = (data, cb) => async dispatch => {
  console.log('update program data isss', data);
  dispatch(updateProgramRequest());

  try {
    const UpProgram = await UserController.updateProgram(data);
    console.log('update program user------>', UpProgram);
    dispatch(updateProgramSuccess(UpProgram));
    console.log("check update program",UpProgram.response)
    cb(UpProgram.response);
   

    dispatch(loaderSuccess());
    console.log('Loder success call');
  } catch (error) {
    console.log(error);
    dispatch(loaderError());
    alert(error.response.message);
    dispatch(updateProgramError(error));
  }
};

export const CategoryDisplay = cb => async dispatch => {
  console.log('category display action');
  dispatch(categoryDisplayRequest());
  try {
    console.log('/////Inside category try::');
    const category = await UserController.CategoryDisplay();
    // var data = JSON.stringify(category)
   
    console.log('category response is',category);
    dispatch(categoryDisplaySuccess(category));
    cb(category.response);

    console.log('display category success',category.response);
  } catch (error) {
    console.log(error);
    dispatch(categoryDisplayError(error));
  }
};

export const ProgramListShow = (data,cb)  => async dispatch => {
  console.log("::Inside Program")
  console.log('Show list of program',data);
  dispatch(ProgramListShowRequest());
  console.log("Program list call")
  try {
    console.log('/////Inside Show program try::');
    const showlist = await UserController.ShowProgram(data);
    console.log('Show Program List',showlist);
    dispatch(ProgramListShowSuccess(showlist));
    cb(showlist.response);

  
  } catch (error) {
    console.log("program list error",error);
    dispatch((error));
  }
};

export const ProgramDetails = (data,cb)  => async dispatch => {
  console.log('Show list of program');
  dispatch(PrograDetailsRequest());
  try {
    console.log('/////Inside program Details try::');
    const ProgramDetailsShow = await UserController.ShowDetails(data);
    console.log('Show Program Details',ProgramDetailsShow);
    dispatch(ProgramDetailsSuccess(ProgramDetailsShow));
    cb(ProgramDetailsShow.response);

  
  } catch (error) {
    console.log(error);
    dispatch(ProgramDetailsError(error));ProgramListShowError
  }
};



export const FetchProfileData = (data, cb)=> async dispatch => {
  console.log('fetch User action inside',data);
  dispatch(FetchProfileRequest());
  try {
    console.log("fetch profile fetch",data);
    const profiledata = await UserController.FetchData(data);
    console.log('fetch User data',profiledata);
    dispatch(FetchProfileSuccess(profiledata));
    cb(profiledata.response);

    console.log('fetch success',profiledata.response);
  } catch (error) {
    console.log(error);
    dispatch(FetchProfileError(error));
  }
};
