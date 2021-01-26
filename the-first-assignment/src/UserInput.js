import React from 'react';
import App from './App';
import './UserInput.css';

const userInput = (props) => {
    return (
    <div className='UserInput'>
    <p>{props.children}</p>
    <input type='text' onChange={props.input} value={props.username}/>
    </div>
)};

export default userInput;