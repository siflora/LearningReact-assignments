import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from './ContactData/ContactData';

class Checkout extends Component {
    
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
                    ingredients={this.props.ings}/>
                <Route path={this.props.match.path + 'contact-data'} 
                    component={ContactData}/>
            </div>
        )
    }
};

const mapStateToProps = state => {
    return {
        ings: state.ingredients,
        price: state.totalPrice
    }
}

export default connect(mapStateToProps)(Checkout);