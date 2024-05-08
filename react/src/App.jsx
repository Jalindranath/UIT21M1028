import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Allproduct from './Componets/AllProducts';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Allproduct />} />
       
      </Routes>
    </Router>
  );
}

export default App;
