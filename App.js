import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import './styles/App.css';
import DetectionPage from './components/DetectionPage';  // Corrected path


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/detection" element={<DetectionPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
