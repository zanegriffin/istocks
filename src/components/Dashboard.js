import React from 'react'
import DashItem from './DashItem'
import './Dashboard.css';
const Dashboard = (props) => {

    

    let stocksArr = props.stocks.map((stock, index) => {
        return (
            <DashItem 
            name={stock.name} 
            symbol={stock.symbol}
            lastPrice={stock.lastPrice}
            change={stock.change}
            key={index}
            />
        )
    })

    return(
        <div>
            <ul>
                {stocksArr}
            </ul>
        </div>
    )
}

export default Dashboard