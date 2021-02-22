import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';

class Checkout extends Component {
    state = {
        ingredients: {
            salad:1,
            meat:1,
            bacon:1,
            cheese:1
        }
    };
    render () {
        return (
            <Route path='/checkout/'>
                <CheckoutSummary ingredients={this.state.ingredients}/>
            </Route>
        )
    }
};

export default Checkout