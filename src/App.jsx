import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import "@fontsource/jost";
import "@fontsource/jost/700.css";

import './App.css';

import { LandingPage, ItemDetails, Cart } from './components';

function App() {
  return (
    <div className='h-[100vh]' style={{ fontFamily: "jost, sans-serif" }}>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/ItemDetails/:id" element={<ItemDetails />} />
          <Route path="/Cart" element={<Cart />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
