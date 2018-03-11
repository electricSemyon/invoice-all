import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import {fetchCustomers} from '../../actions/invoiceForm';
import CustomersSelect from '../CustomersSelect';

class InvoicesPage extends React.Component {

  componentDidMount() {
    this.props.fetchCustomers();
  }

  render() {
    return (
      <div className="invoice-new-page main-content">
        <Link to="/invoices">Invoices list</Link>

        <div className="invoice-form-wrapper">
          <CustomersSelect onChange={() => {}}/>
        </div>
      </div>
    )
  }
};

export default connect(
  store => ({
    invoiceForm: store.invoiceForm
  }),
  dispatch => ({
    fetchCustomers() {
      return dispatch(fetchCustomers())
    }
  })
)(InvoicesPage);