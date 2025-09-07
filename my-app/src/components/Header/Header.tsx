import React from 'react';
import styles from './Header.module.css';

const Header: React.FC = () => {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <span className={styles.logoIcon}>🎮</span>
                <h1 className={styles.logoText}>Playvixor</h1>
            </div>
            <nav className={styles.nav}>
                <ul className={styles.navList}>
                    <li className={styles.navItem}>
                        <a href="#games" className={styles.navLink}>Игры</a>
                    </li>
                    <li className={styles.navItem}>
                        <a href="#assets" className={styles.navLink}>Ассеты</a>
                    </li>
                    <li className={styles.navItem}>
                        <a href="#leaderboard" className={styles.navLink}>Таблица лидеров</a>
                    </li>
                    <li className={styles.navItem}>
                        <a href="#account" className={styles.navLink}>Аккаунт</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;