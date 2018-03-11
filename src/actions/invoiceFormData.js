import {get, put, post} from './baseApi';

export const FETCH_CUSTOMERS_SUCCESS = 'FETCH_CUSTOMERS_SUCCESS';
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const EDIT_CUSTOMER_SUCCESS = 'EDIT_CUSTOMER_SUCCESS';
export const EDIT_PRODUCT_SUCCESS = 'EDIT_PRODUCT_SUCCESS';
export const POST_CUSTOMER_SUCCESS = 'POST_CUSTOMER_SUCCESS';
export const POST_PRODUCT_SUCCESS = 'POST_PRODUCT_SUCCESS';

const fetchCustomersSuccess = customers => ({type: FETCH_CUSTOMERS_SUCCESS, payload: customers});
const fetchProductsSuccess = customers => ({type: FETCH_PRODUCTS_SUCCESS, payload: customers});
const editCustomerSuccess = (customer, field) => ({type: EDIT_CUSTOMER_SUCCESS, payload: {customer, field}});
const editProductSuccess = (product, field) => ({type: EDIT_PRODUCT_SUCCESS, payload: {product, field}});
const postCustomersSuccess = customers => ({type: POST_CUSTOMER_SUCCESS, payload: customers});
const postProductsSuccess = customers => ({type: POST_PRODUCT_SUCCESS, payload: customers});



export const fetchCustomers = () => dispatch =>
  get('customers')
    .then(res => dispatch(fetchCustomersSuccess(res)))
    .catch(console.log);

export const fetchProducts = () => dispatch =>
  get('products')
    .then(res => dispatch(fetchProductsSuccess(res)))
    .catch(console.log);



export const postCustomer = customer => dispatch =>
  post('customers', customer)
    .then(res => dispatch(postCustomersSuccess(res)))
    .catch(console.log);

export const postProduct = product => dispatch =>
  post('products', product)
    .then(res => dispatch(postProductsSuccess(res)))
    .catch(console.log);



export const editCustomer = (id, field, newValue) => dispatch =>
  put(`customers/${id}`, {[field]: newValue})
    .then(res => dispatch(editCustomerSuccess(res, field)))
    .catch(console.log);

export const editProduct = (id, field, newValue) => dispatch =>
  put(`products/${id}`, {[field]: newValue})
    .then(res => dispatch(editProductSuccess(res, field)))
    .catch(console.log);
