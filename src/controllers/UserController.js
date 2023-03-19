import {strings} from '../localization';
import {HttpClient} from '../controllers';
import {
  registerUser,
  LoginUrl,
  forgotPasswordUrl,
  confirmOtpUrl,
  resetPasswordUrl,
  resendOtpUrl,
  uploadurl,
  updateMentorUrl,
  updateProgramUrl,
  addMentorUrl,
  getCategory,
  addProgram,
  fetchProfileurl,
  ProgramListurl,
  getCategoryurl,
  ProgramDetailsurl,
  addSessionurl,
  listurl,
  getmentorsurl,
} from '../controllers/ApiList';
import {Alert} from 'react-native';
import {getUser} from '../../selectors/UserSelectors';
import {useSelector, useDispatch} from 'react-redux';
import {setContentType} from './HttpClient';

export class UserController {
  static login(data) {
    return new Promise((resolve, reject) => {
      HttpClient.post(LoginUrl, data)
        .then(response => {
          console.log('TOKEN*********', response.data && response.data.token);
          console.log('Login response<<<', response.message);

          if (response.status == 'Success') {
            // alert(response.message);
            console.log('Login success', response.status);
            const BearerToken = response.data.token;
            HttpClient.setAuthorization(response.data && BearerToken);
            resolve({response});
          } else {
            console.log('Login message', response.message);
            alert(response.message);
            reject(response.message);
          }
        })
        .catch(error => {
          reject(error);
          alert(error.message);
          console.log('Login Error', error);
        });
    });
  }

  static signup(data) {
    return new Promise((resolve, reject) => {
      HttpClient.post(registerUser, data)
        .then(response => {
          console.log('userResponse<<<', response);
          if (response.messageID == 200) {
            HttpClient.setAuthorization(response.data && response.data.token);
            resolve({response});
          } else {
            reject(response.message);
          }
        })
        .catch(error => {
          reject(error);
        });
    });
  }
  static forgotPassword(data) {
    return new Promise((resolve, reject) => {
      const getForgotPass = forgotPasswordUrl + data;
      console.log('getForgotPass<<>>', getForgotPass);
      HttpClient.get(getForgotPass)
        .then(response => {
          console.log('Get forget password response<<>>', response);
          if (response.responseCode == 200) {
            HttpClient.setAuthorization(response.data && response.data.token);
            resolve({response});
          } else {
            reject(response.message);
          }
        })
        .catch(error => {
          console.log('Forget password error', error);
          reject(error);
        });
    });
  }

  static resendOtp() {
    return new Promise((resolve, reject) => {
      HttpClient.get(resendOtpUrl)
        .then(response => {
          console.log('response resend<<>>', response);
          if (response.responseCode == 200) {
            HttpClient.setAuthorization(response.data && response.data.token);
            resolve({response});
          } else {
            reject(response.message);
          }
        })
        .catch(error => {
          console.log('resend otp error""""', error);
          reject(error);
        });
    });
  }

  static CategoryDisplay() {
    return new Promise((resolve, reject) => {
      HttpClient.get(getCategoryurl)
        .then(response => {
          console.log('Category response<<>>', response);
          if (response.messageID === 200) {
            resolve({response});
          } else {
            reject(response.message);
          }
        })
        .catch(error => {
          console.log('category display error""""', error);
          reject(error);
        });
    });
  }

  // mentor list 

  static mentorsDisplay(data) {
    return new Promise((resolve, reject) => {
      HttpClient.get(getmentorsurl)
      HttpClient.get(
        `mentor/getAll-users?page=${data.page}&roles=${data.roles}`,
      )
        .then(response => {
          console.log('mentors response<<>>', response);
          if (response.messageID === 200) {
            resolve({response});
          } else {
            reject(response.message);
          }
        })
        .catch(error => {
          console.log('mentors display error""""', error);
          reject(error);
        });
    });
  }


  static ListShowNew(data) {
    return new Promise((resolve, reject) => {
      // HttpClient.get(listurl,data)
      HttpClient.get(
        `mentorship/getallProgramDropdown?mentorid=${data.mentorid}`,
      )
        .then(response => {
          console.log('list check response<<>>', response);
          if (response.messageID === 200) {
            resolve({response});
          } else {
            reject(response.message);
          }
        })
        .catch(error => {
          console.log('list error""""', error);
          reject(error);
        });
    });
  }

  static confirmOtp(data) {
    console.log('OTP data check', data);
    return new Promise((resolve, reject) => {
      HttpClient.post(confirmOtpUrl, data)
        .then(response => {
          console.log('confirmotpres<<<<', response);
          if (response.responseCode == 200) {
            resolve({response});
          } else {
            reject(response.message);
          }
        })
        .catch(error => {
          console.log('confirm otp error""""', error);
          reject(error);
        });
    });
  }

