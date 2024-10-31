import React from 'react';
import './product.css';
import '../../common.css'
import ProductPage from './product';
import { connect } from 'react-redux';
import { getProducts } from './productActions';

// ProductPage = () => {

//   useEffect(() => {
//     fetchPosts();
//   }, [fetchPosts]);

//   return (
//     <div className="PageContainer">
//       <div className="Heading">
//         <h1>My Simple React Product Page</h1>
//       </div>
//       <main>
//         <p>Welcome to my simple React Product page! This is a basic example of a React project.</p>
//       </main>
//     </div>
//   );
// }
const mapDispatchToProps = (dispatch) => {
  return {
    getProducts: () => dispatch(getProducts()),
  }
};

const mapStateToProps = (state) => {
  return {
    products: state.products.products,
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductPage);

// export default ProductPage;