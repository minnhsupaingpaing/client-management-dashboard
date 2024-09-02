import React, { useState } from 'react';
import axios from 'axios';

const AssignClientForm = ({ admins, clients }) => {
  const [selectedAdmin, setSelectedAdmin] = useState('');
  const [selectedClient, setSelectedClient] = useState('');

  const handleAssign = async (e) => {
    e.preventDefault();
    if (!selectedAdmin || !selectedClient) {
      alert('Please select both an admin and a client.');
      return;
    }
    try {
      await axios.post(`/api/admins/${selectedAdmin}/assign`, { client_id: selectedClient });
      alert('Client assigned to admin successfully');
      setSelectedAdmin('');
      setSelectedClient('');
    } catch (error) {
      console.error('Error assigning client:', error);
    }
  };

  return (
    <form onSubmit={handleAssign}>
      <select value={selectedAdmin} onChange={(e) => setSelectedAdmin(e.target.value)}>
        <option value="">Select Admin</option>
        {admins.map((admin) => (
          <option key={admin.id} value={admin.id}>
            {admin.name}
          </option>
        ))}
      </select>
      <select value={selectedClient} onChange={(e) => setSelectedClient(e.target.value)}>
        <option value="">Select Client</option>
        {clients.map((client) => (
          <option key={client.id} value={client.id}>
            {client.name}
          </option>
        ))}
      </select>
      <button type="submit">Assign Client</button>
    </form>
  );
};

export default AssignClientForm;
