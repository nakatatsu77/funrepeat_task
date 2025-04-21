import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import CustomerList from './components/CustomerList';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/customers" element={<CustomerList />} />
      </Routes>
    </Router>
  );
}

export default App;
