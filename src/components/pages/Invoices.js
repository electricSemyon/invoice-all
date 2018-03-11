import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import InvoiceList from '../InvoiceList';
import {fetchInvoices} from "../../actions/invoiceList";

class InvoicesPage extends React.Component {
  componentDidMount() {
    this.props.fetchInvoices();
  }

  render() {
    const {invoiceList} = this.props;

    return (
      <div className="invoices-page main-content">
        <Link to="/invoices/new">Create invoice</Link>

        {invoiceList.length
          ? <InvoiceList list={invoiceList}/>
          : <div>There are no invoices yet</div>}
      </div>
    )
  }
}

export default connect(
  store => ({
    invoiceList: store.invoiceList.invoices,
  }),
  dispatch => ({
    fetchInvoices: () => dispatch(fetchInvoices()),
  })
)(InvoicesPage);