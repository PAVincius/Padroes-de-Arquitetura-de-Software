import '@/styles/globals.css'
import React, { useState } from 'react';
import { message, notification } from 'antd';

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}

function App() {
  const [patient, setPatient] = useState({
    name: 'John Doe',
    conditions: ['Diabetes', 'Hypertension'],
    responsibleTeam: 'Team A'
  });

  const [selectedTeam, setSelectedTeam] = useState(patient.responsibleTeam);
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (event) => {
    setSelectedTeam(event.target.value);
  };

  const handleConfirm = () => {
    setPatient({ ...patient, responsibleTeam: selectedTeam });
    notification.success({ message: 'Responsible team changed successfully!' });
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>Patient Dashboard</h2>
      <div style={styles.searchContainer}>
        <input
          type="text"
          placeholder="Search for a patient..."
          value={searchTerm}
          onChange={handleSearch}
          style={styles.searchInput}
        />
        <button style={styles.searchButton}>Search</button>
      </div>
      <div style={styles.patientInfo}>
        <p>Name: {patient.name}</p>
        <p>Conditions: {patient.conditions.join(', ')}</p>
        <p>Responsible Team: {patient.responsibleTeam}</p>
      </div>
      <div style={styles.formContainer}>
        <label style={styles.label}>
          Change Responsible Team:
          <select value={selectedTeam} onChange={handleChange} style={styles.select}>
            <option value="Team A">Team A</option>
            <option value="Team B">Team B</option>
            <option value="Team C">Team C</option>
          </select>
        </label>
        <button style={styles.button} onClick={handleConfirm}>
          Confirm
        </button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: 20
  },
  header: {
    color: '#333',
    marginBottom: 20
  },
  searchContainer: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: 20
  },
  searchInput: {
    padding: 10,
    fontSize: 16,
    marginRight: 10
  },
  searchButton: {
    padding: 10,
    backgroundColor: '#333',
    color: '#fff',
    border: 'none',
    borderRadius: 5,
    cursor: 'pointer'
  },
  patientInfo: {
    display: 'flex',
    flexDirection: 'row',
    padding: 20,
    backgroundColor: '#f2f2f2',
    borderRadius: 5,
    marginBottom: 20
  },
  formContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  label: {
    fontSize: 16,
    marginBottom: 10
  },
  select: {
    padding: 10,
    fontSize: 16,
    marginBottom: 10
  },
  button: {
    padding: 10,
    backgroundColor: '#333',
    color: '#fff',
    border: 'none',
    borderRadius: 5,
    cursor: 'pointer'
  }
};

export default App;
