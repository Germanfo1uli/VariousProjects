import React from 'react';
import styles from '../mainPage/MainPage.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContent}>
                <p>© 2025 Тёмное Искусство. Все права защищены мои магическими барьерами.</p>
                <p>Тайны магии не должны попасть в руки непосвящённых, таков закон тёмных рыцарей.</p>
            </div>
        </footer>
    );
};

export default Footer;