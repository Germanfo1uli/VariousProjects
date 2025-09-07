import React, { useState } from 'react';
import {FaDragon, FaGhost, FaPaw, FaSpider, FaSkull, FaArrowDown, FaImage} from 'react-icons/fa';
import NavigationBar from '../MoreComponents/NavigationBar';
import styles from './CreaturesPage.module.css';
import Footer from "../MoreComponents/Footer";
import dragonImage from './asset/dragon.jpg';

const CreaturesPage = () => {
    const [activeTab, setActiveTab] = useState('creatures');
    const [selectedCreature, setSelectedCreature] = useState(0);

    const creatures = [
        {
            id: 1,
            name: "Древний Дракон",
            type: "Дракон",
            image: dragonImage,
            description: "Могущественное крылатое существо, способное извергать пламя и обладающее невероятной мудростью. Возраст некоторых особей превышает тысячу лет.",
            habitat: "Горные пещеры, вулканические области",
            dangerLevel: "Высокий",
            icon: <FaDragon />,
            features: [
                "Огненное дыхание",
                "Невероятная прочность чешуи",
                "Магические способности",
                "Долголетие (до 2000 лет)"
            ],
            weaknesses: [
                "Уязвим к магии льда",
                "Медлителен в замкнутых пространствах",
                "Чувствителен к драконьему серебру"
            ]
        },
        {
            id: 2,
            name: "Теневой Призрак",
            type: "Нежить",
            image: null,
            description: "Бестелесный дух, блуждающий в местах древних битв и забытых замков. Может проходить сквозь стены и наводить ужас на живых.",
            habitat: "Заброшенные замки, кладбища",
            dangerLevel: "Средний",
            icon: <FaGhost />,
            features: [
                "Невидимость в тенях",
                "Прохождение сквозь стены",
                "Психическое воздействие",
                "Ночное зрение"
            ],
            weaknesses: [
                "Уязвим к световой магии",
                "Не может пересекать соляные барьеры",
                "Чувствителен к серебру"
            ]
        },
        {
            id: 3,
            name: "Лесной Оборотень",
            type: "Оборотень",
            image: null,
            description: "Существо, способное принимать форму волка или человека. Особенно опасно в полнолуние, когда его ярость достигает пика.",
            habitat: "Глухие леса, приграничные территории",
            dangerLevel: "Высокий",
            icon: <FaPaw />,
            features: [
                "Превращение в волка",
                "Усиленные чувства",
                "Регенерация",
                "Сверхчеловеческая сила"
            ],
            weaknesses: [
                "Уязвим к серебряному оружию",
                "Контролируем в полнолуние",
                "Чувствителен к волчьей полыни"
            ]
        },
        {
            id: 4,
            name: "Гигантский Паук",
            type: "Членистоногое",
            image: null,
            description: "Огромный паук, плетущий сети из прочнейшего шелка. Его яд способен парализовать даже крупных существ.",
            habitat: "Подземелья, древние руины",
            dangerLevel: "Средний",
            icon: <FaSpider />,
            features: [
                "Прочная паутина",
                "Парализующий яд",
                "Ночное зрение",
                "Стенание по вертикальным поверхностям"
            ],
            weaknesses: [
                "Уязвим к огню",
                "Медлителен на открытой местности",
                "Чувствителен к вибрациям"
            ]
        },
        {
            id: 5,
            name: "Лич",
            type: "Нежить",
            image: null,
            description: "Могущественный некромант, достигший бессмертия через темные ритуалы. Обладает знаниями запретных искусств.",
            habitat: "Гробницы, магические лаборатории",
            dangerLevel: "Крайне высокий",
            icon: <FaSkull />,
            features: [
                "Бессмертие",
                "Некромантия",
                "Темная магия",
                "Контроль над нежитью"
            ],
            weaknesses: [
                "Уязвим к светлой магии",
                "Зависим от филактерии",
                "Не переносит святую воду"
            ]
        },
        {
            id: 6,
            name: "Грифон",
            type: "Гибрид",
            image: null,
            description: "Гордое существо с телом льва и головой орла. Охраняет древние сокровища и магические артефакты.",
            habitat: "Высокогорья, неприступные скалы",
            dangerLevel: "Высокий",
            icon: <FaDragon />,
            features: [
                "Полёт",
                "Острое зрение",
                "Мощные когти",
                "Хранение сокровищ"
            ],
            weaknesses: [
                "Уязвим в замкнутых пространствах",
                "Привязан к своей территории",
                "Любит блестящие предметы"
            ]
        }
    ];

    const currentCreature = creatures[selectedCreature];

    return (
        <div className={styles.container}>
            <NavigationBar activeTab={activeTab} onTabChange={setActiveTab} />

            <main className={styles.mainContent}>
                <div className={styles.bookContainer}>
                    <div className={styles.bookPageLeft}>
                        <div className={styles.pageHeader}>
                            <h2 className={styles.pageTitle}>Бестиарий Тёмных Искусств</h2>
                            <div className={styles.pageSubtitle}>
                                Запретные знания о магических существах
                            </div>
                        </div>

                        <div className={styles.creaturesGrid}>
                            {creatures.map((creature, index) => (
                                <div
                                    key={creature.id}
                                    className={`${styles.creatureCard} ${selectedCreature === index ? styles.active : ''}`}
                                    onClick={() => setSelectedCreature(index)}
                                >
                                    <div className={styles.creatureImage}>
                                        {creature.image ? (
                                            <img
                                                src={creature.image}
                                                alt={creature.name}
                                                className={styles.creatureImageReal}
                                            />
                                        ) : (
                                            <div className={styles.imagePlaceholder}>
                                                {creature.icon}
                                                <span>Изображение {creature.name}</span>
                                            </div>
                                        )}
                                        <div className={styles.creatureType}>
                                            {creature.type}
                                        </div>
                                    </div>
                                    <h3 className={styles.creatureName}>
                                        {creature.name}
                                    </h3>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Правая страница книги */}
                    <div className={styles.bookPageRight}>
                        <div className={styles.creatureDetail}>
                            <div className={styles.detailHeader}>
                                <h2 className={styles.detailTitle}>
                                    {currentCreature.name}
                                </h2>
                                <div className={styles.dangerLevel}>
                                    Уровень опасности: <span>{currentCreature.dangerLevel}</span>
                                </div>
                            </div>

                            <div className={styles.creatureImageLarge}>
                                {currentCreature.image ? (
                                    <img
                                        src={currentCreature.image}
                                        alt={currentCreature.name}
                                        className={styles.creatureImageLargeReal}
                                    />
                                ) : (
                                    <div className={styles.imagePlaceholderLarge}>
                                        {currentCreature.icon}
                                        <span>{currentCreature.name}</span>
                                    </div>
                                )}
                            </div>

                            <div className={styles.creatureInfo}>
                                <div className={styles.infoSection}>
                                    <h4>Описание</h4>
                                    <p>{currentCreature.description}</p>
                                </div>

                                <div className={styles.infoSection}>
                                    <h4>Место обитания</h4>
                                    <p>{currentCreature.habitat}</p>
                                </div>

                                <div className={styles.infoSection}>
                                    <h4>Особенности</h4>
                                    <ul>
                                        {currentCreature.features.map((feature, index) => (
                                            <li key={index}>{feature}</li>
                                        ))}
                                    </ul>
                                </div>

                                <div className={styles.infoSection}>
                                    <h4>Слабые стороны</h4>
                                    <ul className={styles.weaknessesList}>
                                        {currentCreature.weaknesses.map((weakness, index) => (
                                            <li key={index}>
                                                <FaArrowDown className={styles.weaknessArrow} />
                                                {weakness}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            <button className={styles.readMoreButton}>
                                Изучить подробнее ›
                            </button>
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
                    {[...Array(10)].map((_, i) => (
                        <div key={i} className={styles.particle}></div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CreaturesPage;