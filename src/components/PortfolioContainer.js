import React, { useContext } from "react";
import { PortfolioContext } from "./App";
import PortfolioStock from "./PortfolioStock";

function PortfolioContainer() {
  const { portfolio } = useContext(PortfolioContext);


  return (
    <div>
      <h2>My Portfolio</h2>
      { portfolio.map(myStock => (
        <PortfolioStock
          key = { myStock.id } 
          myStock = { myStock }
        />
      ))}
    </div>
  );
}

export default PortfolioContainer;
