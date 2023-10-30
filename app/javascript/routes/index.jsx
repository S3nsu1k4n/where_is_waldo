import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import Home from "../components/Home";
import Leaderboard from "../components/Leaderboard";
import About from "../components/About";
import Game from "../components/Game";

export default (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Game />} />
      <Route path="/leaderboard" element={<Leaderboard />} />
      <Route path="/about" element={<About />} />
    </Routes>
  </Router>
);