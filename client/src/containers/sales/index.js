import SalesPage from './sales';
import { connect } from 'react-redux';
import { getSales, createSales } from '../sales/salesActions';
import { getProducts } from '../product/productActions';
import { getCustomers } from '../customer/customerActions';
import { getSalesPersons } from '../salesPersons/salesPersonsActions';

const mapDispatchToProps = (dispatch) => {
  return {
    createSales: (payload) => dispatch(createSales(payload)),
    getSales: () => dispatch(getSales()),
    getProducts: () => dispatch(getProducts()),
    getCustomers: () => dispatch(getCustomers()),
    getSalesPersons: () => dispatch(getSalesPersons()),
  }
};

const mapStateToProps = (state) => {
  return {
    sales: state.sales,
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(SalesPage);