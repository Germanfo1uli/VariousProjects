import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GamePage from './components/gamePage/gamePage';
import AssetPage from './components/assetPage/AssetPage';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<GamePage />} />
                <Route path="/games" element={<GamePage />} />
                <Route path="/assets" element={<AssetPage />} />
            </Routes>
        </Router>
    );
}

export default App;