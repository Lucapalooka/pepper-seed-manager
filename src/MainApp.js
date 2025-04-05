// src/MainApp.js
import React, { useState } from 'react';
import PepperForm from './components/PepperForm';
import PepperList from './components/PepperList';
import SearchFilters from './components/SearchFilters';

function MainApp() {
  const [filters, setFilters] = useState({});

  return (
    <div className="MainApp">
      <h1>Pepper Seed Manager</h1>
      <PepperForm />
      <SearchFilters filters={filters} setFilters={setFilters} />
      <PepperList filters={filters} />
    </div>
  );
}

export default MainApp;
