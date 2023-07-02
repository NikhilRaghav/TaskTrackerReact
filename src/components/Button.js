import React from 'react'
import PropTypes from 'prop-types'

const Button = ({ colour , text, onClickProp}) => {

    return (
        <button className='btn' style={{backgroundColor: colour}} onClick={onClickProp}> 
            {text} 
        </button>
    )
}

Button.defaultProps = {
    colour: 'steelblue'
}

Button.propTypes = {
    colour:  PropTypes.string,
    text: PropTypes.string,
    onClickProp: PropTypes.func
}

export default Button
