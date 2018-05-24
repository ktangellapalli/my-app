import React from 'react';
import ReactDOM from 'react-dom';

import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import allreducers from "./reducers"

import './index.css';
import App from './App';
import Home from './home';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(allreducers, applyMiddleware(thunk));

ReactDOM.render(<Provider store={store}>
                    <BrowserRouter>
                        <Switch>
                            <Route path="/" exact component={Home} /> 
                            <Route path="/users" component={App} /> 
                        </Switch>
                    </BrowserRouter>
                </Provider>, document.getElementById('root'));
registerServiceWorker();
