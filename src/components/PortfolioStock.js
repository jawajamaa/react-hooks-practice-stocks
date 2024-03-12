import { useContext } from "react";
import { PortfolioContext } from "./App";

function PortfolioStock({ myStock }) {
    const { portfolio, setPortfolio } = useContext(PortfolioContext);

    function handleClick() {
        console.log(myStock.name + myStock.id + "was clicked");
        const updatedPortfolio = portfolio.filter(port => {
            return port.id !== myStock.id
        })
        setPortfolio(updatedPortfolio);
    }

    return(
        <div>
          <div className="card">
            <div className="card-body" onClick = { handleClick }>
                <h5 className="card-title">{myStock.name}</h5>
                <p className="card-text">{myStock.ticker}: {myStock.price}</p>
            </div>
        </div>
        </div>
    )
}

export default PortfolioStock;
