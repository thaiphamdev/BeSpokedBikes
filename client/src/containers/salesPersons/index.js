import SalesPersonsPage from './salesPersons';
import { connect } from 'react-redux';
import { getSalesPersons, updateSalesPerson } from './salesPersonsActions';

const mapDispatchToProps = (dispatch) => {
  return {
    getSalesPersons: () => dispatch(getSalesPersons()),
    updateSalesPerson: (payload) => dispatch(updateSalesPerson(payload))
  }
};

const mapStateToProps = (state) => {
  return {
    salesPersons: state.salesPersons,
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(SalesPersonsPage);