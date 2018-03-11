import React from 'react';
import {connect} from 'react-redux';
import {fetchProducts, editProduct} from "../../actions/invoiceFormData";
import ProductsTable from '../ProductTable';

class CustomersPage extends React.Component {
  componentDidMount() {
    if (!this.props.products) {
      this.props.fetchProducts();
    }
  }

  render() {
    const {products, onProductEdit} = this.props;

    return (
      <div className="customer-page main-content">
        {products && products.length
          ? <ProductsTable products={products} onProductEdit={onProductEdit}/>
          : <div>There are no customers</div>}
      </div>
    )
  }
}

export default connect(
  store => ({
    products: store.invoiceForm.products,
  }),
  dispatch => ({
    fetchProducts: () => dispatch(fetchProducts()),
    onProductEdit: id => field => newValue => dispatch(editProduct(id, field, newValue))
  })
)(CustomersPage);