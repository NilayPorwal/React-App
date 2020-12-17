import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import SearchResult from './SearchResult';

const SearchPage = (props) => {
  const [input, setInput] = useState('');
  const [countryListDefault, setCountryListDefault] = useState();
  const [searchResult, setSearchResult] = useState();
  const apiURL = 'https://api.jikan.moe/v3/search/anime'


  const fetchData = async () => {
    return await fetch(apiURL + '?q=' + input + "&amp;limit=20")
      .then(response => response.json())
      .then(data => {
          console.log(JSON.stringify(data))
          setSearchResult((prev)=>[...prev, ...data.results]) 
       });}

  const updateInput = async (input) => {
     setInput(input);
  }

	
  return (
    <div style={{backgroundColor:"#0078d4"}}>
      <SearchBar 
       keyword={input} 
       setKeyword={updateInput}
       fetchData={fetchData}
      />
      <SearchResult 
        searchResult={searchResult}
        fetchData={fetchData}
        />
    </div>
   );
}

export default SearchPage