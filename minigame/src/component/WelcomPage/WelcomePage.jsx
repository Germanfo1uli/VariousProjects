import React from 'react';
import styles from './WelcomePage.module.css';

const WelcomePage = ({ onStartGame }) => {
    return (
        <div className={styles.container}>
            <div className={styles.backgroundAnimation}></div>
            <div className={styles.content}>
                <h1 className={styles.title}>
                    <span className={styles.titleMetal}>Metal</span>
                    <span className={styles.titleWeb}>Web</span>
                </h1>
                <p className={styles.subtitle}>Добро пожаловать, Zmei</p>
                <button
                    className={styles.startButton}
                    onClick={onStartGame}
                >
                    Выйти на разведку
                </button>
            </div>

            <div className={styles.camoPattern}></div>
        </div>
    );
};

export default WelcomePage;