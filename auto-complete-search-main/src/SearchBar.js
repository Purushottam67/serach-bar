import React, { useState } from 'react';
import './SearchBar.css';
import Autocomplete from './Autocomplete';

const SearchBar = () => {
  const [searchText, setSearchText] = useState('');

  const handleInputChange = (e) => {
    setSearchText(e.target.value);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search..."
        value={searchText}
        onChange={handleInputChange}
      />
      {searchText && <Autocomplete searchText={searchText} />}
    </div>
  );
};

export default SearchBar;
