import React, { createContext } from "react";
import Header from "./Header";
import MainContainer from "./MainContainer";

function App() {
  return (
    <div>
      <Header />
      <MainContainer />
    </div>
  );
}

export default App;

export const StockContext = createContext([]);
export const PortfolioContext = createContext([]);