  static resetPassword(data) {
    return new Promise((resolve, reject) => {
      HttpClient.post(resetPasswordUrl, data)
        .then(response => {
          console.log('resetPress<<<<', response);
          if (response.responseCode == 200) {
            HttpClient.setAuthorization(response.data && response.data.token);
            resolve({response});
          } else {
            reject(response.message);
            alert(response.message);
          }
        })
        .catch(error => {
          console.log('resend password error""""', error);
          reject(error);
        });
    });
  }
  static updateMentor(data) {
    console.log('datadata', JSON.stringify(data));
    return new Promise((resolve, reject) => {
      setContentType(true);
      HttpClient.put(updateMentorUrl, data)
        .then(response => {
          console.log('Update Mentor/add program Response', response);
          if (response.status == 'Success') {
            console.log(
              'update mentor/ add program Success Response',
              response.status,
            );
            resolve({response});
          } else {
            console.log(
              'update mentor add program else message',
              response.message,
            );
            alert(response.message);
            reject(response.message);
          }
        })
        .catch(error => {
          reject(error);
          console.log('update mentor error""""', error);
          console.log('log2', error);
        });
    });
  }

  static addMentor(data) {
    console.log('addmentordata', JSON.stringify(data));
    return new Promise((resolve, reject) => {
      setContentType(true);
      // setContentType(false);
      console.log('add mentor inside');
      HttpClient.post(addProgram, data)
        .then(response => {
          console.log('add mentor response', response);
          if (response.status == 'Success') {
            console.log('add mentor success#######', response.status);
            resolve({response});
          } else {
            console.log('log1', response.message);
            reject(response.message);
          }
        })
        .catch(error => {
          reject(error);
          console.log('add mentor error""""', error);
          console.log('log2', error);
        });
    });
  }

  static addSession(data) {
    console.log('add session data', JSON.stringify(data));
    return new Promise((resolve, reject) => {
      setContentType(true);
      // setContentType(false);
      console.log('add session inside');
      HttpClient.post(addSessionurl, data)
        .then(response => {
          console.log('add session response', response);
          if (response.status == 'Success') {
            console.log('add session success#######', response.status);
            resolve({response});
          } else {
            console.log('session error-->>', response.message);
            reject(response.message);
          }
        })
        .catch(error => {
          reject(error);
          console.log('add session error""""', error);
          console.log('log2', error);
        });
    });
  }

  static FetchData(data) {
    console.log('fetch data call', data);
    return new Promise((resolve, reject) => {
      console.log('fetch data call---');
      HttpClient.get(`mentor/getUser?user_id=${data.user_id}`)
        .then(response => {
          console.log('fetch response response<<>>', response);
          if (response.messageID === 200) {
            resolve({response});
          } else {
            reject(response.message);
          }
        })
        .catch(error => {
          console.log('fetch data error""""', error);
          reject(error);
        });
    });
  }

  static SingleData(data) {
    console.log('fetch single data call', data);
    return new Promise((resolve, reject) => {
      console.log('fetch single data call---');
      HttpClient.get(`mentorship/getSingleProgram?_id=${data._id}`)
        .then(response => {
          console.log('fetch single response response<<>>', response);
          if (response.messageID === 200) {
            resolve({response});
          } else {
            reject(response.message);
          }
        })
        .catch(error => {
          console.log('fetch data error""""', error);
          reject(error);
        });
    });
  }

  //sessionDisplay

  static SessionDisplayData(data) {
    console.log('fetch single session data call', data);
    return new Promise((resolve, reject) => {
      console.log('fetch session--');
      HttpClient.get(`mentorship/getwholeProgramdetail?mentorid=${data.mentorid}&program_id=${data.program_id}`)
     .then(response => {
          console.log('session response<<>>', response);
          if (response.messageID === 200) {
            resolve({response});
          } else {
            reject(response.message);
          }
        })
        .catch(error => {
          console.log('show session error""""', error);
          reject(error);
        });
    });
  }

  static ShowProgram(data) {
    console.log('//Inside show');
    return new Promise((resolve, reject) => {
      // HttpClient.get(ProgramListurl, data);
      HttpClient.get(
        `mentorship/getMentorshipById?mentorid=${data.mentorid}&category_id=${data.category_id}`,
      )
        .then(response => {
          console.log('show program response<<>>', response);
          if (response.messageID === 200) {
            resolve({response});
          } else {
            reject(response.message);
          }
        })
        .catch(error => {
          console.log('show program error""""', error);
          reject(error);
        });
    });
  }

  static ShowDetails(data) {
    return new Promise((resolve, reject) => {
      HttpClient.get(ProgramDetailsurl)
        .then(response => {
          console.log('Show deatils response<<>>', response);
          if (response.messageID === 200) {
            resolve({response});
          } else {
            reject(response.message);
          }
        })
        .catch(error => {
          console.log('show details error""""', error);
          console.log('error""""', error);
          reject(error);
        });
    });
  }

  static updateProgram(data) {
    return new Promise((resolve, reject) => {
      HttpClient.put(updateProgramUrl, data)
        .then(response => {
          console.log('Update program response<<<', response);
          if (response.status == 'Success') {
            console.log('success#######', response.status);
            resolve({response});
          } else {
            console.log('log1', response.message);
            reject(response.message);
          }
        })
        .catch(error => {
          reject(error);
          console.log('show update program error""""', error);
          console.log('log2', error);
        });
    });
  }
}
