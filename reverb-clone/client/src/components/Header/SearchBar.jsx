import React, { useState } from 'react';
import './SearchBar.css';

const SearchBar = () => {
  const [inputValue, setInputValue] = useState('');

  const handleClear = () => {
    setInputValue('');
  };

  return (
    <div className='search-bar__container'>
      <input
        type='text'
        placeholder='Search for gear'
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
        className='search-bar__input'
      />
      {inputValue && (
        <button className='search-bar__clear-button' onClick={handleClear}>
          𝗫 
        </button>
      )}
      <button type='submit' className='search-bar__submit-button'>
        <i className='fa fa-search'></i>
      </button>
    </div>
  );
};


export default SearchBar;
