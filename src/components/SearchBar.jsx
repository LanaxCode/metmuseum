import { useState} from "react";
import '../css/SearchBar.css'
import lupe from '../assets/img/lupe-50.png'

const SearchBar = ({ onSearch }) => {

    const [query, setQuery] = useState("");

    const handleInputChange = (e) => {
      setQuery(e.target.value);
    };

    const handleSearch = () => {
              onSearch(query);
      };

    return ( 

<div class="wrap">
    <div class="search">
      <input type="text" class="searchTerm" id="input_text" value={query} onChange={handleInputChange} ></input>
      <button type="submit" class="searchButton" onClick={handleSearch}>
        <img className="icon" src={lupe}/>
      </button>
    </div>
  </div>


     );
}
 
export default SearchBar;