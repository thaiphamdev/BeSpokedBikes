import ProductPage from './product';
import { connect } from 'react-redux';
import { getProducts, updateProduct } from './productActions';

const mapDispatchToProps = (dispatch) => {
  return {
    getProducts: () => dispatch(getProducts()),
    updateProduct: (payload) => dispatch(updateProduct(payload))
  }
};

const mapStateToProps = (state) => {
  return {
    products: state.products,
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductPage);