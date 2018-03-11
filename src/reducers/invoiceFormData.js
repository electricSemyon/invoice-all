import {
  FETCH_CUSTOMERS_SUCCESS,
  FETCH_PRODUCTS_SUCCESS,
  EDIT_CUSTOMER_SUCCESS
} from '../actions/invoiceFormData';

const initialState = {
  customers: null,
  products: null
};

export default (store = initialState, {type, payload}) => {
  switch (type) {
    case FETCH_CUSTOMERS_SUCCESS:
      return {
        ...store,
        customers: payload
      };

    case FETCH_PRODUCTS_SUCCESS:
      return {
        ...store,
        products: payload
      };

    case EDIT_CUSTOMER_SUCCESS:
      const oldCustomers = store.customers;
      const oldCustomer = oldCustomers.find(customer => customer.id === payload.customer.id);
      oldCustomer[payload.field] = payload.customer[payload.field];

      return {
        ...store,
        customers: oldCustomers
      };

    default:
      return store;
  }
};