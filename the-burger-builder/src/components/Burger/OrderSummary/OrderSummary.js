import React, { Component }from 'react';

import Aux from '../../../hoc/Aux';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {

    componentWillUpdate(){
        console.log('working')
    }

    render () {
        const orderedIngredients = Object.keys(this.props.ingredients)
        .map(igKey => (
            <li key={igKey}>
            <span style={{textTransform: 'capitalize'}}>{igKey}</span>: 
            {this.props.ingredients[igKey]}
            </li>))
        return (
            <Aux>
                <h3> You have ordered: </h3>
                <ul>
                    {orderedIngredients}
                </ul>
                <p><strong>Total Price : {this.props.totalPrice.toFixed(2)}</strong></p>
                <p>Wanna check out?</p>
                <Button btnType='Danger' clicked={this.props.purchaseCancelled}>Cancel</Button>
                <Button btnType='Success' clicked={this.props.purchaseContinued}>Continue</Button>
            </Aux>
    )
    
    }
};

export default OrderSummary;