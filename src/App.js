import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ImageSlider from "./components/ImageSlider"; 
import MovieDetail from "./pages/MovieDetail";
import MovieListPage from "./pages/MovieListPage";
import ActionPage from "./pages/ActionPage";
import SciFiPage from "./pages/SciFiPage";
import AnimationPage from "./pages/AnimationPage";
import RomancePage from "./pages/RomancePage";
import AuthForm from "./components/AuthForm";
import "./assets/styles.css";

const App = () => {
  // State để lưu thông tin người dùng đã đăng nhập
  const [loggedInUser, setLoggedInUser] = useState(null);

  return (
    <Router>
      {/* Truyền thông tin người dùng đã đăng nhập xuống Navbar */}
      <Navbar loggedInUser={loggedInUser} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/imageSlider" element={<ImageSlider />} />
        <Route path="/authform" element={<AuthForm setLoggedInUser={setLoggedInUser} />} />
        <Route path="/movies" element={<MovieListPage />} />
        <Route path="/movies/:genre" element={<MovieListPage />} />
        <Route path="/movie/:id" element={<MovieDetail />} />
        <Route path="/movies/action" element={<ActionPage />} />
        <Route path="/movies/sci-fi" element={<SciFiPage />} />
        <Route path="/movies/animation" element={<AnimationPage />} />
        <Route path="/movies/romance" element={<RomancePage />} />
      </Routes>
    </Router>
  );
};

export default App;
