import React, { useState } from 'react';
import { FaFire, FaMountain, FaWater, FaWind, FaScroll, FaBookOpen, FaMagic, FaStamp } from 'react-icons/fa';
import NavigationBar from '../MoreComponents/NavigationBar';
import Footer from "../MoreComponents/Footer";
import styles from './SpellsPage.module.css';

const SpellsPage = () => {
    const [activeTab, setActiveTab] = useState('spells');
    const [expandedElement, setExpandedElement] = useState(null);
    const [selectedSpell, setSelectedSpell] = useState(null);
    const [showSpellModal, setShowSpellModal] = useState(false);

    const elements = [
        {
            id: 'fire',
            name: 'Огонь',
            icon: <FaFire />,
            color: '#ff6b6b',
            sealColor: '#c0392b',
            description: 'Стихия разрушения и преобразования',
            spells: [
                {
                    id: 1,
                    name: 'Огненный шар',
                    level: 'Начинающий',
                    mana: 15,
                    description: 'Создает сферу чистого огня, которая наносит урон при попадании.',
                    effect: 'Наносит 20-35 урона огнем',
                    castingTime: '1 действие',
                    range: '18 метров'
                },
                {
                    id: 2,
                    name: 'Стена огня',
                    level: 'Продвинутый',
                    mana: 40,
                    description: 'Создает непреодолимую стену из магического пламени.',
                    effect: 'Создает барьер длиной 6 метров, наносящий 5d8 урона',
                    castingTime: '1 действие',
                    range: '12 метров'
                },
                {
                    id: 3,
                    name: 'Вспышка феникса',
                    level: 'Мастерский',
                    mana: 75,
                    description: 'Призывает дух феникса, который возрождает союзников и испепеляет врагов.',
                    effect: 'Воскрешает одного союзника и наносит 8d10 урона врагам',
                    castingTime: '2 действия',
                    range: '30 метров'
                }
            ]
        },
        {
            id: 'earth',
            name: 'Земля',
            icon: <FaMountain />,
            color: '#a5d6a7',
            sealColor: '#5d4037',
            description: 'Стихия защиты и стабильности',
            spells: [
                {
                    id: 4,
                    name: 'Каменная кожа',
                    level: 'Начинающий',
                    mana: 20,
                    description: 'Превращает кожу заклинателя в камень, обеспечивая дополнительную защиту.',
                    effect: '+5 к защите на 10 минут',
                    castingTime: '1 действие',
                    range: 'На себя'
                },
                {
                    id: 5,
                    name: 'Землетрясение',
                    level: 'Продвинутый',
                    mana: 50,
                    description: 'Вызывает локальное землетрясение, дезориентирующее противников.',
                    effect: 'Оглушает врагов в радиусе 10 метров на 2 раунда',
                    castingTime: '1 действие',
                    range: '25 метров'
                },
                {
                    id: 6,
                    name: 'Призыв голема',
                    level: 'Мастерский',
                    mana: 80,
                    description: 'Создает из земли и камня могущественного голема для защиты заклинателя.',
                    effect: 'Призывает голема на 1 час',
                    castingTime: '3 действия',
                    range: 'Касание'
                }
            ]
        },
        {
            id: 'water',
            name: 'Вода',
            icon: <FaWater />,
            color: '#81d4fa',
            sealColor: '#1565c0',
            description: 'Стихия исцеления и адаптации',
            spells: [
                {
                    id: 7,
                    name: 'Целебный поток',
                    level: 'Начинающий',
                    mana: 15,
                    description: 'Направляет поток чистой воды, исцеляющий раны.',
                    effect: 'Восстанавливает 2d8 + 5 здоровья',
                    castingTime: '1 действие',
                    range: 'Касание'
                },
                {
                    id: 8,
                    name: 'Приливная волна',
                    level: 'Продвинутый',
                    mana: 45,
                    description: 'Создает мощную волну, сбивающую с ног противников.',
                    effect: 'Сбивает с ног врагов в конусе 15 метров',
                    castingTime: '1 действие',
                    range: 'На себя'
                },
                {
                    id: 9,
                    name: 'Бездонная пучина',
                    level: 'Мастерский',
                    mana: 70,
                    description: 'Открывает портал в водную бездну, затягивающий врагов.',
                    effect: 'Телепортирует врагов в случайное место',
                    castingTime: '2 действия',
                    range: '20 метров'
                }
            ]
        },
        {
            id: 'wind',
            name: 'Ветер',
            icon: <FaWind />,
            color: '#e1bee7',
            sealColor: '#4527a0',
            description: 'Стихия скорости и свободы',
            spells: [
                {
                    id: 10,
                    name: 'Порыв ветра',
                    level: 'Начинающий',
                    mana: 10,
                    description: 'Создает мощный поток воздуха, отталкивающий противников.',
                    effect: 'Отталкивает врагов на 3 метра',
                    castingTime: '1 действие',
                    range: '12 метров'
                },
                {
                    id: 11,
                    name: 'Полёт',
                    level: 'Продвинутый',
                    mana: 35,
                    description: 'Наделяет заклинателя способностью летать.',
                    effect: 'Позволяет летать на 10 минут',
                    castingTime: '1 действие',
                    range: 'На себя'
                },
                {
                    id: 12,
                    name: 'Ураганный вихрь',
                    level: 'Мастерский',
                    mana: 65,
                    description: 'Создает разрушительный вихрь, поглощающий всё на своем пути.',
                    effect: 'Наносит 6d8 урона в радиусе 8 метров',
                    castingTime: '2 действия',
                    range: '30 метров'
                }
            ]
        }
    ];

    const toggleScroll = (elementId) => {
        if (expandedElement === elementId) {
            setExpandedElement(null);
        } else {
            setExpandedElement(elementId);
        }
    };

    const handleSpellClick = (spell) => {
        setSelectedSpell(spell);
        setShowSpellModal(true);
    };

    const closeSpellModal = () => {
        setShowSpellModal(false);
        setSelectedSpell(null);
    };

    return (
        <div className={styles.container}>
            <NavigationBar activeTab={activeTab} onTabChange={setActiveTab} />

            <main className={styles.mainContent}>
                <div className={styles.pageHeader}>
                    <h1 className={styles.pageTitle}>Гримуар Древних Заклинаний</h1>
                    <p className={styles.pageSubtitle}>Собрание магических знаний о четырёх стихиях</p>
                </div>

                <div className={styles.scrollsContainer}>
                    {elements.map(element => (
                        <div
                            key={element.id}
                            className={`${styles.scrollWrapper} ${expandedElement === element.id ? styles.expanded : ''}`}
                            style={{ '--element-color': element.color, '--seal-color': element.sealColor }}
                        >
                            <div
                                className={styles.scroll}
                                onClick={() => toggleScroll(element.id)}
                            >
                                <div className={styles.scrollAging}></div>
                                <div className={styles.scrollTopEdge}></div>
                                <div className={styles.scrollBottomEdge}></div>

                                <div className={`${styles.scrollCorner} ${styles.scrollCornerTL}`}></div>
                                <div className={`${styles.scrollCorner} ${styles.scrollCornerTR}`}></div>
                                <div className={`${styles.scrollCorner} ${styles.scrollCornerBL}`}></div>
                                <div className={`${styles.scrollCorner} ${styles.scrollCornerBR}`}></div>

                                <div className={`${styles.scrollTornEdge} ${styles.scrollTornEdgeTop}`}></div>
                                <div className={`${styles.scrollTornEdge} ${styles.scrollTornEdgeBottom}`}></div>

                                <div className={styles.scrollSeal}>
                                    <FaStamp />
                                </div>

                                <div className={styles.scrollHeader}>
                                    <div className={styles.elementIcon}>
                                        {element.icon}
                                    </div>
                                    <h2 className={styles.elementName}>{element.name}</h2>
                                    <p className={styles.elementDescription}>{element.description}</p>
                                </div>

                                {expandedElement === element.id && (
                                    <div className={styles.spellsList}>
                                        <h3 className={styles.spellsTitle}>Заклинания {element.name.toLowerCase()}</h3>
                                        {element.spells.map(spell => (
                                            <div
                                                key={spell.id}
                                                className={styles.spellItem}
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    handleSpellClick(spell);
                                                }}
                                            >
                                                <div className={styles.spellIcon}>
                                                    <FaMagic />
                                                </div>
                                                <div className={styles.spellInfo}>
                                                    <h4 className={styles.spellName}>{spell.name}</h4>
                                                    <span className={styles.spellLevel}>{spell.level}</span>
                                                </div>
                                                <div className={styles.spellMana}>
                                                    {spell.mana} MP
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}

                                <div className={styles.scrollFooter}>
                                    <FaScroll className={styles.scrollIcon} />
                                    <span>Коснитесь свитка, чтобы {expandedElement === element.id ? 'свернуть' : 'изучить'}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </main>

            {showSpellModal && selectedSpell && (
                <div className={styles.modalOverlay} onClick={closeSpellModal}>
                    <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                        <button className={styles.closeButton} onClick={closeSpellModal}>×</button>

                        <div className={styles.modalHeader}>
                            <div className={styles.spellIconLarge}>
                                <FaMagic />
                            </div>
                            <h2 className={styles.modalTitle}>{selectedSpell.name}</h2>
                            <div className={styles.spellLevelBadge}>{selectedSpell.level}</div>
                            <div className={styles.spellManaCost}>{selectedSpell.mana} маны</div>
                        </div>

                        <div className={styles.modalBody}>
                            <div className={styles.infoSection}>
                                <h3>Описание</h3>
                                <p>{selectedSpell.description}</p>
                            </div>

                            <div className={styles.infoSection}>
                                <h3>Эффект</h3>
                                <p>{selectedSpell.effect}</p>
                            </div>

                            <div className={styles.spellDetails}>
                                <div className={styles.detailItem}>
                                    <span className={styles.detailLabel}>Время сотворения:</span>
                                    <span className={styles.detailValue}>{selectedSpell.castingTime}</span>
                                </div>
                                <div className={styles.detailItem}>
                                    <span className={styles.detailLabel}>Дистанция:</span>
                                    <span className={styles.detailValue}>{selectedSpell.range}</span>
                                </div>
                            </div>
                        </div>

                        <div className={styles.modalFooter}>
                            <button className={styles.learnButton}>
                                <FaBookOpen /> Изучить заклинание
                            </button>
                        </div>
                    </div>
                </div>
            )}

            <Footer />

            <div className={styles.backgroundElements}>
                <div className={styles.floatingRunes}>
                    {[...Array(8)].map((_, i) => (
                        <div key={i} className={styles.rune}></div>
                    ))}
                </div>
                <div className={styles.magicParticles}></div>
            </div>
        </div>
    );
};

export default SpellsPage;