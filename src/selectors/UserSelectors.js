

export const getUser = (state) => {
  console.log("getUser state",state)
  if (state && state.user && state.user.user) {
    return Object.keys(state.user.user).length > 0 ? state.user.user : null;
  }
  return null;
};

export const getUserConfirm = (state) => {
  console.log("state of getconfirmuser",state)
    if (state && state.user.userConfirm) {
      console.log("retuen true value")
    return true;
  }
  return null;
};
