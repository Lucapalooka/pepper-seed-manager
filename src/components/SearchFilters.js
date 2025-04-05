import React from 'react';

const SearchFilters = ({ filters, setFilters }) => {
  const handleChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <input name="name" placeholder="Search by name" onChange={handleChange} />
      <input name="color" placeholder="Color" onChange={handleChange} />
      <input name="species" placeholder="Species" onChange={handleChange} />
      <input name="shape" placeholder="Shape" onChange={handleChange} />
      <input name="size" placeholder="Size" onChange={handleChange} />
      <input name="minHeat" placeholder="Min SHU" type="number" onChange={handleChange} />
      <input name="maxHeat" placeholder="Max SHU" type="number" onChange={handleChange} />
    </div>
  );
};

export default SearchFilters;
