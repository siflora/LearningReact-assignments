import React from 'react';

import classes from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    {label:'Meat', type:'meat'},
    {label:'Salad', type:'salad'},
    {label:'Bacon', type:'bacon'},
    {label:'Cheese', type:'cheese'},
]
const buildControls = (props) => (
    <div className={classes.BuildControls}>
        <p>Total Price: <strong>{props.totalPrice.toFixed(2)}$</strong></p>

        {controls.map(ctrl => (
            <BuildControl 
            key={ctrl.label} label={ctrl.label} 
            added={()=> props.ingredientAdded(ctrl.type)} 
            removed={()=> props.ingredientRemoved(ctrl.type)}
            disabled={props.disableHandler[ctrl.type]}/>
        ))}

        <button className={classes.OrderButton}
        disabled={!props.purchasable}
        onClick={props.ordered}>Order Now</button>
    </div>
);

export default buildControls;