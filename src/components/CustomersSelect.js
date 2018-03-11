import React, { Component, PropTypes } from 'react';

export default ({ value, onChange }) => (
  <div className="form-group">
    <label htmlFor="sel1">Select list:</label>
    <select className="form-control" id="sel1">
      <option>1</option>
    </select>
  </div>
);