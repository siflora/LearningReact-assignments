import React from 'react';

import Aux from '../../../hoc/Aux';
import Button from '../../UI/Button/Button';

const orderSummary = (props) => {
    const orderedIngredients = Object.keys(props.ingredients)
        .map(igKey => (
            <li key={igKey}>
            <span style={{textTransform: 'capitalize'}}>{igKey}</span>: 
            {props.ingredients[igKey]}
            </li>
        ))
    return (
    <Aux>
    <h3> You have ordered: </h3>
    <ul>
        {orderedIngredients}
    </ul>
    <p><strong>Total Price : {props.totalPrice.toFixed(2)}</strong></p>
    <p>Wanna check out?</p>
    <Button btnType='Danger' clicked={props.purchaseCancelled}>Cancel</Button>
    <Button btnType='Success' clicked={props.purchaseContinued}>Continue</Button>
    </Aux>
    )
};

export default orderSummary;