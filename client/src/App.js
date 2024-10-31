import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';


import HomePage from './containers/home';
import ProductPage from './containers/product';

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li><Link to="/homePage">Home Page</Link></li>
          <li><Link to="/product">Product</Link></li>
        </ul>
      </nav>
      
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/homePage" element={<HomePage />} />
        <Route path="/product" element={<ProductPage />} />
      </Routes>
    </Router>
  );
}

export default App;
