import { all, takeLatest } from 'redux-saga/effects';
import * as actionLabels from '../actionLabels';
import { loginSaga, authenticationValidatorSaga, registerSaga } from './auth/auth';
import { catagorySaga, serviceSaga } from './catagory/catagory';

// eslint-disable-next-line import/prefer-default-export
export function* watchAuthentication() {
  yield all([
    takeLatest(actionLabels.LOGIN_SAGA, loginSaga),
    takeLatest(actionLabels.AUTHENTICATION_VALIDATOR, authenticationValidatorSaga),
    takeLatest(actionLabels.REGISTER_SAGA, registerSaga),
    takeLatest(actionLabels.CATAGORY_SAGA, catagorySaga),
    takeLatest(actionLabels.SERVICES_SAGA, serviceSaga),
  ]);
}
