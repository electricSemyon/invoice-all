import {combineReducers} from 'redux';

import invoiceForm from './invoiceFormData';
import newInvoice from './newInvoice';
import invoiceList from './invoiceList';

export default combineReducers({
  invoiceForm,
  newInvoice,
  invoiceList
});