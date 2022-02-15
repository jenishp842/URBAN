import * as actionLabels from '../../actionLabels';

export const initialState = {
  isLogin: false,
  isRegistered: false,
  isLoading: false,
  userData: null,
  authToken: '',
  errorMsg: '',
  fcmToken: '',
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case actionLabels.LOGIN_START:
    case actionLabels.REGISTER_START:
      return { ...state, isLoading: true, errorMsg: '' };
    case actionLabels.LOGIN_SUCCESS: {
      return {
        ...state,
        isLogin: true,
        isLoading: false,
        authToken: payload.token,
        // fcmToken: payload.deviceToken,
        userData: payload.user,
        errorMsg: '',
      };
    }
    case actionLabels.REGISTER_SUCCESS: {
      return {
        ...state,
        isRegistered: true,
      };
    }
    case actionLabels.REGISTER_FAIL:
    case actionLabels.LOGIN_FAIL: {
      return { ...state, isLoading: false, errorMsg: payload };
    }
    default:
      return state;
  }
};
