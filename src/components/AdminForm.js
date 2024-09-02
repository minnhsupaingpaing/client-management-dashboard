import React, { useState } from 'react';
import axios from 'axios';

const AdminForm = ({ onAdminAdded }) => {
  const [name, setName] = useState('');
  const [role, setRole] = useState('Admin');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/admins', { name, role });
      alert('Admin added successfully');
      setName('');
      setRole('Admin');
      onAdminAdded(); 
    } catch (error) {
      console.error('Error adding admin:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Admin Name"
        required
      />
      <select value={role} onChange={(e) => setRole(e.target.value)}>
        <option value="Super">Super</option>
        <option value="Admin">Admin</option>
      </select>
      <button type="submit">Add Admin</button>
    </form>
  );
};

export default AdminForm;
