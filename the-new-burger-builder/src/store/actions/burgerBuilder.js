import * as actionTypes from './actionTypes';
import axios from '../../axios-orders';

export const addIngredient = (ingretName) => {
    return {
        type: actionTypes.ADD_INGREDIENT,
        ingredientName: ingretName
    }
}

export const removeIngredient = (ingretName) => {
    return {
        type: actionTypes.REMOVE_INGREDIENT,
        ingredientName: ingretName
    }
}

export const setIngredients = (ingredients) => {
    return {
        type: actionTypes.SET_INGREDIENTS,
        ingredients: ingredients
    }
}

export const setIngredientsFailed = () => {
    return {
        type: actionTypes.SET_INGREDIENTS_FAILED
    }
}

export const initIngredients = () => {
    return dispatch => {
        axios.get( 'https://react-burger-builder-207bf-default-rtdb.europe-west1.firebasedatabase.app/ingredients.json' )
            .then( response => {
                dispatch(setIngredients(response.data))
            } )
            .catch( error => {
                dispatch(setIngredientsFailed())
            } );
    }
}