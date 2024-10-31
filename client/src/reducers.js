import { combineReducers } from 'redux';
import productReducer from './containers/product/productReducer';

const rootReducer = combineReducers({
  products: productReducer,
});

export default rootReducer;