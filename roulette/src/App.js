import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WelcomePage from './Page/WelcomePage/WelcomePage';
import MainPage from './Page/MainPage/MainPage';
import './App.css';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<WelcomePage />} />
                    <Route path="/roulette" element={<MainPage />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;