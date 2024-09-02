import React, { useState, useEffect } from 'react';
import AdminForm from './components/AdminForm';
import AssignClientForm from './components/AssignClientForm';
import ClientTable from './components/ClientTable';
import api from './api/axios'; // Use the axios instance

const App = () => {
  const [admins, setAdmins] = useState([]);
  const [clients, setClients] = useState([]);

  const fetchAdmins = async () => {
    try {
      const response = await api.get('/admins'); // API request to Laravel
      setAdmins(response.data);
    } catch (error) {
      console.error('Error fetching admins:', error);
    }
  };

  const fetchClients = async () => {
    try {
      const response = await api.get('/clients'); // API request to Laravel
      setClients(response.data);
    } catch (error) {
      console.error('Error fetching clients:', error);
    }
  };

  useEffect(() => {
    fetchAdmins();
    fetchClients();
  }, []);

  return (
    <div className="App">
      <h1>Client Management Dashboard</h1>
      <AdminForm onAdminAdded={fetchAdmins} />
      <AssignClientForm admins={admins} clients={clients} />
      <ClientTable clients={clients} />
    </div>
  );
};

export default App;
