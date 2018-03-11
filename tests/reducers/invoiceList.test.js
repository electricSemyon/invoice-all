import invoiceListReducer from '../../src/reducers/invoiceList';
import {fetchInvoicesSuccess} from '../../src/actions/invoiceList';
import {expect} from 'chai';

describe('invoiceList(store, action)', () => {
  it('should return initial state be default', () => {
    const fixture = {
      invoices: []
    };

    expect(invoiceListReducer(undefined, {})).to.deep.equal(fixture);
  });

  it('should cache invoice list', () => {
    const fixture = {
      invoices: [
        {name: 'mocked invoice'}
      ]
    };

    expect(
      invoiceListReducer(undefined, fetchInvoicesSuccess([{name: 'mocked invoice'}]))
    ).to.deep.equal(fixture);
  })
});