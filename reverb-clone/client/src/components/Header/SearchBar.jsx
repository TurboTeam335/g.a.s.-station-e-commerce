import React, { useState } from 'react';
import './SearchBar.css';

const SearchBar = () => {
  const [inputValue, setInputValue] = useState(''); // 1

  const handleClear = () => {
    // 3
    setInputValue('');
  };

  return (
    <div className='search-bar'>
      <input
        type='text'
        placeholder='Search for gear'
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
      />
      {inputValue && (
        <button className='clear' onClick={handleClear}>
          X
        </button>
      )}
      <button type='submit'>
        <i className='fa fa-search'></i>
      </button>
    </div>
  );
};

export default SearchBar;
