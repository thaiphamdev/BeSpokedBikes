import { combineReducers } from 'redux';
import productReducer from './containers/product/productReducer';
import salesPersonsReducer from './containers/salesPersons/salesPersonsReducer';

const rootReducer = combineReducers({
  products: productReducer,
  salesPersons: salesPersonsReducer
});

export default rootReducer;