import {get, put} from './baseApi';

export const FETCH_CUSTOMERS_SUCCESS = 'FETCH_CUSTOMERS_SUCCESS';
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const EDIT_CUSTOMER_SUCCESS = 'EDIT_CUSTOMER_SUCCESS';

const fetchCustomersSuccess = customers => ({type: FETCH_CUSTOMERS_SUCCESS, payload: customers});
const fetchProductsSuccess = customers => ({type: FETCH_PRODUCTS_SUCCESS, payload: customers});
const editCustomerSuccess = (customer, field) => ({type: EDIT_CUSTOMER_SUCCESS, payload: {customer, field}});

export const fetchCustomers = () => dispatch =>
  get('customers')
    .then(res => dispatch(fetchCustomersSuccess(res)))
    .catch(err => console.log('err'));

export const fetchProducts = () => dispatch =>
  get('products')
    .then(res => dispatch(fetchProductsSuccess(res)))
    .catch(err => console.log('err'));

export const editCustomer = (id, field, newValue) => dispatch =>
  put(`customers/${id}`, {[field]: newValue})
    .then(res => dispatch(editCustomerSuccess(res, field)));