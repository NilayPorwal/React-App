import React from 'react';

const SearchBar = ({keyword, setKeyword, fetchData}) => {
  const BarStyling = {width:"20rem",background:"#F2F1F9", border:"none", padding:"0.5rem"};
  return (
    <div style={{marginLeft:"40%", paddingTop:20}}>
    <input 
        style={BarStyling}
        key="random1"
        value={keyword}
        placeholder={"search"}
        onChange={(e) => setKeyword(e.target.value)}
        />
    <button style={{marginLeft:20}} onClick={fetchData}>GO</button>
   </div>
  );
}

export default SearchBar