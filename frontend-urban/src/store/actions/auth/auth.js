import * as actionLabels from '../../actionLabels';

export const loginStart = () => ({
  type: actionLabels.LOGIN_START,
});

export const login = payload => ({
  type: actionLabels.LOGIN_SAGA,
  payload,
});

export const loginSuccess = payload => ({
  type: actionLabels.LOGIN_SUCCESS,
  payload,
});

export const loginFail = payload => ({
  type: actionLabels.LOGIN_FAIL,
  payload,
});

export const authenticationValidator = () => ({
  type: actionLabels.AUTHENTICATION_VALIDATOR,
});

export const register = payload => ({
  type: actionLabels.REGISTER_SAGA,
  payload,
});

export const registerSuccess = payload => ({
  type: actionLabels.REGISTER_SUCCESS,
  payload,
});

export const registerFail = payload => ({
  type: actionLabels.REGISTER_FAIL,
  payload,
});

export const registerStart = () => ({
  type: actionLabels.REGISTER_START,
});

export const logout = () => ({
  type: actionLabels.LOGOUT,
});
