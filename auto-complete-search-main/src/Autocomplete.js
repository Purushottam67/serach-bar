import React, { useState, useEffect } from 'react';
import { getStates } from './api';
import './Autocomplete.css';

const Autocomplete = ({ searchText }) => {
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    const fetchStates = async () => {
      const response = await getStates();
      setSuggestions(response);
    };

    fetchStates();
  }, []);

  const filteredSuggestions = suggestions
    .map((state) => state.state_name)
    .filter((state) =>
      state.toLowerCase().includes(searchText.toLowerCase())
    );

  return (
    <ul className="autocomplete">
      {filteredSuggestions.map((state, index) => (
        <li key={index}>{state}</li>
      ))}
    </ul>
  );
};

export default Autocomplete;
