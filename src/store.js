import {createStore, applyMiddleware} from 'redux';

import {hotColdReducer} from './reducer';

export default createStore(hotColdReducer);
