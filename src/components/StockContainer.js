import React, { useContext } from "react";
import Stock from "./Stock";
import { StockContext } from "./App";

function StockContainer() {
  const { stocks, setStocks } = useContext(StockContext);

console.log(stocks);

  return (
    <div>
      <h2>Stocks</h2>
      {stocks.map(stock =>(
        <Stock
          key = { stock.id } 
          stock = { stock }
        />
      ))}
    </div>
  );
}

export default StockContainer;
