import React from 'react'; 

import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
import classes from './Burger.module.css';

const burger = (props) => {
	  let arrayedIngredients = Object.keys(props.ingredients)
			.map(igKey => { return [...Array(props.ingredients[igKey])]
				.map((igName, i)=> (
					<BurgerIngredient key={igKey + i} type={igKey} />
				))})
				.reduce((arr,el) => {
					return arr.concat(el)}, [] );
		if (arrayedIngredients.length === 0) {
			arrayedIngredients = <p>Please start adding ingredients :)</p>
		}
    return (
        <div className={classes.Burger}>
            <BurgerIngredient type='bread-top'/>
						{arrayedIngredients}
						<BurgerIngredient type='bread-bottom'/>
        </div>
    )
};

export default burger;