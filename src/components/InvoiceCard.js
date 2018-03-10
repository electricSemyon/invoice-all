import React from 'react';

const InvoiceCard = ({id, customer_id, discount, total}) => (
  <div className="invoice-card">
    <p className="invoice-card-id">
      { id }
    </p>

    <div className="invoice-card-content">
      <p className="invoice-card-customer_id">
        <span>Customer id:</span> { customer_id }
      </p>

      <p className="invoice-card-discount">
        <span>Discount:</span> { discount }%
      </p>

      <p className="invoice-card-total">
        <b>Total: ${ total }</b>
      </p>
    </div>
  </div>
);

export default InvoiceCard;