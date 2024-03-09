import React, { useState, useEffect } from "react";
import axios from "axios";
import BeerCard from "./BeerCard";
import "./BeerList.css";

const BeerList = () => {
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    const fetchBeers = async () => {
      try {
        const response = await axios.get("https://api.punkapi.com/v2/beers");
        setBeers(response.data);
      } catch (error) {
        console.error("Error fetching beers:", error);
      }
    };

    fetchBeers();
  }, []);

  return (
    <div className="beer-list-container">
      <div className="beer-list">
        {beers.map((beer) => (
          <BeerCard key={beer.id} beer={beer} />
        ))}
      </div>
    </div>
  );
};

export default BeerList;
