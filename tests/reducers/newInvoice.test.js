import newInvoiceReducer from '../../src/reducers/newInvoice';
import {
  updateCustomer,
  updateDiscount,
  clearForm,
  editProduct,
  addProduct,
  deleteProduct,
} from '../../src/actions/newInvoice';
import {expect} from 'chai';

describe('newInvoice(store, action)', () => {
  it('should return initial state by default, or after clearForm', () => {
    const fixture = {
      customer: null,
      selectedProducts: [],
      discount: 0,
      total: 0
    };

    expect(newInvoiceReducer(undefined, {})).to.deep.equal(fixture);
    expect(newInvoiceReducer(undefined, clearForm())).to.deep.equal(fixture);
  });

  it('should update customer', () => {
    const fixture = {
      customer: {name: 'some test customer'},
      selectedProducts: [],
      discount: 0,
      total: 0
    };

    expect(newInvoiceReducer(undefined, updateCustomer({name: 'some test customer'}))).to.deep.equal(fixture);
  });

  it('should update discount', () => {
    const fixture = {
      customer: null,
      selectedProducts: [],
      discount: 13,
      total: 0
    };

    expect(newInvoiceReducer(undefined, updateDiscount(13))).to.deep.equal(fixture);
  });

  it('should update discount', () => {
    const fixture = {
      customer: null,
      selectedProducts: [],
      discount: 13,
      total: 0
    };

    expect(newInvoiceReducer(undefined, updateDiscount(13))).to.deep.equal(fixture);
  });

  it('should update product quantity', () => {
    const initialState = {
      customer: null,
      selectedProducts: [
        {id: 13, name: 'kek', quantity: 10}
        ],
      discount: 13,
      total: 0
    };

    const fixture = {
      customer: null,
      selectedProducts: [
        {id: 13, name: 'kek', quantity: 25}
      ],
      discount: 13,
      total: 0
    };

    expect(newInvoiceReducer(initialState, editProduct({id: 13, name: 'kek', quantity: 25}))).to.deep.equal(fixture);
  });

  it('should add product', () => {
    const initialState = {
      customer: null,
      selectedProducts: [],
      discount: 13,
      total: 0
    };

    const fixture = {
      customer: null,
      selectedProducts: [
        {id: 13, name: 'kek', quantity: 1}
      ],
      discount: 13,
      total: 0
    };

    expect(newInvoiceReducer(initialState, addProduct({id: 13, name: 'kek'}))).to.deep.equal(fixture);
  });

  it('should add product', () => {
    const initialState = {
      customer: null,
      selectedProducts: [
        {id: 13, name: 'kek', quantity: 1}
      ],
      discount: 13,
      total: 0
    };

    const fixture = {
      customer: null,
      selectedProducts: [],
      discount: 13,
      total: 0
    };

    expect(newInvoiceReducer(initialState, deleteProduct({id: 13}))).to.deep.equal(fixture);
  });
});