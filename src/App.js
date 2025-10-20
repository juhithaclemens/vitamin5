import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import NotHome from './pages/NotHome/NotHome';

function App() {
  return (
    <>
      <Navbar />
      <div className="page-content">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/nothome" element={<NotHome />} />
          <Route path="*" element={<h1>My Website Yay!</h1>} />
        </Routes>
      </div>
    </>
  );
}

export default App;
