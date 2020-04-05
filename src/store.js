import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension/developmentOnly';
import rootReducer from './reducers';

const middleware = [thunk];
const initialState = {};

//const Store = createStore(rootReducer,initialState,composeWithDevTools(applyMiddleware(...middleWare)));

const store = createStore(rootReducer,initialState,composeWithDevTools(applyMiddleware(...middleware)));

export default store;