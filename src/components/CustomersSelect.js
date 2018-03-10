import React, { Component, PropTypes } from 'react';

export default ({ value, onChange }) => (
  <div className="form-group">
    <label htmlFor="sel1">Select list:</label>
    <select className="form-control" id="sel1">
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
    </select>
  </div>
);