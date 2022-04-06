import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import cartReducer from '../reducers/cart';
import pizzaReducer from '../reducers/pizza';

const rootReducer = combineReducers({
  pizza: pizzaReducer,
  cart: cartReducer,
});

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
