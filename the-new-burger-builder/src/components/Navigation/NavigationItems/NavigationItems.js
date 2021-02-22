import React from 'react';
import { Link } from 'react-router-dom';

import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = () => (
    <ul className={classes.NavigationItems}>
        <NavigationItem>
            <Link to='/burger-builder/'>Burger Builder</Link>
        </NavigationItem>
        <NavigationItem>
            <Link to='/checkout/'>Checkout</Link>
        </NavigationItem>
    </ul>
);

export default navigationItems;