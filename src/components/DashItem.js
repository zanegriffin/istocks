import React from 'react'
import {Link} from 'react-router-dom'

const DashItem = (props) => {
    return(
        <><li className={props.symbol} onClick={props.handleClick}>
            <Link to={'/stock/' + props.symbol}>
            <span>{props.name} </span>
            <span>{props.symbol} </span>
            </Link>
            <span>{props.lastPrice} </span>
            <span>{props.change} </span>
            </li>
            </>
    )
}

export default DashItem