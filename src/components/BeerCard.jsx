import React from "react";
import "./BeerCard.css"; 

const BeerCard = ({ beer }) => {
  return (
    <div className="beer-card">
      <h2 className="beer-name">{beer.name}</h2>
      <img className="beer-image" src={beer.image_url} alt={beer.name} />
      <p className="beer-tagline">{beer.tagline}</p>
      <p className="beer-abv">ABV: {beer.abv}%</p>
      <p className="beer-ibu">IBU: {beer.ibu}</p>
      <p className="beer-description">Description: {beer.description}</p>
    </div>
  );
};

export default BeerCard;
