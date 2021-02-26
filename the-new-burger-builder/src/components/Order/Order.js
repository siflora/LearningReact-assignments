import React from 'react';

import classes from './Order.css';

const order = (props) => {
    let ingredients = [];
    for( let ingredientName in props.ingredients ) {
        ingredients.push({
            name: ingredientName,
            amount: props.ingredients[ingredientName]
        });
    }

    const outputIngredient = ingredients.map(
        ingredient => {
            return <span
            style={{
                textTransform: 'capitalize',
                display: 'inline-block',
                margin: '0 8px',
                border: '1px solid #ccc',
                padding: '5px'
            }}
            key={ingredient.name}> 
            {ingredient.name} ({ingredient.amount}) </span>;
        } 
    )
    return (
    <div className={classes.Order}>
        <p>{outputIngredient}</p>
        <p>Price: <strong>{props.price} </strong></p>
    </div>
    )
};

export default order;