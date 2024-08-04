import React from 'react';
import { Route, Routes } from 'react-router-dom'; // Import Route and Routes
import Home from './components/Home';
import Navbar from './components/Navbar';
import Add from './components/Add';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<Add />} />
      </Routes>
    </>
  );
}

export default App;
