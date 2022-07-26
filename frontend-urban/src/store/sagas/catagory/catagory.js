import { put } from 'redux-saga/effects';
import { axios } from '../../../http';
import { catagoryFail, catagoryStart, catagorySuccess } from '../../actions/catagory/catagory';
import {
  servicesStart,
  servicesSuccess,
  vendorStart,
  vendorFail,
  vendorSuccess,
  createVendorStart,
  createVendorSuccess,
  createVendorFail,
} from '../../actions/services/services';
import * as actions from '../../actions/index';

export function* catagorySaga() {
  yield put(catagoryStart());
  try {
    const response = yield axios
      .get('/catagory')
      .then(res => res)
      .catch(err => err);
    if (response.status === 200) {
      yield put(catagorySuccess(response.data.data));
    } else if (response.response.status === 401) {
      yield put(catagoryFail(response.response.data.msg));
    } else {
      yield put(catagoryFail('something went wrong server error!'));
    }
  } catch (err) {
    yield put(catagoryFail(err));
  }
}

export function* serviceSaga(action) {
  const { catagoryId } = action.payload;
  yield put(servicesStart());
  try {
    const response = yield axios
      .post('/catagory/services', { catagoryId })
      .then(res => res)
      .catch(err => err);
    if (response.status === 200) {
      yield put(servicesSuccess(response.data.data));
    } else if (response.response.status === 401) {
      yield put(catagoryFail(response.response.data.msg));
    } else {
      yield put(catagoryFail('something went wrong server error!'));
    }
  } catch (err) {
    yield put(catagoryFail(err));
  }
}

export function* vendorSaga(action) {
  const { serviceId } = action.payload;
  yield put(vendorStart());
  try {
    const response = yield axios
      .post('/service/vendors', { serviceId })
      .then(res => res)
      .catch(err => err);
    if (response.status === 200) {
      yield put(vendorSuccess(response.data.data));
    } else if (response.response.status === 404) {
      yield put(vendorFail(response.response.data.msg));
    } else {
      yield put(vendorFail('something went wrong server error!'));
    }
  } catch (err) {
    yield put(vendorFail(err));
  }
}

export function* createVendorSaga(action) {
  yield put(createVendorStart());
  try {
    const response = yield axios
      .post('/vendor', { ...action.payload })
      .then(res => res)
      .catch(err => err);
    if (response.status === 200) {
      yield put(createVendorSuccess());
    } else if (response.response.status === 404) {
      yield put(createVendorFail(response.response.data.msg));
    } else {
      yield put(createVendorFail('something went wrong server error!'));
    }
  } catch (err) {
    yield put(createVendorFail(err));
  }
}

export function* getVendorSaga(action) {
  yield put(actions.getVendorStart());
  const { id } = action.payload;
  try {
    const response = yield axios
      .get(`/vendor/${id}`)
      .then(res => res)
      .catch(err => err);
    if (response.status === 200) {
      yield put(actions.getVendorSuccess(response.data.data));
    } else if (response.response.status === 404) {
      yield put(actions.getVendorFail(response.response.data.msg));
    } else {
      yield put(actions.getVendorFail('something went wrong server error!'));
    }
  } catch (err) {
    yield put(actions.getVendorFail(err));
  }
}
