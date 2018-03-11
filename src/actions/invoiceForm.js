import {get} from './baseApi';

export const FETCH_CUSTOMERS_SUCCESS = 'FETCH_CUSTOMERS_SUCCESS';

const fetchCustomersSuccess = customers => (console.log('customers---', customers), {type: FETCH_CUSTOMERS_SUCCESS, payload: customers});

export const fetchCustomers = () => dispatch =>
  get('customers')
    .then(res => dispatch(fetchCustomersSuccess(res)))
    .catch(err => console.log('err'))