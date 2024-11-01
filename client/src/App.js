import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';


import HomePage from './containers/home';
import ProductPage from './containers/product';
import SalesPersonsPage from './containers/salesPersons';
import CustomerPage from './containers/customer';
import SalesPage from './containers/sales';
import ReportPage from './containers/report';

function App() {
  return (
    <Router>
      <div className='navContainer'>
        <div><Link to="/">Home Page</Link></div>
        <div><Link to="/salespersons">Sales Persons</Link></div>
        <div><Link to="/products">Products</Link></div>
        <div><Link to="/customers">Customers</Link></div>
        <div><Link to="/sales">Sales</Link></div>
        <div><Link to="/report">Report</Link></div>
      </div>

      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/salespersons" element={<SalesPersonsPage />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/customers" element={<CustomerPage />} />
        <Route path="/sales" element={<SalesPage />} />
        <Route path="/report" element={<ReportPage />} />
      </Routes>
    </Router>
  );
}

export default App;
