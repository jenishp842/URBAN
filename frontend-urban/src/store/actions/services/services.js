import * as actionLabels from '../../actionLabels';

export const servicesStart = () => ({
  type: actionLabels.SERVICES_START,
});

export const services = payload => ({
  type: actionLabels.SERVICES_SAGA,
  payload,
});

export const servicesSuccess = payload => ({
  type: actionLabels.SERVICES_SUCCESS,
  payload,
});

export const servicesFail = payload => ({
  type: actionLabels.SERVICES_FAIL,
  payload,
});

export const vendorStart = () => ({
  type: actionLabels.VENDOR_START,
});

export const vendor = payload => ({
  type: actionLabels.VENDOR_SAGA,
  payload,
});

export const vendorSuccess = payload => ({
  type: actionLabels.VENDOR_SUCCESS,
  payload,
});

export const vendorFail = payload => ({
  type: actionLabels.VENDOR_FAIL,
  payload,
});

export const createVendor = payload => ({
  type: actionLabels.CREATE_VENDOR,
  payload,
});

export const createVendorStart = () => ({
  type: actionLabels.CREATE_VENDOR_START,
});

export const createVendorSuccess = () => ({
  type: actionLabels.CREATE_VENDOR_SUCCESS,
});

export const createVendorFail = payload => ({
  type: actionLabels.CREATE_VENDOR_FAIL,
  payload,
});

export const getVendor = payload => ({
  type: actionLabels.GET_VENDOR,
  payload,
});

export const getVendorStart = () => ({
  type: actionLabels.GET_VENDOR_START,
});

export const getVendorSuccess = payload => ({
  type: actionLabels.GET_VENDOR_SUCCESS,
  payload,
});

export const getVendorFail = payload => ({
  type: actionLabels.GET_VENDOR_FAIL,
  payload,
});

export const addtoBook = payload => ({
  type: actionLabels.ADD_TO_BOOK,
  payload,
});
