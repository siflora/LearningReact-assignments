import React, { Component } from 'react';

import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

const INGREDIENTS_PRICE = {
        meat: 1.49,
        salad: 0.49,
        cheese: 0.99,
        bacon: 0.89
}

class BurgerBuilder extends Component {

	state = {
		ingredients: {
		meat: 0,
		salad: 0,
		cheese: 0,
		bacon: 0,
		},
        totalPrice: 3.99,
        purchasable: false,
        purchasing: false
	};

    updatePurchaseState = (ingredients) => {

        const sum = Object.keys(ingredients)
            .map(igKey => ingredients[igKey])
            .reduce((sum, el) =>{
                return sum+el;
            },0);
        this.setState({purchasable: sum>0});
    }

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIngredients = {...this.state.ingredients};
        updatedIngredients[type] = updatedCount;
        const oldPrice = this.state.totalPrice;
        const priceAddition = INGREDIENTS_PRICE[type];
        const newPrice = oldPrice + priceAddition;
        this.setState({ingredients: updatedIngredients, totalPrice: newPrice});
        this.updatePurchaseState(updatedIngredients);
    };

    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount -1;
        const updatedIngredients = {...this.state.ingredients};
        updatedIngredients[type] = updatedCount;
        const oldPrice = this.state.totalPrice;
        const priceReduction = INGREDIENTS_PRICE[type];
        const newPrice = oldPrice - priceReduction;
        this.setState({ingredients: updatedIngredients, totalPrice: newPrice});
        this.updatePurchaseState(updatedIngredients);
    }

    purchasingHandler = ( ) =>{
        this.setState({purchasing: true})
    };

    cancelPurchaseHandler = ( ) =>{
        this.setState({purchasing: false})
    }

    continuePurchaseHandler = ( ) => {
        alert('Please Continue!')
    }

    render () {
        const disabledInfo = {
            ...this.state.ingredients
        };
        for(let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0
        };
    
        return (
            <Aux>
                <Modal show={this.state.purchasing}
                    cancelled={this.cancelPurchaseHandler}>
                    <OrderSummary ingredients={this.state.ingredients}
                    purchaseCancelled={this.cancelPurchaseHandler}
                    purchaseContinued={this.continuePurchaseHandler}
                    totalPrice={this.state.totalPrice}/>
                </Modal>
				<Burger ingredients={this.state.ingredients}/>
				<BuildControls 
                ingredientAdded={this.addIngredientHandler}
                ingredientRemoved={this.removeIngredientHandler}
                disableHandler={disabledInfo}
                totalPrice={this.state.totalPrice}
                purchasable={this.state.purchasable}
                ordered={this.purchasingHandler}/>
            </Aux>
        )
    }
};

export default BurgerBuilder;
