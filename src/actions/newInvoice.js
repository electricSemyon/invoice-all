import {post} from './baseApi';

export const UPDATE_CUSTOMER = 'UPDATE_CUSTOMER';
export const ADD_PRODUCT = 'ADD_PRODUCT';
export const DELETE_PRODUCT = 'DELETE_PRODUCT';
export const EDIT_PRODUCT = 'EDIT_PRODUCT';
export const UPDATE_DISCOUNT = 'UPDATE_DISCOUNT';
export const CLEAR_FORM = 'CLEAR_FORM';

export const updateCustomer = customer => ({type: UPDATE_CUSTOMER, payload: customer});
export const addProduct = product => ({type: ADD_PRODUCT, payload: product});
export const deleteProduct = product => ({type: DELETE_PRODUCT, payload: product});
export const editProduct = product => ({type: EDIT_PRODUCT, payload: product});
export const updateDiscount = discount => ({type: UPDATE_DISCOUNT, payload: discount});
export const clearForm = () => ({type: CLEAR_FORM})

export const submitInvoice = ({ selectedProducts, total, discount, customer }) => dispatch => {
  const invoice = {
    total,
    discount,
    customer_id: customer.id
  };
  const invoiceItems = selectedProducts.map(({ id, quantity }) => ({ product_id: id, quantity }));

  return post('invoices', invoice)
    .then(res =>
       Promise.all(invoiceItems.map(invoiceItem => post(`invoices/${res.id}/items`, invoiceItem))))
    .then(res => dispatch(clearForm()))
    .catch(console.log)
};