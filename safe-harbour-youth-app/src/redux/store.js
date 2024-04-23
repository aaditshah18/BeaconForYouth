// store.js

import { createStore, combineReducers } from 'redux';
import imageReducer from './reducer';

const rootReducer = combineReducers({
    image: imageReducer
});

const store = createStore(rootReducer);

export default store;
