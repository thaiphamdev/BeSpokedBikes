import { combineReducers } from 'redux';
import productReducer from './containers/product/productReducer';
import salesPersonsReducer from './containers/salesPersons/salesPersonsReducer';
import customerReducer from './containers/customer/customerReducer';
import salesReducer from './containers/sales/salesReducer';
import reportReducer from './containers/report/reportReducer';

const rootReducer = combineReducers({
  products: productReducer,
  salesPersons: salesPersonsReducer,
  customers: customerReducer,
  sales: salesReducer,
  report: reportReducer,
});

export default rootReducer;