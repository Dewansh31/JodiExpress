import React from 'react'
import './Search.css';

function Search() {
  return (
    <div>
     <div className="searchBarwrapper">
  <div id="search-container">
    <input type="search" id="search-input" placeholder="Search product name here.." />
    <button id="searchbtn">Search</button>
  </div>
  <div id="buttons">
    <button className="button-value" onclick="filterProduct('all')">All</button>
    &nbsp;
    <button className="button-value" onclick="">
      City
    </button>
    &nbsp;
    <button className="button-value" onclick="">
      Qualification
    </button>
    &nbsp;
    <button className="button-value" onclick="">
      Age 
    </button>
    &nbsp;
    <button className="button-value" onclick="">
      Innual Income
    </button>
    &nbsp;
    <button className="button-value" onclick="">
      Caste
    </button>
  </div>
  <div id="products" />
</div>

    </div>
  )
}

export default Search