import {
  FETCH_INVOICES_SUCCESS
} from '../actions/invoiceList';

const initialState = {
  invoices: [],
};

export default (store = initialState, {type, payload}) => {
  switch (type) {
    case FETCH_INVOICES_SUCCESS:
      return {
        ...store,
        invoices: payload
      };

    default:
      return store;
  }
};