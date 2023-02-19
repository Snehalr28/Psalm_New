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
  logoutUser,
  updateMentorUrl,
  updateProgramUrl,
  addMentorUrl,
  getCategory,
} from '../controllers/ApiList';
import {Alert} from 'react-native';
export class UserController {
  static login(data) {
    return new Promise((resolve, reject) => {
      HttpClient.post(LoginUrl, data)
        .then(response => {
          console.log('TOKEN*********', response.data && response.data.token);
          console.log('response<<<', response.message);
          if (response.status == 'Success') {
            //  Alert.alert(response.message);
            console.log('success#######', response.status);
            const BearerToken = response.data.token;
            HttpClient.setAuthorization(response.data && BearerToken);
            resolve({response});
          } else {
            console.log('log1', response.message);
            alert(response.message);
            reject(response.message);
          }
        })
        .catch(error => {
          reject(error);
          Alert.alert(error.message);
          console.log('log2', error);
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
          console.log('response<<>>', response);
          if (response.responseCode == 200) {
            console.log('Set Token+', response.data.token);
            HttpClient.setAuthorization(response.data && response.data.token);
            resolve({response});
          } else {
            reject(response.message);
          }
        })
        .catch(error => {
          console.log('error""""', error);
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
          console.log('error""""', error);
          reject(error);
        });
    });
  }

  static CategoryDisplay() {
    return new Promise((resolve, reject) => {
      HttpClient.get(getCategory)
        .then(response => {
          console.log('response resend<<>>', response);
          if (response.messageID === 200) {
            resolve({response});
          } else {
            reject(response.message);
          }
        })
        .catch(error => {
          console.log('error""""', error);
          reject(error);
        });
    });
  }

  static confirmOtp(data) {
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
            Alert.alert(response.message);
          }
        })
        .catch(error => {
          reject(error);
        });
    });
  }

  // static uploadImage(data) {
  //   return new Promise((resolve, reject) => {
  //     HttpClient.post(uploadurl, data)
  //       .then((response) => {
  //         if (response.statusCode == 200) {
  //           resolve({ response });
  //         } else {
  //           reject(response.message);
  //         }
  //       })
  //       .catch((error) => {
  //         reject(error);
  //       });
  //   });
  // }

  // static logout(data) {
  //   return new Promise((resolve, reject) => {
  //     HttpClient.get(logoutUser, data)
  //       .then((response) => {
  //         if (response.code == 200) {
  //           // HttpClient.setAuthorization(response.data && response.data.token);
  //           resolve({ response });
  //         } else {
  //           reject(response.message);
  //         }
  //       })
  //       .catch((error) => {
  //         reject(error);
  //       });
  //   });
  // }

  static updateMentor(data) {
    return new Promise((resolve, reject) => {
      HttpClient.put(updateMentorUrl, data)
        .then(response => {
          console.log('response<<<', response);
          if (response.status == 'Success') {
            console.log('success#######', response.status);
            resolve({response});
          } else {
            console.log('log1', response.message);
            alert(response.message);
            reject(response.message);
          }
        })
        .catch(error => {
          reject(error);
          console.log('log2', error);
        });
    });
  }

  static addMentor(data) {
    return new Promise((resolve, reject) => {
      HttpClient.put(addMentorUrl, data)
        .then(response => {
          console.log('response<<<', response);
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
          console.log('log2', error);
        });
    });
  }

  static updateProgram(data) {
    return new Promise((resolve, reject) => {
      HttpClient.put(updateProgramUrl, data)
        .then(response => {
          console.log('response<<<', response);
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
          console.log('log2', error);
        });
    });
  }
}
