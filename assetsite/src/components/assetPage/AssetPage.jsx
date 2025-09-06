import React, { useState } from 'react';
import { FaGamepad, FaUser, FaCube, FaTrophy, FaHeart, FaComment, FaEye, FaSearch, FaSort, FaSortUp, FaSortDown, FaDownload } from 'react-icons/fa';
import { useNavigate, useLocation } from 'react-router-dom';
import styles from './AssetPage.module.css';

const AssetPage = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [searchQuery, setSearchQuery] = useState('');
    const [sortBy, setSortBy] = useState('popularity');
    const [sortOrder, setSortOrder] = useState('desc');
    const totalPages = 5;
    const navigate = useNavigate();
    const location = useLocation();

    const getActiveMenu = () => {
        switch (location.pathname) {
            case '/games':
                return 'games';
            case '/leaderboard':
                return 'leaderboard';
            case '/account':
                return 'account';
            default:
                return 'assets';
        }
    };

    const activeMenu = getActiveMenu();

    const mockAssets = [
        {
            id: 1,
            title: "Medieval Castle Pack",
            image: "https://images.unsplash.com/photo-1589656966895-2f33e7653819?w=300&h=200&fit=crop",
            description: "Детализированный набор ассетов средневекового замка с текстурами высокого разрешения",
            tags: ["Medieval", "Environment", "3D", "Buildings"],
            author: "AssetMaster",
            likes: 204,
            comments: 31,
            views: 2345,
            downloads: 892,
            date: "2024-02-10",
            price: "Free",
            category: "Environment"
        },
        {
            id: 2,
            title: "Pixel Art UI Pack",
            image: "https://images.unsplash.com/photo-1614294149710-32eec425a251?w=300&h=200&fit=crop",
            description: "Коллекция пиксель-арт спрайтов для 2D игр: кнопки, иконки, интерфейсы",
            tags: ["2D", "Pixel", "UI", "Icons"],
            author: "PixelArtist",
            likes: 176,
            comments: 28,
            views: 1890,
            downloads: 745,
            date: "2024-03-05",
            price: "$4.99",
            category: "UI"
        },
        {
            id: 3,
            title: "Sci-Fi Weapons Pack",
            image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=300&h=200&fit=crop",
            description: "Набор футуристического оружия с анимациями и эффектами",
            tags: ["Weapons", "Sci-Fi", "FX", "Animations"],
            author: "SciFiCreator",
            likes: 158,
            comments: 22,
            views: 1678,
            downloads: 632,
            date: "2024-01-15",
            price: "$7.99",
            category: "Weapons"
        },
        {
            id: 4,
            title: "Fantasy Character Pack",
            image: "https://images.unsplash.com/photo-1534423861386-85a16f5d13fd?w=300&h=200&fit=crop",
            description: "Набор из 10 фэнтезийных персонажей с ригами и анимациями",
            tags: ["Characters", "Fantasy", "Rigged", "Animations"],
            author: "CharacterDesigner",
            likes: 287,
            comments: 42,
            views: 3120,
            downloads: 1056,
            date: "2024-03-12",
            price: "$12.99",
            category: "Characters"
        },
        {
            id: 5,
            title: "Nature Environment Pack",
            image: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=300&h=200&fit=crop",
            description: "Реалистичные деревья, растения и ландшафтные элементы",
            tags: ["Nature", "Environment", "Plants", "Landscape"],
            author: "NatureArtist",
            likes: 192,
            comments: 25,
            views: 1987,
            downloads: 823,
            date: "2024-02-28",
            price: "$9.99",
            category: "Environment"
        },
        {
            id: 6,
            title: "Vehicle Pack",
            image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=300&h=200&fit=crop",
            description: "Коллекция современных и футуристических транспортных средств",
            tags: ["Vehicles", "Cars", "Sci-Fi", "Transport"],
            author: "VehicleDesigner",
            likes: 134,
            comments: 19,
            views: 1567,
            downloads: 587,
            date: "2024-03-18",
            price: "$8.99",
            category: "Vehicles"
        },
        {
            id: 7,
            title: "Sound Effects Library",
            image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=300&h=200&fit=crop",
            description: "Библиотека из 200+ звуковых эффектов для игр",
            tags: ["Audio", "SFX", "Sounds", "Library"],
            author: "SoundDesigner",
            likes: 98,
            comments: 14,
            views: 1234,
            downloads: 672,
            date: "2024-03-08",
            price: "$5.99",
            category: "Audio"
        },
        {
            id: 8,
            title: "Modular Sci-Fi Interior",
            image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?w=300&h=200&fit=crop",
            description: "Модульные элементы для создания футуристических интерьеров",
            tags: ["Sci-Fi", "Interior", "Modular", "Environment"],
            author: "InteriorDesigner",
            likes: 176,
            comments: 23,
            views: 1876,
            downloads: 734,
            date: "2024-02-15",
            price: "$10.99",
            category: "Environment"
        }
    ];

    const sortedAssets = [...mockAssets].sort((a, b) => {
        let valueA, valueB;
        switch (sortBy) {
            case 'likes':
                valueA = a.likes;
                valueB = b.likes;
                break;
            case 'comments':
                valueA = a.comments;
                valueB = b.comments;
                break;
            case 'views':
                valueA = a.views;
                valueB = b.views;
                break;
            case 'downloads':
                valueA = a.downloads;
                valueB = b.downloads;
                break;
            case 'date':
                valueA = new Date(a.date);
                valueB = new Date(b.date);
                break;
            case 'popularity':
            default:
                valueA = a.likes + a.comments + a.views / 10 + a.downloads;
                valueB = b.likes + b.comments + b.views / 10 + b.downloads;
                break;
        }
        return sortOrder === 'asc' ? valueA - valueB : valueB - valueA;
    });

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const handleSortChange = (newSortBy) => {
        if (sortBy === newSortBy) {
            setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
        } else {
            setSortBy(newSortBy);
            setSortOrder('desc');
        }
    };

    const handleNavigation = (path) => {
        navigate(path);
    };

    const renderPagination = () => {
        const pages = [];
        const startPage = Math.max(1, currentPage - 1);
        const endPage = Math.min(totalPages, startPage + 2);
        for (let i = startPage; i <= endPage; i++) {
            pages.push(
                <button
                    key={i}
                    className={`${styles.pageButton} ${currentPage === i ? styles.active : ''}`}
                    onClick={() => handlePageChange(i)}
                >
                    {i}
                </button>
            );
        }
        return pages;
    };

    const SortIcon = ({ field }) => {
        if (sortBy !== field) return <FaSort className={styles.sortIcon} />;
        return sortOrder === 'asc' ? <FaSortUp className={styles.sortIcon} /> : <FaSortDown className={styles.sortIcon} />;
    };

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <div className={styles.headerContent}>
                    <div className={styles.logo}>
                        <FaGamepad className={styles.logoIcon} />
                        <span className={styles.logoText}>Playvixor</span>
                    </div>
                    <div className={styles.searchBar}>
                        <FaSearch className={styles.searchIcon} />
                        <input
                            type="text"
                            placeholder="Поиск ассетов..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>
                    <nav className={styles.nav}>
                        <button
                            className={`${styles.navItem} ${activeMenu === 'games' ? styles.active : ''}`}
                            onClick={() => handleNavigation('/games')}
                        >
                            <FaGamepad className={styles.navIcon} />
                            <span className={styles.navText}>Игры</span>
                        </button>
                        <button
                            className={`${styles.navItem} ${activeMenu === 'assets' ? styles.active : ''}`}
                            onClick={() => handleNavigation('/assets')}
                        >
                            <FaCube className={styles.navIcon} />
                            <span className={styles.navText}>Ассеты</span>
                        </button>
                        <button
                            className={`${styles.navItem} ${activeMenu === 'leaderboard' ? styles.active : ''}`}
                            onClick={() => handleNavigation('/leaderboard')}
                        >
                            <FaTrophy className={styles.navIcon} />
                            <span className={styles.navText}>Лидеры</span>
                        </button>
                        <button
                            className={`${styles.navItem} ${activeMenu === 'account' ? styles.active : ''}`}
                            onClick={() => handleNavigation('/account')}
                        >
                            <FaUser className={styles.navIcon} />
                            <span className={styles.navText}>Аккаунт</span>
                        </button>
                    </nav>
                    <button className={styles.mobileMenuButton}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </header>
            <main className={styles.main}>
                <div className={styles.pageHeader}>
                    <h1 className={styles.pageTitle}>Лучшие ассеты</h1>
                    <div className={styles.sortOptions}>
                        <span>Сортировать по:</span>
                        <button
                            className={`${styles.sortOption} ${sortBy === 'popularity' ? styles.active : ''}`}
                            onClick={() => handleSortChange('popularity')}
                        >
                            Популярности
                            <SortIcon field="popularity" />
                        </button>
                        <button
                            className={`${styles.sortOption} ${sortBy === 'downloads' ? styles.active : ''}`}
                            onClick={() => handleSortChange('downloads')}
                        >
                            Загрузкам
                            <SortIcon field="downloads" />
                        </button>
                        <button
                            className={`${styles.sortOption} ${sortBy === 'likes' ? styles.active : ''}`}
                            onClick={() => handleSortChange('likes')}
                        >
                            Лайкам
                            <SortIcon field="likes" />
                        </button>
                        <button
                            className={`${styles.sortOption} ${sortBy === 'date' ? styles.active : ''}`}
                            onClick={() => handleSortChange('date')}
                        >
                            Новизне
                            <SortIcon field="date" />
                        </button>
                    </div>
                </div>
                <div className={styles.assetsGrid}>
                    {sortedAssets.map(asset => (
                        <div key={asset.id} className={styles.assetCard}>
                            <div className={styles.cardImage}>
                                <img src={asset.image} alt={asset.title} />
                                <div className={styles.cardOverlay}>
                                    <button className={styles.viewButton}>Подробнее</button>
                                </div>
                                <div className={styles.priceTag}>{asset.price}</div>
                                <div className={styles.categoryBadge}>{asset.category}</div>
                            </div>
                            <div className={styles.cardContent}>
                                <h3 className={styles.cardTitle}>{asset.title}</h3>
                                <p className={styles.cardDescription}>{asset.description}</p>
                                <div className={styles.tags}>
                                    {asset.tags.map((tag, index) => (
                                        <span key={index} className={styles.tag}>#{tag}</span>
                                    ))}
                                </div>
                                <div className={styles.cardMeta}>
                                    <span className={styles.author}>Автор: {asset.author}</span>
                                    <span className={styles.date}>{new Date(asset.date).toLocaleDateString()}</span>
                                </div>
                                <div className={styles.cardStats}>
                                    <div className={styles.stat}>
                                        <FaHeart className={styles.statIcon} />
                                        <span>{asset.likes}</span>
                                    </div>
                                    <div className={styles.stat}>
                                        <FaComment className={styles.statIcon} />
                                        <span>{asset.comments}</span>
                                    </div>
                                    <div className={styles.stat}>
                                        <FaEye className={styles.statIcon} />
                                        <span>{asset.views}</span>
                                    </div>
                                    <div className={styles.stat}>
                                        <FaDownload className={styles.statIcon} />
                                        <span>{asset.downloads}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className={styles.pagination}>
                    <button
                        className={styles.pageButton}
                        disabled={currentPage === 1}
                        onClick={() => handlePageChange(currentPage - 1)}
                    >
                        Назад
                    </button>
                    {renderPagination()}
                    <button
                        className={styles.pageButton}
                        disabled={currentPage === totalPages}
                        onClick={() => handlePageChange(currentPage + 1)}
                    >
                        Вперед
                    </button>
                </div>
            </main>
            <footer className={styles.footer}>
                <div className={styles.footerContent}>
                    <div className={styles.footerSection}>
                        <h3>Playvixor</h3>
                        <p>Лучшая платформа для игр и ассетов</p>
                    </div>
                    <div className={styles.footerSection}>
                        <h4>Разделы</h4>
                        <ul>
                            <li>Игры</li>
                            <li>Ассеты</li>
                            <li>Таблица лидеров</li>
                            <li>Форум</li>
                        </ul>
                    </div>
                    <div className={styles.footerSection}>
                        <h4>Поддержка</h4>
                        <ul>
                            <li>Помощь</li>
                            <li>Контакты</li>
                            <li>О нас</li>
                            <li>Правила</li>
                        </ul>
                    </div>
                </div>
                <div className={styles.footerBottom}>
                    <p>&copy; 2025 Playvixor. Все права защищены.</p>
                </div>
            </footer>
        </div>
    );
};

export default AssetPage;