import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GamePage from './components/gamePage/gamePage';
import AssetPage from './components/assetPage/AssetPage';
import LeaderboardPage from "./components/leaderboardPage/LeaderboardPage";
import AccountPage from "./components/accountPage/AccountPage";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<GamePage />} />
                <Route path="/games" element={<GamePage />} />
                <Route path="/assets" element={<AssetPage />} />
                <Route path="/leaderboard" element={<LeaderboardPage />} />
                <Route path= "/account" element={<AccountPage/>} />

            </Routes>
        </Router>
    );
}

export default App;



//я устал босс