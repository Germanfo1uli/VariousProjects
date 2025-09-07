import React from 'react';
import styles from './GamePage.module.css';

const GamePage: React.FC = () => {
    return (
        <div className={styles.gamePage}>
            <h1>Страница игры</h1>
            <p>Здесь будет детальная информация об игре или ассете</p>
        </div>
    );
};

export default GamePage;