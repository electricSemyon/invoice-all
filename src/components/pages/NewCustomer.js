import React from 'react';
import {connect} from 'react-redux';
import {compose} from 'recompose';
import {withRouter} from 'react-router-dom';
import {postCustomer} from "../../actions/invoiceFormData";
import validate from '../../utils/validateNewCustomer';

class NewCustomer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      name: '',
      address: '',
      phone: ''
    }
  }

  updateField = field => ({target: {value}}) => this.setState({[field]: value});

  handleSubmit = () => {
    const {name, phone, address} = this.state;
    const {history: {push}} = this.props;
    const error = validate(name, phone, address);

    if (error)
      return this.setState({error});

    this.props.postCustomer({name, phone, address})
      .then(() => push('/customers'));
  };

  render() {
    const {error, name, address, phone} = this.state;

    return (
      <div className="new-costumer-page main-content">
        <p>
          <span>Name:</span>
          <input type="text" value={name} onChange={this.updateField('name')}/>
        </p>
        <p>
          <span>Address:</span>
          <input type="text" value={address} onChange={this.updateField('address')}/>
        </p>
        <p>
          <span>Phone:</span>
          <input type="tel" value={phone} onChange={this.updateField('phone')}/>
        </p>

        <button className="btn" onClick={this.handleSubmit}>Create Customer</button>
        <br/>
        <span>{error}</span>
      </div>
    )
  }
}

export default compose(
  connect(
    store => ({
      invoiceList: store.invoiceList.invoices,
    }),
    dispatch => ({
      postCustomer: customer => dispatch(postCustomer(customer)),
    }),
  ),
  withRouter
)(NewCustomer);