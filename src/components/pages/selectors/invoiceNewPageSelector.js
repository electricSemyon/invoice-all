import {fetchCustomers, fetchProducts} from '../../../actions/invoiceFormData';
import {
  editProduct,
  deleteProduct,
  addProduct,
  updateCustomer,
  updateDiscount,
  submitInvoice,
  clearForm
} from "../../../actions/newInvoice";

import {
  calculateTotal,
  limitDiscount
} from '../../../utils/newInvoiceUtils';

export const mapStateToProps = store => ({
  invoiceForm: store.invoiceForm,
  newInvoice: store.newInvoice,
  total: Number(calculateTotal(store.newInvoice.selectedProducts, store.newInvoice.discount).toFixed(2))
});

export const mapDispatchToProps = dispatch => ({
  fetchCustomers: () => dispatch(fetchCustomers()),
  fetchProducts: () => dispatch(fetchProducts()),

  editProduct: id => quantity =>
    quantity > 0
      ? dispatch(editProduct({id, quantity}))
      : dispatch(deleteProduct({id})),

  addProduct: product => dispatch(addProduct(product)),
  updateCustomer: customer => dispatch(updateCustomer(customer)),
  updateDiscount: discount => dispatch(updateDiscount(limitDiscount(discount))),

  submitInvoice: invoice => dispatch(submitInvoice(invoice)),
  clearForm: () => dispatch(clearForm())
});