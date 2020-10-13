import React, {useState} from 'react';
import { Link, Route, Switch } from "react-router-dom";
import './App.css';
import Dashboard from '../components/Dashboard'
import About from '../components/About'
import Stock from '../components/Stock'
import data from '../components/data'

console.log(data)
function App() {

 

  const [stock, setStock] = useState()

  const handleClick = (stock) => {
    console.log('stock lifted', stock)
    setStock(stock)
  }

  return (
    <div className="App">
      <nav>
        <Link to='/'>
          <h1>iStocks</h1>
        </Link>
        <Link to='/stocks'>
          <h3>Stocks</h3>
        </Link>
        <Link to='/about'>
          <h3>About</h3>
        </Link>
      </nav>
      <Switch>
        <Route path='/about'>
          <About />
        </Route>
        <Route path='/stocks'>
          <Dashboard stocks={data} handleClick={handleClick}/>
        </Route>
        <Route path='/stock/:symbol/' render={(routerProps) => <Stock handleClick={handleClick} {...routerProps} stock={stock}/>}>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
