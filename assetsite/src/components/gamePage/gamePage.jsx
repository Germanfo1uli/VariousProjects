import React, { useState } from 'react';
import { FaGamepad, FaUser, FaCube, FaTrophy, FaHeart, FaComment, FaEye, FaSearch, FaSort, FaSortUp, FaSortDown } from 'react-icons/fa';
import { useNavigate, useLocation } from 'react-router-dom';
import styles from './gamePage.module.css';

const GamePage = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [searchQuery, setSearchQuery] = useState('');
    const [sortBy, setSortBy] = useState('popularity');
    const [sortOrder, setSortOrder] = useState('desc');
    const totalPages = 5;
    const navigate = useNavigate();
    const location = useLocation();

    const getActiveMenu = () => {
        switch (location.pathname) {
            case '/assets':
                return 'assets';
            case '/leaderboard':
                return 'leaderboard';
            case '/account':
                return 'account';
            default:
                return 'games';
        }
    };

    const activeMenu = getActiveMenu();

    const mockAssets = [
        {
            id: 1,
            title: "Fantasy Adventure",
            image: "https://images.unsplash.com/photo-1534423861386-85a16f5d13fd?w=300&h=200&fit=crop",
            description: "Увлекательная RPG игра в фэнтезийном мире с богатой историей",
            tags: ["RPG", "Fantasy", "Adventure"],
            author: "JohnDev",
            likes: 142,
            comments: 23,
            views: 1567,
            date: "2024-03-15",
            price: "$9.99"
        },
        {
            id: 2,
            title: "Space Shooter",
            image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=300&h=200&fit=crop",
            description: "Динамичный шутер в космическом пространстве с улучшениями корабля",
            tags: ["Shooter", "Space", "Action"],
            author: "SpaceCreator",
            likes: 89,
            comments: 15,
            views: 987,
            date: "2024-03-20",
            price: "$4.99"
        },
        {
            id: 3,
            title: "Medieval Castle",
            image: "https://images.unsplash.com/photo-1589656966895-2f33e7653819?w=300&h=200&fit=crop",
            description: "Детализированный набор ассетов средневекового замка",
            tags: ["Medieval", "Environment", "3D"],
            author: "AssetMaster",
            likes: 204,
            comments: 31,
            views: 2345,
            date: "2024-02-10",
            price: "Free"
        },
        {
            id: 4,
            title: "Pixel Art Pack",
            image: "https://images.unsplash.com/photo-1614294149710-32eec425a251?w=300&h=200&fit=crop",
            description: "Коллекция пиксель-арт спрайтов для 2D игр",
            tags: ["2D", "Pixel", "Art"],
            author: "PixelArtist",
            likes: 176,
            comments: 28,
            views: 1890,
            date: "2024-03-05",
            price: "$5.99"
        },
        {
            id: 5,
            title: "Survival Island",
            image: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=300&h=200&fit=crop",
            description: "Выживайте на таинственном острове полном опасностей и загадок",
            tags: ["Survival", "Open World", "Crafting"],
            author: "IslandDev",
            likes: 95,
            comments: 18,
            views: 1123,
            date: "2024-03-25",
            price: "$7.99"
        },
        {
            id: 6,
            title: "Sci-Fi UI Kit",
            image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=300&h=200&fit=crop",
            description: "Современный набор UI элементов в научно-фантастическом стиле",
            tags: ["UI", "Sci-Fi", "Design"],
            author: "UIDesigner",
            likes: 158,
            comments: 22,
            views: 1678,
            date: "2024-01-15",
            price: "$6.99"
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
            case 'date':
                valueA = new Date(a.date);
                valueB = new Date(b.date);
                break;
            case 'popularity':
            default:
                valueA = a.likes + a.comments + a.views / 10;
                valueB = b.likes + b.comments + b.views / 10;
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
                            placeholder="Поиск игр и ассетов..."
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
                    <h1 className={styles.pageTitle}>
                        {activeMenu === 'games' ? 'Популярные игры' : 'Лучшие ассеты'}
                    </h1>
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
                            className={`${styles.sortOption} ${sortBy === 'likes' ? styles.active : ''}`}
                            onClick={() => handleSortChange('likes')}
                        >
                            Лайкам
                            <SortIcon field="likes" />
                        </button>
                        <button
                            className={`${styles.sortOption} ${sortBy === 'views' ? styles.active : ''}`}
                            onClick={() => handleSortChange('views')}
                        >
                            Просмотрам
                            <SortIcon field="views" />
                        </button>
                        <button
                            className={`${styles.sortOption} ${sortBy === 'comments' ? styles.active : ''}`}
                            onClick={() => handleSortChange('comments')}
                        >
                            Комментариям
                            <SortIcon field="comments" />
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
                                    <button className={styles.viewButton}>Смотреть</button>
                                </div>
                                <div className={styles.priceTag}>{asset.price}</div>
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

export default GamePage;