import React, {Component} from 'react';
import "./Button.css";

const Button = (props) => {
    return(
        <div 
            className="Button"
            onClick={props.onClick}
            data-size={props.size}
            data-value={props.value}
            style={{color: props.color}}>
            {props.label}
        </div>
    );
}

export default Button;