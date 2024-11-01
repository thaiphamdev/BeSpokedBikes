import CustomerPage from './customer';
import { connect } from 'react-redux';
import { getCustomers } from '../customer/customerActions';

const mapDispatchToProps = (dispatch) => {
  return {
    getCustomers: () => dispatch(getCustomers()),
  }
};

const mapStateToProps = (state) => {
  return {
    customers: state.customers,
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(CustomerPage);