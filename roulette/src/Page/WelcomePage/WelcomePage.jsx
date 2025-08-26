import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './WelcomePage.module.css';

const WelcomePage = () => {
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate('/roulette');
    };

    return (
        <div className={styles.container}>
            <div className={styles.background}>
                <div className={styles.rouletteRing}></div>
                <div className={styles.rouletteRing2}></div>
                <div className={styles.rouletteRing3}></div>
                <div className={styles.gridLines}></div>
                <div className={styles.particles}>
                    {[...Array(25)].map((_, i) => (
                        <div key={i} className={styles.particle}></div>
                    ))}
                </div>
                <div className={styles.rouletteNumbers}>
                    {[0, 32, 15, 19, 4, 21, 2, 25, 17, 34].map((number, index) => (
                        <span key={index} className={styles.rouletteNumber}>
                            {number}
                        </span>
                    ))}
                </div>
                <div className={styles.dots}>
                    {[...Array(12)].map((_, i) => (
                        <div key={i} className={styles.dot}></div>
                    ))}
                </div>
            </div>

            <div className={styles.content}>
                <div className={styles.titleContainer}>
                    <h1 className={styles.title}>
                        <span className={styles.welcomeText}>Добро пожаловать</span>
                        <span className={styles.subtitle}>в казино мечты</span>
                    </h1>
                    <div className={styles.titleGlow}></div>
                </div>

                <button
                    className={styles.ctaButton}
                    onClick={handleNavigate}
                >
                    <span className={styles.buttonText}>Играть в рулетку</span>
                    <div className={styles.buttonGlow}></div>
                    <div className={styles.buttonPulse}></div>
                </button>
            </div>
        </div>
    );
};

export default WelcomePage;