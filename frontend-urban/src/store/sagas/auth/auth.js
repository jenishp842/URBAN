import { put, call } from 'redux-saga/effects';
import { axios } from '../../../http';
import {
  loginSuccess,
  loginFail,
  loginStart,
  registerSuccess,
  registerFail,
  registerStart,
} from '../../actions';

export function* loginSaga(action) {
  const { email, password } = action.payload;
  yield put(loginStart());
  try {
    const response = yield axios.post('/login', { email, password });
    if (response.status === 200) {
      yield put(loginSuccess(response.data.data));
      yield call([localStorage, 'setItem'], 'authToken', response.data.data.token);
      yield call([localStorage, 'setItem'], 'role', response.data.data.user.role);
    } else if (response.status === 404) {
      yield put(loginFail(response.data.msg));
      // yield call([localStorage, 'setItem'], 'authToken', response.data.token);
    } else {
      yield put(loginFail('Something went wrong! Please try again.'));
    }
  } catch (error) {
    console.log(error.response);
    if (
      error !== undefined &&
      error.response !== undefined &&
      error.response.status !== undefined
    ) {
      if (error.response.status === 404) {
        yield put(loginFail(error.response.data.msg));
      } else if (
        error.response.data.msg !== undefined &&
        error.response.data.msg !== '' &&
        typeof error.response.data.msg === 'string'
      ) {
        yield put(loginFail(error.response.data.msg));
      } else {
        yield put(loginFail('Server error! Please try again.'));
      }
    } else {
      yield put(loginFail('Something went wrong! Please try again.'));
    }
  }
}

export function* registerSaga(action) {
  const { email, password, role } = action.payload;
  yield put(registerStart());
  try {
    const response = yield axios.post('/register', { email, password, role });
    if (response.status === 201) {
      yield put(registerSuccess());
    } else {
      yield put(registerFail('Something went wrong! Please try again.'));
    }
  } catch (error) {
    console.log(error.response);
    if (
      error !== undefined &&
      error.response !== undefined &&
      error.response.status !== undefined
    ) {
      if (error.response.status === 404) {
        yield put(registerFail(error.response.data.msg));
      } else if (
        error.response.data.msg !== undefined &&
        error.response.data.msg !== '' &&
        typeof error.response.data.msg === 'string'
      ) {
        yield put(registerFail(error.response.data.msg));
      } else {
        yield put(registerFail('Server error! Please try again.'));
      }
    } else {
      yield put(registerFail('Something went wrong! Please try again.'));
    }
  }
}

export function* authenticationValidatorSaga() {
  yield put(loginStart());
  const token = yield localStorage.getItem('authToken');
  if (!token) {
    // yield put(logout()); // logout action
  } else {
    yield put(loginSuccess({ token }));
  }
}
