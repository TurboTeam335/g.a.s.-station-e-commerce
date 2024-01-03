import React from 'react';
import './SortFilter.css'

const SortFilter = ({ onSortChange }) => {
  const handleChange = (event) => {
    onSortChange(event.target.value);
  };

  return (
    <div className="sort-filter-container">
      <select onChange={handleChange}>
        <option value="Newest - Oldest">Newest - Oldest</option>
        <option value="Oldest - Newest">Oldest - Newest</option>
        <option value="Alphabetical A-Z">Alphabetical A-Z</option>
        <option value="Alphabetical Z-A">Alphabetical Z-A</option>
        <option value="Price High-Low">Price High-Low</option>
        <option value="Price Low-High">Price Low-High</option>
      </select>
      
      <select>
        <option>12 per page</option>
        <option>30 per page</option>
      </select>
      
    </div>
  );
}

export default SortFilter;
