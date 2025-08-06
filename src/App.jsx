import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import "@fontsource/jost";
import "@fontsource/jost/700.css";

import LandingPage from './components/LandingPage';

function App() {
  return (
    <div className='h-[100vh]' style={{fontFamily: "jost, sans-serif"}}>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
