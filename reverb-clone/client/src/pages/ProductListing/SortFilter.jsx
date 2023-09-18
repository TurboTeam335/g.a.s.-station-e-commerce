import React from 'react';
import './SortFilter.css'

const SortFilter = () => {

  return (
    <div className="sort-filter-container">
      <select>
        <option>Newest - Oldest</option>
        <option>Oldest - Newest</option>
        <option>Alphabetical A-Z</option>
        <option>Alphabetical Z-A</option>
        <option>Price High-Low</option>
        <option>Price Low-High</option>
      </select>
      
      <select>
        <option>12 per page</option>
        <option>30 per page</option>
      </select>
      
    </div>
  );
}

export default SortFilter;
