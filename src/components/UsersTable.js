import React from 'react';
import EditableTableCell from './EditableTableCell';

const UserTable = ({users, onUserEdit}) => (
  <table className="table table-striped">
    <caption>Users</caption>
    <thead>
    <tr>
      <th>ID</th>
      <th>Name</th>
      <th>Address</th>
      <th>Phone</th>
    </tr>
    </thead>
    <tbody>
    {users.length
      ? users.map(User(onUserEdit))
      : <div>There are no selected products</div>}
    </tbody>
  </table>
);

const User = onEdit => ({name, address, phone, id}, i) => (
  <tr key={i}>
    <td>{id}</td>
    <EditableTableCell value={name} onEdit={onEdit(id)('name')} />
    <EditableTableCell value={phone} onEdit={onEdit(id)('phone')} />
    <EditableTableCell value={address} onEdit={onEdit(id)('address')} />
  </tr>
);

export default UserTable;