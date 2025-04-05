import React, { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import db from '../firebase';

const PepperForm = () => {
  const [pepper, setPepper] = useState({
    name: '',
    species: '',
    heat: '',
    color: '',
    shape: '',
    size: '',
    parents: '',
    flavor: '',
  });

  const handleChange = (e) => {
    setPepper({ ...pepper, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, 'peppers'), {
        ...pepper,
        heat: parseInt(pepper.heat),
        parents: pepper.parents.split(',').map(p => p.trim()),
      });
      alert('Pepper added!');
    } catch (error) {
      alert('Error adding pepper:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {['name', 'species', 'heat', 'color', 'shape', 'size', 'parents', 'flavor'].map((field) => (
        <input
          key={field}
          name={field}
          placeholder={field}
          value={pepper[field]}
          onChange={handleChange}
          required
        />
      ))}
      <button type="submit">Add Pepper</button>
    </form>
  );
};

export default PepperForm;
