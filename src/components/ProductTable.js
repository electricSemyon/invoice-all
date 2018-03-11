import React from 'react';
import EditableTableCell from './EditableTableCell';

const ProductTable = ({products, onProductEdit}) => (
  <table className="table table-striped">
    <caption>Users</caption>
    <thead>
    <tr>
      <th>ID</th>
      <th>Name</th>
      <th>Price($)</th>
    </tr>
    </thead>
    <tbody>
    {products.length
      ? products.map(Product(onProductEdit))
      : <div>There are no selected products</div>}
    </tbody>
  </table>
);

const Product = onEdit => ({name, price, id}, i) => (
  <tr key={i}>
    <td>{id}</td>
    <EditableTableCell value={name} onEdit={onEdit(id)('name')} />
    <EditableTableCell value={price} onEdit={onEdit(id)('price')} />
  </tr>
);

export default ProductTable;