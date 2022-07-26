import * as actionLabels from '../../actionLabels';

const initialState = {
  loader: false,
  catagory: [],
  error: '',
  services: [],
  vendors: [],
  vendorCreated: false,
  vendorDetail: '',
  bookings: JSON.parse(localStorage.getItem('bookings')) || [],
};

const catagoryReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionLabels.CATAGORY_START:
    case actionLabels.SERVICES_START:
    case actionLabels.VENDOR_START:
    case actionLabels.CREATE_VENDOR:
    case actionLabels.GET_VENDOR_START:
      return { ...state, loader: true };

    case actionLabels.CATAGORY_SUCCESS:
      return { ...state, catagory: payload, loader: false };

    case actionLabels.SERVICES_SUCCESS:
      return { ...state, services: payload, loader: false };

    case actionLabels.CREATE_VENDOR_SUCCESS:
      return { ...state, vendorCreated: true, loader: false, error: '' };

    case actionLabels.GET_VENDOR_SUCCESS:
      return { ...state, vendorDetail: payload, loader: false };

    case actionLabels.VENDOR_SUCCESS:
      return { ...state, vendors: payload, loader: false };

    case actionLabels.ADD_TO_BOOK: {
      // let booking = state.bookings;
      // const index = booking.findIndex(i => i.vendor === payload.vendor);
      // console.log(index, payload);
      // if (index > -1) {
      //   booking[index] = payload;
      // } else {
      //   booking = [...booking, payload];
      // }
      const booking = [payload];
      localStorage.setItem('bookings', JSON.stringify(booking));
      return { ...state, bookings: [...booking] };
    }
    case actionLabels.CATAGORY_FAIL:
    case actionLabels.SERVICES_FAIL:
    case actionLabels.VENDOR_FAIL:
    case actionLabels.CREATE_VENDOR_FAIL:
    case actionLabels.GET_VENDOR_FAIL: {
      return { ...state, error: payload, loader: false };
    }
    default: {
      return state;
    }
  }
};

export default catagoryReducer;
