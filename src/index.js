import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers,applyMiddleware } from 'redux';

import counterReducer from './store/reducers/counter';
import resultReducer from './store/reducers/result';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const rootReducer = combineReducers({
    ctr: counterReducer,
    res: resultReducer
});
//create simple middleware for logging
const logger=store=>{
    return next=>{
        return action =>{
            console.log('Middleware Dispaching: ',action);
            const result = next(action);
            console.log('Middleware next: ', store.getState())
            return result;
        }
    }
}
//we can pass list of middleware function, they will be executed in order
const store = createStore(rootReducer,applyMiddleware(logger));

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
