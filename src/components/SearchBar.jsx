
import { useState } from 'react';
import '../css/SearchBar.css';
import lupe from '../assets/img/lupe-50.png';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <div className="wrap">
      <div className="search">
        <input
          type="text"
          className="searchTerm"
          value={query}
          onChange={handleInputChange}
          placeholder="Search the Collection z.B. Van Gogh"
        />
        <button type="button" className="searchButton" onClick={handleSearch}>
          <img className="icon" src={lupe} alt="search icon" />
        </button>
      </div>
    </div>
  );
};

export default SearchBar;