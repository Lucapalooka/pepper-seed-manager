import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import db from '../firebase';

const PepperList = ({ filters }) => {
  const [peppers, setPeppers] = useState([]);

  useEffect(() => {
    const fetchPeppers = async () => {
      const querySnapshot = await getDocs(collection(db, 'peppers'));
      const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setPeppers(data);
    };
    fetchPeppers();
  }, []);

  const filtered = peppers.filter(p => {
    return (
      (!filters.name || p.name.toLowerCase().includes(filters.name.toLowerCase())) &&
      (!filters.color || p.color === filters.color) &&
      (!filters.species || p.species === filters.species) &&
      (!filters.shape || p.shape.includes(filters.shape)) &&
      (!filters.size || p.size === filters.size) &&
      (!filters.minHeat || p.heat >= filters.minHeat) &&
      (!filters.maxHeat || p.heat <= filters.maxHeat)
    );
  });

  return (
    <div>
      {filtered.map(p => (
        <div key={p.id}>
          <h3>{p.name}</h3>
          <p>{p.species} | {p.color} | {p.heat} SHU</p>
          <p>Shape: {p.shape}, Size: {p.size}</p>
          <p>Parents: {p.parents?.join(', ')}</p>
          <p>Flavor: {p.flavor}</p>
        </div>
      ))}
    </div>
  );
};

export default PepperList;
