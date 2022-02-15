export * from './auth/auth';
export * from './modal/modal';
export * from './catagory/catagory';
export * from './services/services';
export const resetApp = payload => ({
  type: 'RESET_APP',
  payload,
});
