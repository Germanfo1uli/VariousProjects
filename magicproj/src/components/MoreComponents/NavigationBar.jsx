import React from 'react';
import { FaMoon, FaFire, FaBook, FaHome, FaEnvelope, FaDragon } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';
import styles from '../mainPage/MainPage.module.css';

const NavigationBar = ({ activeTab, onTabChange }) => {
    const location = useLocation();

    return (
        <nav className={styles.navbar}>
            <div className={styles.logo}>
                <FaMoon className={styles.logoIcon} />
                <span>Тёмное Искусство</span>
            </div>
            <div className={styles.navLinks}>
                <div className={styles.ancientBookCover}>
                    <div className={styles.bookBinding}></div>
                    <div className={styles.ancientPages}>
                        <Link
                            to="/"
                            className={`${styles.ancientLink} ${activeTab === 'home' ? styles.active : ''}`}
                            onClick={() => onTabChange('home')}
                        >
                            <FaHome className={styles.navIcon} /> ГЛАВНАЯ
                        </Link>
                        <Link
                            to="/spells"
                            className={`${styles.ancientLink} ${activeTab === 'spells' ? styles.active : ''}`}
                            onClick={() => onTabChange('spells')}
                        >
                            <FaFire className={styles.navIcon} /> ЗАКЛИНАНИЯ
                        </Link>
                        <Link
                            to="/artefact"
                            className={`${styles.ancientLink} ${activeTab === 'artefact' ? styles.active : ''}`}
                            onClick={() => onTabChange('artefact')}
                        >
                            <FaBook className={styles.navIcon} /> АРТЕФАКТЫ
                        </Link>
                        <Link
                            to="/creatures"
                            className={`${styles.ancientLink} ${activeTab === 'creatures' ? styles.active : ''}`}
                            onClick={() => onTabChange('creatures')}
                        >
                            <FaDragon className={styles.navIcon} /> МАГИЧЕСКИЕ ТВАРИ
                        </Link>
                        <Link
                            to="/contact"
                            className={`${styles.ancientLink} ${activeTab === 'contact' ? styles.active : ''}`}
                            onClick={() => onTabChange('contact')}
                        >
                            <FaEnvelope className={styles.navIcon} /> КОНТАКТЫ
                        </Link>
                    </div>
                    <div className={styles.bookClasp}></div>
                </div>
            </div>
        </nav>
    );
};

export default NavigationBar;