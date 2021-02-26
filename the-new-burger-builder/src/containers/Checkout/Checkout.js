import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from './ContactData/ContactData';

class Checkout extends Component {
    constructor (props) {
        super (props);
        const query = new URLSearchParams(this.props.location.search);
        const ingredients = {};
        let price = null;
        for (let param of query.entries()) {
            if (param[0] === 'price') {
                price = param[1];
            } else {
                ingredients[param[0]] = +param[1]
            }
        }
        this.state = {
            ingredients: ingredients,
            totalPrice:price 
        }
    }
    

    // componentDidMount () {
        
    //     this.setState({ingredients: ingredients, totalPrice: price});
    // }

    checkoutContinueHandler = () => {
        this.props.history.replace('/checkout/contact-data');
    }

    checkoutCancelHandler = () => {
        this.props.history.goBack();
    }

    render () {
        return (
            <div>
                <CheckoutSummary 
                    checkoutCancelled={this.checkoutCancelHandler}
                    checkoutContinued={this.checkoutContinueHandler}
                    ingredients={this.state.ingredients}/>
                <Route path={this.props.match.path + 'contact-data'} 
                    render={(props)=>(<ContactData 
                                        ingredients={this.state.ingredients}
                                        totalPrice={this.state.totalPrice}/>)} />
            </div>
        )
    }
};

export default Checkout;