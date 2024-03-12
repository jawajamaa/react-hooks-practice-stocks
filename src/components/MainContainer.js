import React, { useEffect, useState } from "react";
import { StockContext } from "./App";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";
import StockContainer from "./StockContainer";

const baseUrl = "http://localhost:3001/stocks/";

function MainContainer() {
  const [stocks, setStocks] = useState([]);

  useEffect(()=>{
    fetch(baseUrl)
      .then(r =>r.json())
      .then(setStocks)
  }, [])

  return (
    <StockContext.Provider value = { {stocks, setStocks}}>
      <SearchBar />
      <div className="row">
        <div className="col-8">
          <StockContainer />
        </div>
        <div className="col-4">
          <PortfolioContainer />
        </div>
      </div>
    </StockContext.Provider>
  );
}

export default MainContainer;
