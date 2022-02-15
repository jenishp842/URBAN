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
