import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "@fontsource/jost";
import "@fontsource/jost/700.css";

import "./App.css";

import {
  LandingPage,
  ItemDetails,
  Cart,
  Login,
  SignUp,
  ForgotPassword,
} from "./components";

function App() {
  return (
    <div className="h-[100vh]" style={{ fontFamily: "jost, sans-serif" }}>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/ItemDetails/:id" element={<ItemDetails />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/ForgotPassword" element={<ForgotPassword />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
