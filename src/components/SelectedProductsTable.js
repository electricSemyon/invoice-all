import React, { Component } from 'react';
import { connect } from 'react-redux';

const ProductsTable = ({ products, onProductEdit }) => (
  <div className="products-table">
    <table className="table table-striped">
      <caption>Products list</caption>
      <thead>
        <tr>
          <th>Product</th>
          <th>Price</th>
          <th>Quantity</th>
        </tr>
      </thead>
      <tbody>
        {products.length
          ? products.map(Product(onProductEdit))
          : <div>There are no selected products</div>}
      </tbody>
    </table>
  </div>
);

const Product = (onProductEdit) => ({name, quantity, price, id}, i) => (
  <tr key={i}>
    <td>{name}</td>
    <td>${price}</td>
    <td><input type="number" name="quantity" value={quantity} onChange={({target: {value}}) => onProductEdit(id)(value)} /></td>
  </tr>
);

export default ProductsTable;