import React from 'react'


const Stock = (props) => {

   
    React.useEffect(() => {
        const stockUrl = 'https://financialmodelingprep.com/api/v3/profile/'
        const symbol = props.match.params.symbol
        const api = '?apikey=3c6edaa5281ea5f5f42e69090a91697f'
        const url = `${stockUrl}${symbol}${api}`;
        //Let's fetch!!!
        const makeApiCall = async () => {
          const res = await fetch(url);
          const json = await res.json();
          const stock = {
            name: json[0].companyName,
            symbol: json[0].symbol,
            price: json[0].price,
            change: json[0].changes
          }
         
          props.handleClick(stock);
          console.log('json', json[0]);
        };
        makeApiCall()
      }, []);
    console.log('this is json stock props', props.stock)

    let stockRender = () => {
        return (
           <>
                <h1>{props.stock.name} </h1>
                <h1>{props.stock.symbol} </h1>
                <h3>{props.stock.price} </h3>
                <h3>{props.stock.change} </h3> 
            </>
        )
    }
    
    return(
        <div> 
            {props.stock ? stockRender() : ''}
        </div>
    )
} 

export default Stock