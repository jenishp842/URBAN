import { combineReducers } from 'redux';
import auth from './auth/auth';
import modal from './modal/modal';
import catagory from './catagory/catagory';

const allReducers = combineReducers({
  auth,
  modal,
  catagory,
});

const rootReducer = (state, action) => {
  if (action.type === 'RESET_APP') {
    // eslint-disable-next-line no-param-reassign
    state = undefined;
  }

  return allReducers(state, action);
};

export default rootReducer;
