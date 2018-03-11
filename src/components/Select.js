import React, { Component, PropTypes } from 'react';

const makeOption = ({ id, name }) => <option value={id}>{name}</option>;

export default ({ label, options, onChange }) => (
  <div className="form-group select">
    {label && <label htmlFor={label}>{label}</label>}

    <select className="form-control" id={label} onChange={onChange}>
      <option disabled selected value> select an option </option>
      {options.map(makeOption)}
    </select>
  </div>
);