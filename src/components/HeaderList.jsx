import { PinDropSharp } from '@material-ui/icons'
import React from 'react'
import { Link } from 'react-router-dom'


const HeaderList = (props) => {
    return (
        <Link to={props.url}>
            <li className={props.className}>{props.string}</li>
        </Link>
    )
}

export default HeaderList