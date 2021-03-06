import React from 'react';
import './Person.css';
import Aux from '../../../hoc/Auxilary';
import WithClass from '../../../hoc/WithClass'

const person = (props) => {
    return(
        <WithClass classes = 'Person'>
            <p onClick={props.click}>I'm {props.name} and I am {props.age} years old </p>
            <p>{props.children}</p>
            <input type = "text" onChange={props.changed} value={props.name}/>
        </WithClass>);    
};

export default person;