import {get} from './baseApi';

export const FETCH_INVOICES_SUCCESS = 'FETCH_INVOICES_SUCCESS';

const fetchInvoicesSuccess = invoices => ({type: FETCH_INVOICES_SUCCESS, payload: invoices});

export const fetchInvoices = () => dispatch =>
  get('invoices')
    .then(res => dispatch(fetchInvoicesSuccess(res)))
    .catch(err => console.log('err'));

export const fetchInvoiceItems = () => dispatch =>
  get('invoices')
    .then(res => dispatch(fetchInvoicesSuccess(res)))
    .catch(err => console.log('err'));