import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {fetchCustomers, editCustomer} from "../../actions/invoiceFormData";
import UserTable from '../UsersTable';

class CustomersPage extends React.Component {
  componentDidMount() {
    if (!this.props.customers) {
      this.props.fetchCustomers();
    }
  }

  render() {
    const {customers, onUserEdit} = this.props;

    return (
      <div className="customer-page main-content">
        <Link to="/customers/new">Create customer</Link>

        {customers && customers.length
          ? <UserTable users={customers} onUserEdit={onUserEdit}/>
          : <div>There are no customers</div>}
      </div>
    )
  }
}

export default connect(
  store => ({
    customers: store.invoiceForm.customers,
  }),
  dispatch => ({
    fetchCustomers: () => dispatch(fetchCustomers()),
    onUserEdit: id => field => newValue => dispatch(editCustomer(id, field, newValue))
  })
)(CustomersPage);