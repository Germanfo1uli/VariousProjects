import React, { useState } from 'react';
import WelcomePage from './component/WelcomPage/WelcomePage';
import GamePage from './component/MainWindow/GamePage';
import './App.css';

function App() {
  const [gameStarted, setGameStarted] = useState(false);

  const handleStartGame = () => {
    setGameStarted(true);
  };

  const handleReturnToWelcome = () => {
    setGameStarted(false);
  };

  return (
      <div className="App">
        {!gameStarted ? (
            <WelcomePage onStartGame={handleStartGame} />
        ) : (
            <GamePage onReturnToWelcome={handleReturnToWelcome} />
        )}
      </div>
  );
}

export default App;