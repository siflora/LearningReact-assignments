import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import counterReducer from './store/reducers/counter';
import resultReducer from './store/reducers/result';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    crt: counterReducer,
    res: resultReducer
})

const logger = store => {
    return next => {
        return action => {
            console.log('[middleware] dispatching', action);
            const result = next(action);
            console.log(result, store.getState());
            return result;
        }
    }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(logger,thunk)));

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
