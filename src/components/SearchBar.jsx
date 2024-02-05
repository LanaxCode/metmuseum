// import { useState} from "react";
// import '../css/SearchBar.css'
// import lupe from '../assets/img/lupe-50.png'

// const SearchBar = ({ onSearch }) => {

//     const [query, setQuery] = useState("");

//     const handleInputChange = (e) => {
//       setQuery(e.target.value);
//     };

//     const handleSearch = () => {
//               onSearch(query);
//       };

//     return ( 

// <div className="wrap">
//     <div className="search">
//       <input type="text" className="searchTerm" id="input_text" value={query} onChange={handleInputChange} placeholder="Search the Collection"></input>
//       <button type="submit" className="searchButton" onClick={handleSearch}>
//         <img className="icon" src={lupe}/>
//       </button>
//     </div>
//   </div>


//      );
// }
 
// export default SearchBar;

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
          placeholder="Search the Collection"
        />
        <button type="button" className="searchButton" onClick={handleSearch}>
          <img className="icon" src={lupe} alt="search icon" />
        </button>
      </div>
    </div>
  );
};

export default SearchBar;