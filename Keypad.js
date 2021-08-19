import React, { Component } from 'react';
import "./Keypad.css";

const Keypad = (props) => {
    return (
        <div className="Keypad">
            {props.children}
        </div>
    )
}

export default Keypad;