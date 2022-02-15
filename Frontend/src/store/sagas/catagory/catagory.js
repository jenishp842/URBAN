import { put } from 'redux-saga/effects';
import { axios } from '../../../http';
import { catagoryFail, catagoryStart, catagorySuccess } from '../../actions/catagory/catagory';
import { servicesStart, servicesSuccess } from '../../actions/services/services';

// eslint-disable-next-line import/prefer-default-export
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
