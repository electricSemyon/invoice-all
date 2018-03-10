import React from 'react';
import { Link } from 'react-router-dom';
import InvoiceList from '../InvoiceList';

const invoices = [
  {
    id: 211337,
    customer_id: 231123,
    discount: 13.5,
    total: 999
  },
  {
    id: 1233,
    customer_id: 123123,
    discount: 14.1,
    total: 1244
  },
  {
    id: 1233,
    customer_id: 123123,
    discount: 14.1,
    total: 1244
  },
  {
    id: 1233,
    customer_id: 123123,
    discount: 14.1,
    total: 1244
  },
  {
    id: 1233,
    customer_id: 123123,
    discount: 14.1,
    total: 1244
  },
  {
    id: 1233,
    customer_id: 123123,
    discount: 14.1,
    total: 1244
  }
];

const InvoicesPage = () => (
  <div className="invoices-page main-content">
    <Link to="/invoices/new">Create invoice</Link>

    <InvoiceList list={invoices} />
  </div>
);

export default InvoicesPage;