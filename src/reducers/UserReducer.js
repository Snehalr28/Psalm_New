import {TYPES} from '../actions/UserActions';
export const userReducer = (
  state = {
    fcmToken: null,
    tokenOnly: null,
    user: {},
    uploadingImage: false,
  },
  {payload, type},
) => {
  switch (type) {
    case TYPES.LOGIN_REQUEST:
      return {...state, isLoginRequest: true};
    case TYPES.LOGIN_SUCCESS:
      return {
        ...state,
        user: payload.user,
        isLoginRequest: false,
        userConfirm: true,
        forgotUser: {},
      };
    // case TYPES.LOGIN_Update:
    //   return {
    //     ...state,
    //     [...state.user,
    //     user: payload.user,

    //     isLoginRequest: false,
    //     userConfirm: true,
    //     forgotUser: {},
    //   };
    case TYPES.LOGIN_ERROR:
      return {...state, user: {}, isLoginRequest: false};
    case TYPES.JUST_TOKEN:
      return {...state, tokenOnly: payload};

    //update mentor reducer cases
    case TYPES.UPDATE_MENTOR_REQUEST:
      return {...state, isupdateMentorRequest: true};
    case TYPES.UPDATE_MENTOR_SUCCESS:
      return {
        ...state,
        updateMentorData: payload.UMdata,
        isupdateMentorRequest: false,
      };
    case TYPES.UPDATE_MENTOR_ERROR:
      return {...state, isupdateMentorRequest: false};

    //update program reducer cases
    case TYPES.UPDATE_PROGRAM_REQUEST:
      return {...state, isupdateProgramRequest: true};
    case TYPES.UPDATE_PROGRAM_SUCCESS:
      return {
        ...state,
        UpProgramStore: payload.UpProgram,
        isupdateProgramRequest: false,
      };
    case TYPES.UPDATE_PROGRAM_ERROR:
      return {...state, isupdateProgramRequest: false};

    //add mentor reducer cases
    case TYPES.ADD_MENTOR_REQUEST:
      return {...state, isaddMentorRequest: true};
    case TYPES.ADD_MENTOR_SUCCESS:
      return {
        ...state,
        addMentor: payload.addMentor,
        isaddMentorRequest: false,
      };
    case TYPES.ADD_MENTOR_ERROR:
      return {...state, isaddMentorRequest: false};

    // Fetch Profile Data

    case TYPES.FETCH_PROFILE_REQUEST:
      return {...state, isFetchProfileRequest: true};
    case TYPES.FETCH_PROFILE_SUCCESS:
      return {
        ...state,
        profiledata: payload.profiledata,
        isFetchProfileRequest: false,
      };
    case TYPES.FETCH_PROFILE_ERROR:
      return {...state, isFetchProfileRequest: false};

   ///Program List
    case TYPES.PROGRAM_LIST_REQUEST:
      return {...state, isProgramListShowRequest: true};
    case TYPES.PROGRAM_LIST_SUCCESS:
      return {
        ...state,
        showlist: payload.showlist,
        isPROGRAM_LIST_ERROR: false,
      };
    case TYPES.CATEGORY_DISPLAY_ERROR:
      return {...state, isProgramListShowRequest: false};

   //Program details reducer

   case TYPES.PROGRAM_DETAILS_REQUEST:
    return {...state, isPrograDetailsRequest: true};

  case TYPES.PROGRAM_DETAILS_SUCCESS:
    return {
      ...state,
      ProgramDetailsShow: payload.ProgramDetailsShow,
      isPrograDetailsRequest: false,
    };
  case TYPES.PROGRAM_DETAILS_ERROR:
    return {...state, isPrograDetailsRequest: false};



    case TYPES.CATEGORY_DISPLAY_REQUEST:
      return {...state, iscategoryDisplayRequest: true};
    case TYPES.CATEGORY_DISPLAY_SUCCESS:
      return {
        ...state,
        categoryDetails: payload.category,
        iscategoryDisplayRequest: false,
      };
    case TYPES.CATEGORY_DISPLAY_ERROR:
      return {...state, iscategoryDisplayRequest: false};

    case TYPES.FORGOT_PASS_REQUEST:
      return {...state, isForgotRequest: true};
    case TYPES.FORGOT_PASS_SUCCESS:
      return {...state, forgotUser: payload, isForgotRequest: false};
    case TYPES.FORGOT_PASS_ERROR:
      return {...state, forgotUser: {}, isForgotRequest: false};

    case TYPES.RESEND_OTP_PASS_REQUEST:
      return {...state, isResendRequest: true};
    case TYPES.RESEND_OTP_PASS_SUCCESS:
      return {...state, resendOtp: payload, isResendRequest: false};
    case TYPES.RESEND_OTP_PASS_ERROR:
      return {...state, resendUser: {}, isResendRequest: false};

    case TYPES.CONFIRM_OTP_REQUEST:
      return {...state, isOtpMatchRequest: true};
    case TYPES.CONFIRM_OTP_SUCCESS:
      console.log('user of OTP');
      return {...state, userConfirm: true, isOtpMatchRequest: false};
    case TYPES.CONFIRM_OTP_SUCCESS_NAVIGATE:
      console.log('user of OTP');
      return {...state, userConfirm: false, isOtpMatchRequest: false};
    case TYPES.CONFIRM_OTP_ERROR:
      return {...state, isOtpMatchRequest: false};

    case TYPES.RESET_PASS_REQUEST:
      return {...state, passwordResetRequest: true};
    case TYPES.RESET_PASS_SUCCESS:
      return {...state, passwordResetRequest: false};
    case TYPES.RESET_PASS_ERROR:
      return {...state, passwordResetRequest: false};

    case TYPES.UPLOAD_IMAGE_REQUEST:
      return {...state, uploadingImage: true};
    case TYPES.UPLOAD_IMAGE_SUCCESS:
      return {...state, uploadingImage: false};
    case TYPES.UPLOAD_IMAGE_ERROR:
      return {...state, uploadingImage: false};

    case TYPES.REGISTER_REQUEST:
      return {...state, isSignUpRequest: true};
    case TYPES.REGISTER_SUCCESS:
      return {...state, isSignUpRequest: false};
    case TYPES.REGISTER_ERROR:
      return {...state, isSignUpRequest: false};

    case TYPES.CLEAR_STORE:
      return {...state, userConfirm: false, user: {}};
    default:
      return state;
  }
};
