import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './components/mainPage/MainPage';
import CreaturesPage from './components/creaturesPage/CreaturesPage';
import ArtefactPage from "./artefactPage/ArtefactPage";

const App = () => {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route path="/creatures" element={<CreaturesPage />} />
                    <Route path="/artefact" element={<ArtefactPage />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;