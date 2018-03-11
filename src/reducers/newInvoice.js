import {
  UPDATE_CUSTOMER,
  EDIT_PRODUCT,
  DELETE_PRODUCT,
  ADD_PRODUCT,
  UPDATE_DISCOUNT,
  CLEAR_FORM
} from '../actions/newInvoice';

const initialState = {
  customer: null,
  selectedProducts: [],
  discount: 0,
  total: 0
};

export default (store = initialState, {type, payload}) => {
  switch (type) {
    case UPDATE_CUSTOMER:
      return {
        ...store,
        customer: payload
      };

    case ADD_PRODUCT:
      return {
        ...store,
        selectedProducts: [...store.selectedProducts, {...payload, quantity: 1}]
      };

    case DELETE_PRODUCT:
      return {
        ...store,
        selectedProducts: store.selectedProducts.filter(p => p.id !== payload.id)
      };

    case EDIT_PRODUCT:
      const {selectedProducts} = store;
      const productToEdit = selectedProducts.find(p => p.id === payload.id);

      productToEdit.quantity = payload.quantity;

      return {
        ...store,
        selectedProducts
      };

    case UPDATE_DISCOUNT:
      return {
        ...store,
        discount: payload
      };

    case CLEAR_FORM:
      return initialState;

    default:
      return store;
  }
};