import React, { useState, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import styles from './MainPage.module.css';
import mageImage from './asset/Mag2.png';
import NavigationBar from '../MoreComponents/NavigationBar';
import Footer from "../MoreComponents/Footer";

const MainPage = () => {
    const location = useLocation();
    const [activeTab, setActiveTab] = useState(location.pathname.slice(1) || 'home');

    const magicWords = useMemo(() => [
        "Abracadabra", "Mysticus", "Arcana", "Incantatio",
        "Lumen", "Tenebris", "Ignis", "Aqua", "Aer", "Terra",
        "Somnia", "Vox", "Potentia", "Mysterium", "Aeternum",
        "MYSTERY", "SECRET", "ANCIENT", "FORBIDDEN", "OCCULT"
    ], []);

    const getRandomPositions = useMemo(() => {
        return magicWords.map((_, index) => ({
            id: index,
            left: Math.random() * 80 + 10,
            top: Math.random() * 80 + 10,
            delay: Math.random() * 8,
            duration: Math.random() * 4 + 8
        }));
    }, [magicWords]);

    const handleTabChange = (tabName) => {
        setActiveTab(tabName);
    };

    return (
        <div className={styles.container}>
            {/* Используем новый компонент NavigationBar */}
            <NavigationBar activeTab={activeTab} onTabChange={handleTabChange} />

            <main className={styles.mainContent}>
                <div className={styles.mageContainer}>
                    <div className={styles.fireSphere}>
                        <div className={styles.sphereCore}></div>
                        <div className={styles.fireParticles}>
                            {[...Array(12)].map((_, i) => (
                                <div key={i} className={styles.fireParticle}></div>
                            ))}
                        </div>
                    </div>

                    <div className={styles.mageImage}>
                        <img
                            src={mageImage}
                            alt="Маг с магическими сферами"
                            className={styles.mageImg}
                        />
                        <div className={styles.sphereGlow}></div>
                    </div>

                    <div className={styles.lightningSphere}>
                        <div className={styles.sphereCore}></div>
                        <div className={styles.lightningParticles}>
                            {[...Array(8)].map((_, i) => (
                                <div key={i} className={styles.lightningParticle}></div>
                            ))}
                        </div>
                    </div>

                    <div className={styles.magicQuote}>
                        <div className={styles.quoteContainer}>
                            <p className={styles.quoteText}>
                                "Сила — это не дар. Это ответственность… которая сжигает тебя изнутри, если ты не используешь её безжалостно."
                            </p>
                            <div className={styles.quoteDecoration}></div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
            <div className={styles.backgroundElements}>
                <div className={styles.floatingOrbs}>
                    <div className={styles.orb1}></div>
                    <div className={styles.orb2}></div>
                    <div className={styles.orb3}></div>
                </div>
                <div className={styles.magicParticles}>
                    {[...Array(15)].map((_, i) => (
                        <div key={i} className={styles.particle}></div>
                    ))}
                </div>

                {activeTab === 'home' && (
                    <div className={styles.magicWordsContainer}>
                        {magicWords.map((word, index) => {
                            const position = getRandomPositions[index];
                            return (
                                <div
                                    key={position.id}
                                    className={styles.magicWord}
                                    style={{
                                        left: `${position.left}%`,
                                        top: `${position.top}%`,
                                        animationDelay: `${position.delay}s`,
                                        animationDuration: `${position.duration}s`,
                                        fontSize: `${Math.random() * 0.8 + 0.7}rem`,
                                        transform: `rotate(${Math.random() * 15 - 7.5}deg)`,
                                    }}
                                >
                                    {word}
                                </div>
                            );
                        })}
                    </div>
                )}
            </div>
        </div>
    );
};

export default MainPage;