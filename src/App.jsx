import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Home from './components/Pages/Home';
import About from './components/Pages/About';
import Recipes from './components/Pages/Recipes';
import Video from './components/Pages/Video';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <div className="main-content">
          <Sidebar />
          <div className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/recipes" element={<Recipes />} />
              <Route path="/video/:id" element={<Video />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
