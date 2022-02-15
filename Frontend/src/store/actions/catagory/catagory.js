import * as actionLabels from '../../actionLabels';

export const catagoryStart = () => ({
  type: actionLabels.CATAGORY_START,
});

export const catagory = () => ({
  type: actionLabels.CATAGORY_SAGA,
});

export const catagorySuccess = payload => ({
  type: actionLabels.CATAGORY_SUCCESS,
  payload,
});

export const catagoryFail = payload => ({
  type: actionLabels.CATAGORY_FAIL,
  payload,
});
