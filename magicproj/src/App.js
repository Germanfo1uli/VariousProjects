import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './components/mainPage/MainPage';
import CreaturesPage from './components/creaturesPage/CreaturesPage';

const App = () => {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route path="/creatures" element={<CreaturesPage />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;