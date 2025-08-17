import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Home from "../Home/Home";
import Logout from "../Logout/Logout";

export default function Routess() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
      <Footer />
    </Router>
  );
}
