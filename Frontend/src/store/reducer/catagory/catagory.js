import * as actionLabels from '../../actionLabels';

const initialState = {
  loader: false,
  catagory: [],
  error: '',
  services: [],
};

const catagoryReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionLabels.CATAGORY_START:
    case actionLabels.SERVICES_START:
      return { ...state, loader: true };

    case actionLabels.CATAGORY_SUCCESS:
      return { ...state, catagory: payload, loader: false };

    case actionLabels.SERVICES_SUCCESS:
      return { ...state, services: payload, loader: false };

    case actionLabels.CATAGORY_FAIL:
    case actionLabels.SERVICES_FAIL: {
      return { ...state, error: payload, loader: false };
    }
    default: {
      return state;
    }
  }
};

export default catagoryReducer;
