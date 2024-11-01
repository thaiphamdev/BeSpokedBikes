import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';


import HomePage from './containers/home';
import ProductPage from './containers/product';
import SalesPersonsPage from './containers/salesPersons';

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li><Link to="/">Home Page</Link></li>
          <li><Link to="/salespersons">Sales Persons</Link></li>
          <li><Link to="/products">Products</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/salespersons" element={<SalesPersonsPage />} />
        <Route path="/products" element={<ProductPage />} />
      </Routes>
    </Router>
  );
}

export default App;
