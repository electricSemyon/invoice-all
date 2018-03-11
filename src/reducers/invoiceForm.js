import {FETCH_CUSTOMERS_SUCCESS} from '../actions/invoiceForm';

export default (store = {
  customers: null
}, {type, payload}) => {
  switch (type) {
    case FETCH_CUSTOMERS_SUCCESS:
      return {
        ...store,
        customers: payload
      };

    default:
      return store;
  }
};