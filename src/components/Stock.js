import React, { useContext } from "react";
import { PortfolioContext } from "./App";

function Stock({ stock }) {
  // const { ticker, name, type, price } = stock;
  const { portfolio, setPortfolio } = useContext(PortfolioContext);

  function handleClick() {
    console.log( stock.name + " was clicked")
  }

  return (
    <div>
      <div className="card">
        <div className="card-body" onClick = { handleClick }>
          <h5 className="card-title">{stock.name}</h5>
          <p className="card-text">{stock.ticker}: {stock.price}</p>
        </div>
      </div>
    </div>
  );
}
export default Stock;
