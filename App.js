import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import InputForm from './InputForm';
import Navbar from './Navbar';
import Dashboard from './Dashboard';
import Report from './Report';
import Create from './Create';
const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<InputForm />} />
          <Route path="/navbar" element={<Navbar />} />
          <Route path="/dashboard" element={<Dashboard />} /> 
          <Route path="/create" element={<Create />} /> 
          <Route path="/report" element={<Report />} /> 
        </Routes>
      </div>
    </Router>
  );
};

export default App;