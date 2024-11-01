import ReportPage from './report';
import { connect } from 'react-redux';
import { getReport } from '../report/reportActions';

const mapDispatchToProps = (dispatch) => {
  return {
    getReport: () => dispatch(getReport()),
  }
};

const mapStateToProps = (state) => {
  return {
    report: state.report,
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ReportPage);