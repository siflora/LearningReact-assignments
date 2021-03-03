import React, { Component } from 'react';
import axios from '../../../axios-orders';
import { connect } from 'react-redux';

import Button from '../../../components/UI/Button/Button';
import Spinner from '../../../components/UI/Spinner/Spinner';
import Input from '../../../components/UI/Input/Input';

import classes from './ContactData.css';

class ContactData extends Component {
    state = {
        orderForm: {
                    name: {
                        elementType: 'input',
                        elementConfig: {
                            type: 'text',
                            placeholder: 'Your Name' 
                        },
                        value: '',
                        validation: {
                            required: true
                        },
                        valid: false,
                        touched: false

                    },
                    street: {
                        elementType: 'input',
                        elementConfig: {
                            type: 'text',
                            placeholder: 'Your Street' 
                        },
                        value: '',
                        validation: {
                            required: true
                        },
                        valid: false,
                        touched: false
                    },
                    zipCode: {
                        elementType: 'input',
                        elementConfig: {
                            type: 'text',
                            placeholder: 'Zip Code' 
                        },
                        value: '',
                        validation: {
                            required: true,
                            minLength: 5,
                            maxLength: 5
                        },
                        valid: false,
                        touched: false
                    },
                    country: {
                        elementType: 'input',
                        elementConfig: {
                            type: 'text',
                            placeholder: 'Your Country' 
                        },
                        value: '',
                        validation: {
                            required: true
                        },
                        valid: false,
                        touched: false
                    },
                    email: {
                        elementType: 'input',
                        elementConfig: {
                            type: 'email',
                            placeholder: 'Your E-mail' 
                        },
                        value: '',
                        validation: {
                            required: true
                        },
                        valid: false,
                        touched: false
                    },
                    deliveryMethod: {
                        elementType: 'select',
                        elementConfig: {
                            options: [{value:'fastest', displayValue:'Fastest'}, 
                            {value:'cheapest', displayValue:'Cheapest'}]
                        },
                        value: 'cheapest',
                        validation: { },
                        valid: true,
                        touched: false
                    }
            },   
        isValid: false,
        loading: false
    }

    checkValidity (value,rules) {
        let isValid = true;
        if (!rules) {
            return true;
        }

        if (rules.required) {
            isValid = value.trim() !== '' && isValid;
        }

        if (rules.minLength) {
            isValid = value.length >= rules.minLength && isValid
        }

        if (rules.maxLength) {
            isValid = value.length <= rules.maxLength && isValid
        }

        return isValid;
    }

    inputChangedHandler = (event, inputIdentifier) => {
        const updatedOrderForm = {
            ...this.state.orderForm
        }
        const updatedOrderFormElement = {
            ...updatedOrderForm[inputIdentifier]
        }
        updatedOrderFormElement.value = event.target.value;
        updatedOrderFormElement.valid = 
        this.checkValidity(updatedOrderFormElement.value, updatedOrderFormElement.validation);
        updatedOrderFormElement.touched = true;
        updatedOrderForm[inputIdentifier] = updatedOrderFormElement;

        let formIsValid = true;
        for (let inputIdentifier in updatedOrderForm) {
            formIsValid = updatedOrderForm[inputIdentifier].valid && formIsValid;
        }
        this.setState({orderForm: updatedOrderForm, isValid: formIsValid})
    }

    orderHandler = (event) => {
        event.preventDefault();
        this.setState( { loading: true } );
        const formData = {};
        for (let formElementIdentifier in this.state.orderForm) {
            formData[formElementIdentifier] = this.state.orderForm[formElementIdentifier].value;
        }
        const order = {
            ingredients: this.props.ings,
            price: this.props.price,
            orderData: formData
        }
        axios.post( '/orders.json', order )
            .then( response => {
                this.setState( { loading: false } );
                this.props.history.push('/');
            } )
            .catch( error => {
                this.setState( { loading: false } );
            } );

    }

    render () {

        const orderFormsArray = [];
        for (let key in this.state.orderForm) {
            orderFormsArray.push(
                {id: key,
                config: this.state.orderForm[key]}
            )
        }

        let form = (
            <form onSubmit={this.orderHandler}>
                {orderFormsArray.map(orderForm=> (
                    <Input key={orderForm.id}
                    elementType={orderForm.config.elementType}
                    elementConfig={orderForm.config.elementConfig}
                    value={orderForm.config.value}
                    invalid={!orderForm.config.valid}
                    shouldValidate={orderForm.config.validation}
                    touched={orderForm.config.touched}
                    changed={(event)=>this.inputChangedHandler(event,orderForm.id)}/>
                ))
                }
            </form>
        )
        if (this.state.loading) {
            form = <Spinner />
        }

        return (
            <div className={classes.ContactData}>
                <h4>Please enter your information</h4>
                {form}
                <Button btnType ='Success' 
                clicked={this.orderHandler}
                disabled={!this.state.isValid}>Order</Button>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        ings: state.ingredients,
        price: state.totalPrice
    }
}
export default connect(mapStateToProps) (ContactData);