import React, { Component } from 'react';
import {BrowserRouter} from 'react-router-dom'

import Layout from './hoc/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from './containers/Checkout/Checkout';

class App extends Component {
  render () {
    return (
      <div>
      <BrowserRouter>
        <Layout>
          <BurgerBuilder />
          <Checkout />
        </Layout>
      </BrowserRouter>
      </div>
    );
  }
}

export default App;
