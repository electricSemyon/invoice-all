import React from 'react';
import { Link } from 'react-router-dom';

import CustomersSelect from '../CustomersSelect';

const InvoicesPage = () => (
  <div className="invoice-new-page main-content">
    <Link to="/invoices">Invoices list</Link>

    <div className="invoice-form-wrapper">
      <CustomersSelect onChange={() => {}}/>
    </div>
  </div>
);

export default InvoicesPage;