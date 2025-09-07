import React, { useState } from 'react';
import { FaMagic, FaBook, FaEye, FaKey, FaGem, FaScroll, FaRing, FaCrown, FaHatWizard, FaInfoCircle } from 'react-icons/fa';
import NavigationBar from '../components/MoreComponents/NavigationBar';
import Footer from "../components/MoreComponents/Footer";
import styles from './ArtefactPage.module.css';

const ArtefactPage = () => {
    const [activeTab, setActiveTab] = useState('artefacts');
    const [selectedArtefact, setSelectedArtefact] = useState(null);
    const [showDescription, setShowDescription] = useState(false);

    const artefacts = [
        {
            id: 1,
            name: "Руна Огня",
            type: "Руна",
            icon: <FaMagic />,
            description: "Древняя руна, содержащая в себе силу первозданного огня. Способна усиливать огненные заклинания и создавать защитные барьеры.",
            origin: "Выкована древними магами в вулкане Игнис",
            powers: [
                "Усиление огненных заклинаний",
                "Создание огненных барьеров",
                "Пробуждение внутренней силы",
                "Защита от холода"
            ],
            warnings: [
                "Может вызывать неконтролируемые вспышки гнева",
                "Теряет силу в воде",
                "Опасна для непосвященных"
            ]
        },
        {
            id: 2,
            name: "Всевидящее Око",
            type: "Артефакт",
            icon: <FaEye />,
            description: "Магический кристалл, позволяющий видеть сквозь время и пространство. Использовался древними пророками для предсказаний.",
            origin: "Создан оракулами Долины Теней",
            powers: [
                "Предвидение будущего",
                "Наблюдение на расстоянии",
                "Обнаружение скрытого",
                "Чтение мыслей"
            ],
            warnings: [
                "Может вызывать безумие при длительном использовании",
                "Требует огромных магических затрат",
                "Искажает восприятие реальности"
            ]
        },
        {
            id: 3,
            name: "Ключ Тьмы",
            type: "Артефакт",
            icon: <FaKey />,
            description: "Загадочный ключ, способный открывать порталы в иные измерения и запирать могущественных существ.",
            origin: "Выкован из метеоритного железа в ночь солнечного затмения",
            powers: [
                "Открытие межпространственных порталов",
                "Запечатывание магических существ",
                "Доступ к запретным знаниям",
                "Создание карманов пространства"
            ],
            warnings: [
                "Может привлечь внимание тёмных существ",
                "Неправильное использование приводит к катастрофе",
                "Требует чистоты намерений"
            ]
        },
        {
            id: 4,
            name: "Кристалл Душ",
            type: "Кристалл",
            icon: <FaGem />,
            description: "Редкий кристалл, способный поглощать и хранить души. Используется в некромантии и ритуалах воскрешения.",
            origin: "Добывается в глубинах Подгорного Царства",
            powers: [
                "Хранение душ и воспоминаний",
                "Воскрешение умерших",
                "Создание магических големов",
                "Усиление некромантических ритуалов"
            ],
            warnings: [
                "Запрещён во всех магических гильдиях",
                "Разрушает душу владельца",
                "Привлекает духов и призраков"
            ]
        },
        {
            id: 5,
            name: "Свиток Истины",
            type: "Свиток",
            icon: <FaScroll />,
            description: "Древний свиток, содержащий истинные имена всех существ и предметов. Даёт власть над тем, чьё имя произнесено.",
            origin: "Написан первыми магами при создании мира",
            powers: [
                "Контроль над названными существами",
                "Разрушение магических барьеров",
                "Распознавание иллюзий",
                "Доступ к абсолютному знанию"
            ],
            warnings: [
                "Произнесение имени наделяет властью над говорящим",
                "Каждое использование стирает часть свитка",
                "Требует абсолютной концентрации"
            ]
        },
        {
            id: 6,
            name: "Кольцо Вечности",
            type: "Кольцо",
            icon: <FaRing />,
            description: "Магическое кольцо, дарующее бессмертие, но забирающее что-то ценное взамен. Создано древними алхимиками.",
            origin: "Создано Алхимиком Веков в обмен на его человечность",
            powers: [
                "Бессмертие и вечная молодость",
                "Ускоренная регенерация",
                "Защита от болезней и ядов",
                "Невидимость для смерти"
            ],
            warnings: [
                "Забирает самые ценные воспоминания",
                "Привязывает душу к кольцу",
                "Не может быть уничтожено обычными средствами"
            ]
        },
        {
            id: 7,
            name: "Корона Лунной Пыли",
            type: "Корона",
            icon: <FaCrown />,
            description: "Корона, сплетённая из лунного света и звёздной пыли. Дарует власть над ночью и снами.",
            origin: "Создана королевой эльфов в ночь полнолуния",
            powers: [
                "Контроль над снами и кошмарами",
                "Путешествие в мире снов",
                "Создание иллюзий из лунного света",
                "Общение с ночными существами"
            ],
            warnings: [
                "Потеря связи с реальностью",
                "Не может использоваться при sunlight",
                "Привлекает внимание богов луны"
            ]
        },
        {
            id: 8,
            name: "Шляпа Волшебника",
            type: "Головной убор",
            icon: <FaHatWizard />,
            description: "Легендарная шляпа, увеличивающая магические способности носящего и хранящая бесконечное количество предметов.",
            origin: "Создана великим магом Арканусом",
            powers: [
                "Усиление магических способностей",
                "Хранение предметов в дополнительном измерении",
                "Автоматическая защита от заклинаний",
                "Поиск магических артефактов"
            ],
            warnings: [
                "Может поглотить неосторожного владельца",
                "Иногда извлекает не те предметы",
                "Требует регулярной подзарядки лунным светом"
            ]
        }
    ];

    const handleArtefactClick = (artefact) => {
        setSelectedArtefact(artefact);
        setShowDescription(true);
    };

    const closeDescription = () => {
        setShowDescription(false);
        setTimeout(() => setSelectedArtefact(null), 300);
    };

    return (
        <div className={styles.container}>
            <NavigationBar activeTab={activeTab} onTabChange={setActiveTab} />

            <main className={styles.mainContent}>
                <div className={styles.pageHeader}>
                    <h1 className={styles.pageTitle}>Магический Регалиар</h1>
                    <p className={styles.pageSubtitle}>Собрание древних артефактов и магических инструментов</p>
                </div>

                <div className={styles.cabinetContainer}>
                    <div className={styles.cabinet}>

                        <div className={styles.shelf}>
                            <div className={styles.shelfLabel}>Полка I: Руны и Кристаллы</div>
                            <div className={styles.artefactsRow}>
                                {artefacts.slice(0, 2).map(artefact => (
                                    <div
                                        key={artefact.id}
                                        className={styles.artefactItem}
                                        onClick={() => handleArtefactClick(artefact)}
                                    >
                                        <div className={styles.artefactIcon}>
                                            {artefact.icon}
                                        </div>
                                        <div className={styles.artefactName}>{artefact.name}</div>
                                        <div className={styles.artefactType}>{artefact.type}</div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className={styles.shelf}>
                            <div className={styles.shelfLabel}>Полка II: Магические Инструменты</div>
                            <div className={styles.artefactsRow}>
                                {artefacts.slice(2, 5).map(artefact => (
                                    <div
                                        key={artefact.id}
                                        className={styles.artefactItem}
                                        onClick={() => handleArtefactClick(artefact)}
                                    >
                                        <div className={styles.artefactIcon}>
                                            {artefact.icon}
                                        </div>
                                        <div className={styles.artefactName}>{artefact.name}</div>
                                        <div className={styles.artefactType}>{artefact.type}</div>
                                    </div>
                                ))}
                            </div>
                        </div>


                        <div className={styles.shelf}>
                            <div className={styles.shelfLabel}>Полка III: Легендарные Артефакты</div>
                            <div className={styles.artefactsRow}>
                                {artefacts.slice(5).map(artefact => (
                                    <div
                                        key={artefact.id}
                                        className={styles.artefactItem}
                                        onClick={() => handleArtefactClick(artefact)}
                                    >
                                        <div className={styles.artefactIcon}>
                                            {artefact.icon}
                                        </div>
                                        <div className={styles.artefactName}>{artefact.name}</div>
                                        <div className={styles.artefactType}>{artefact.type}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            {selectedArtefact && (
                <div className={`${styles.descriptionModal} ${showDescription ? styles.active : ''}`}>
                    <div className={styles.modalContent}>
                        <button className={styles.closeButton} onClick={closeDescription}>×</button>

                        <div className={styles.modalHeader}>
                            <div className={styles.artefactIconLarge}>
                                {selectedArtefact.icon}
                            </div>
                            <h2>{selectedArtefact.name}</h2>
                            <span className={styles.artefactTypeLabel}>{selectedArtefact.type}</span>
                        </div>

                        <div className={styles.modalBody}>
                            <div className={styles.infoSection}>
                                <h3>Описание</h3>
                                <p>{selectedArtefact.description}</p>
                            </div>

                            <div className={styles.infoSection}>
                                <h3>Происхождение</h3>
                                <p>{selectedArtefact.origin}</p>
                            </div>

                            <div className={styles.infoSection}>
                                <h3>Способности</h3>
                                <ul>
                                    {selectedArtefact.powers.map((power, index) => (
                                        <li key={index}>
                                            <FaMagic className={styles.powerIcon} />
                                            {power}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className={styles.infoSection}>
                                <h3>Предупреждения</h3>
                                <ul className={styles.warningsList}>
                                    {selectedArtefact.warnings.map((warning, index) => (
                                        <li key={index}>
                                            <FaInfoCircle className={styles.warningIcon} />
                                            {warning}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            )}

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
            </div>
        </div>
    );
};

export default ArtefactPage;