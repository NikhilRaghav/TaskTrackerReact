import React from 'react'
import PropTypes from 'prop-types'
import { useLocation } from 'react-router'
import Button from './Button'

const Header = ( { title, onAddBtnShow , showAddBtnProp} ) => {

    const location = useLocation()

    return (
        <header className='header'>
            <h1>{title}</h1>
            { location.pathname === "/" && <Button 
                text= {showAddBtnProp ? "Close" : "Add"}
                colour= {showAddBtnProp ? "red" : "green"}
                onClickProp= {onAddBtnShow} />
            }
        </header>
    ) 
}

// default props setting
Header.defaultProps = {
    title: 'Welcome To Task Tracker'
}

Header.propTypes = {
    title : PropTypes.string.isRequired
}


// const headingStyle = {
//     color:'red', 
//     backgroundColor:'greenyellow'
// }


export default Header
