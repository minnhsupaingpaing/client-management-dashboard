import React from 'react';

const ClientTable = ({ clients }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Code</th>
        </tr>
      </thead>
      <tbody>
        {clients.map((client) => (
          <tr key={client.id}>
            <td>{client.name}</td>
            <td>{client.code}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ClientTable;
