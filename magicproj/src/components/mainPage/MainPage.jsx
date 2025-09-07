import React, { useState, useMemo } from 'react';
import { FaMoon, FaFire, FaBook, FaHatWizard, FaHome, FaEnvelope, FaBolt } from 'react-icons/fa';
import styles from './MainPage.module.css';
import mageImage from './asset/Mag2.png';

const MainPage = () => {
    const [activeTab, setActiveTab] = useState('home');


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


    const magicQuotes = [
        "Магия — это не сила, а искусство видеть то, что скрыто от глаз простых смертных",
        "В каждом из нас дремлет маг, нужно лишь разбудить его",
        "Тёмные искусства требуют не только силы, но и мудрости",
        "Истинная магия рождается в гармонии тьмы и света",
        "Законы магии писаны не чернилами, но кровью и звёздной пылью"
    ];

    return (
        <div className={styles.container}>

            <nav className={styles.navbar}>
                <div className={styles.logo}>
                    <FaMoon className={styles.logoIcon} />
                    <span>Тёмное Искусство</span>
                </div>
                <div className={styles.navLinks}>
                    <div className={styles.ancientBookCover}>
                        <div className={styles.bookBinding}></div>
                        <div className={styles.ancientPages}>
                            <a
                                href="#home"
                                className={`${styles.ancientLink} ${activeTab === 'home' ? styles.active : ''}`}
                                onClick={() => setActiveTab('home')}
                            >
                                <FaHome className={styles.navIcon} /> ГЛАВНАЯ
                            </a>
                            <a
                                href="#spells"
                                className={`${styles.ancientLink} ${activeTab === 'spells' ? styles.active : ''}`}
                                onClick={() => setActiveTab('spells')}
                            >
                                <FaFire className={styles.navIcon} /> ЗАКЛИНАНИЯ
                            </a>
                            <a
                                href="#artifacts"
                                className={`${styles.ancientLink} ${activeTab === 'artifacts' ? styles.active : ''}`}
                                onClick={() => setActiveTab('artifacts')}
                            >
                                <FaBook className={styles.navIcon} /> АРТЕФАКТЫ
                            </a>
                            <a
                                href="#wizards"
                                className={`${styles.ancientLink} ${activeTab === 'wizards' ? styles.active : ''}`}
                                onClick={() => setActiveTab('wizards')}
                            >
                                <FaHatWizard className={styles.navIcon} /> МАГИ
                            </a>
                            <a
                                href="#contact"
                                className={`${styles.ancientLink} ${activeTab === 'contact' ? styles.active : ''}`}
                                onClick={() => setActiveTab('contact')}
                            >
                                <FaEnvelope className={styles.navIcon} /> КОНТАКТЫ
                            </a>
                        </div>
                        <div className={styles.bookClasp}></div>
                    </div>
                </div>
            </nav>


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


            <footer className={styles.footer}>
                <div className={styles.footerContent}>
                    <p>© 2025 Тёмное Искусство. Все права защищены мои магическими барьерами.</p>
                    <p>Тайны магии не должны попасть в руки непосвящённых, таков закон тёмных рыцарей.</p>
                </div>
            </footer>

            {/* Анимированные элементы фона */}
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