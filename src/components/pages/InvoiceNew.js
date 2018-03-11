import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {compose} from 'recompose';

import {mapDispatchToProps, mapStateToProps} from './selectors/invoiceNewPageSelector';
import {extractOption,} from '../../utils/newInvoiceUtils';
import validate from '../../utils/validateNewInvoice';

import Select from '../Select';
import ProductsTable from '../ProductsTable';

class NewInvoice extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedProductId: 1,
      error: null
    };
  }

  componentDidMount() {
    this.props.fetchCustomers();
    this.props.fetchProducts();
  }

  componentWillUnmount() {
    this.props.clearForm();
  }

  handleProductSelect = ({target: {value}}) => this.setState({selectedProductId: Number(value)});

  handleProductAdd = () => {
    const {selectedProductId} = this.state;
    const selectedProduct = this.props.invoiceForm.products.find(p => p.id === selectedProductId);

    this.props.addProduct(selectedProduct);
  };

  handleUpdateCustomer = ({target: {value}}) => {
    const selectedCustomer = this.props.invoiceForm.customers.find(p => p.id === Number(value));
    this.props.updateCustomer(selectedCustomer);
  };

  handleSubmit = () => {
    const {newInvoice, total} = this.props;
    const error = validate(newInvoice.customer, Boolean(newInvoice.selectedProducts.length));

    if (!error) {
      this.setState({error: null});
      this.props.submitInvoice({...newInvoice, total})
        .then(() => this.props.history.push('/invoices'));
    } else {
      this.setState({error});
    }
  };

  render() {
    const {
      invoiceForm: {
        customers,
        products
      },
      editProduct,
      newInvoice,
      updateDiscount,
      total
    } = this.props;

    const {error} = this.state;

    return (
      <div className="invoice-new-page main-content">
        <Link to="/invoices">Invoices list</Link>

        <div className="invoice-form-wrapper">
          {customers &&
          <Select
            options={customers.map(extractOption)}
            label="Customer"
            onChange={this.handleUpdateCustomer}
          />}

          <ProductsTable products={newInvoice.selectedProducts} onProductEdit={editProduct}/>

          {products &&
          <div className="add-product no-margin">
            <Select
              options={products.map(extractOption)}
              onChange={this.handleProductSelect}
            />
            <button className="btn" onClick={this.handleProductAdd}>Add</button>
          </div>}

          <div className="discount">
            <span>Discount: </span>
            <input
              type="number"
              name="quantity"
              value={newInvoice.discount}
              min={0}
              max={100}
              onChange={({target: {value}}) => updateDiscount(value)}
            />
            <span className="percent-char">%</span>
          </div>

          <div className="no-margin">
            <span>
              <b>Total: ${total}</b>
            </span>
          </div>

          <div>
            <button className="btn" onClick={this.handleSubmit}>Submit</button>
            <span>{error}</span>
          </div>
        </div>
      </div>
    )
  }
};

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  withRouter
)
(NewInvoice);