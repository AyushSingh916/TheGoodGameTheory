import React, { useState, useEffect } from "react";
import axios from "axios";
import BeerCard from "./components/BeerCard";
import Header from "./components/Header";
import "./App.css"; 

const App = () => {
  const [beers, setBeers] = useState([]);
  const [filteredBeers, setFilteredBeers] = useState([]);

  useEffect(() => {
    const fetchBeers = async () => {
      try {
        const response = await axios.get("https://api.punkapi.com/v2/beers");
        setBeers(response.data);
        setFilteredBeers(response.data);
      } catch (error) {
        console.error("Error fetching beers:", error);
      }
    };

    fetchBeers();
  }, []);

  const handleSearch = (query) => {
    const filtered = beers.filter(
      (beer) =>
        beer.name.toLowerCase().includes(query.toLowerCase()) ||
        beer.tagline.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredBeers(filtered);
  };

  return (
    <div className="App">
      <Header handleSearch={handleSearch} />
      <div className="beer-list">
        {filteredBeers.map((beer) => (
          <BeerCard key={beer.id} beer={beer} />
        ))}
      </div>
    </div>
  );
};

export default App;
