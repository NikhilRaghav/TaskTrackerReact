import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'

const Header = ( { title, onAddBtnShow , showAddBtnProp} ) => {

    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button 
                text= {showAddBtnProp ? "Close" : "Add"}
                colour= {showAddBtnProp ? "red" : "green"}
                onClickProp= {onAddBtnShow}
            />
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
