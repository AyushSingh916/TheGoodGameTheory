import React from "react";
import "./Header.css"; 

const Header = ({ handleSearch }) => {
  const handleChange = (event) => {
    handleSearch(event.target.value);
  };

  return (
    <div className="header">
      <h1>Beer Finder</h1>
      <input
        type="text"
        placeholder="Search beers..."
        onChange={handleChange}
      />
    </div>
  );
};

export default Header;
