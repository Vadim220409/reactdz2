import React from 'react';
import PropTypes from 'prop-types';


export const Greeting = ({ name }) => {
    return <h1>Привіт, {name}!</h1>;
};
  
Greeting.propTypes = {
    name: PropTypes.string.isRequired
};
  
export const Message =  ({text})  => {
    return <p> {text} </p>;
};

Message.propTypes = {
    text: PropTypes.string.isRequired
};

export const Button = ({onClick}) => {
    return <button onClick={onClick}>Натиснути</button>
}

Button.propTypes = {
    onClick: PropTypes.func.isRequired
};



