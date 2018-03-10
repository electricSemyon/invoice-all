import React from 'react';
import InvoiceCard from './InvoiceCard';

const InvoiceList = ({ list }) => (
  <div className="invoice-list">
    {list.map(InvoiceCard)}
  </div>
);

export default InvoiceList;