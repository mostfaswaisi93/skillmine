import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import "@fontsource/jost";
import "@fontsource/jost/700.css";

import './App.css';

import { LandingPage, ItemDetails } from './components';

function App() {
  return (
    <div className='h-[100vh]' style={{ fontFamily: "jost, sans-serif" }}>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/ItemDetails/:id" element={<ItemDetails />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
