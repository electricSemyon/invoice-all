import {
  FETCH_CUSTOMERS_SUCCESS,
  FETCH_PRODUCTS_SUCCESS,
  EDIT_CUSTOMER_SUCCESS,
  EDIT_PRODUCT_SUCCESS,
  POST_CUSTOMER_SUCCESS,
  POST_PRODUCT_SUCCESS
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

    case EDIT_PRODUCT_SUCCESS:
      const oldProducts = store.products;
      const oldProduct = oldProducts.find(product => product.id === payload.product.id);
      oldProduct[payload.field] = payload.product[payload.field];

      return {
        ...store,
        products: oldProducts
      };

    case POST_CUSTOMER_SUCCESS:
      return {
        ...store,
        customers: [...store.customers, payload]
      };

    case POST_PRODUCT_SUCCESS:
      return {
        ...store,
        products: [...store.products, payload]
      };

    default:
      return store;
  }
};