import React, { useState } from 'react';
import { FaGamepad, FaUser, FaCube, FaTrophy, FaCrown, FaMedal, FaStar, FaFire, FaSearch } from 'react-icons/fa';
import { useNavigate, useLocation } from 'react-router-dom';
import styles from './LeaderboardPage.module.css';

const LeaderboardPage = () => {
    const [timeFilter, setTimeFilter] = useState('month');
    const [searchQuery, setSearchQuery] = useState('');

    const navigate = useNavigate();
    const location = useLocation();


    const getActiveMenu = () => {
        switch(location.pathname) {
            case '/assets': return 'assets';
            case '/leaderboard': return 'leaderboard';
            default: return 'games';
        }
    };

    const activeMenu = getActiveMenu();

    const mockLeaders = [
        {
            id: 1,
            rank: 1,
            username: "AssetMaster",
            avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop&crop=face",
            assets: 42,
            games: 8,
            likes: 2047,
            downloads: 8924,
            rating: 4.9,
            activity: "Ежедневно"
        },
        {
            id: 2,
            rank: 2,
            username: "GameDevPro",
            avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop&crop=face",
            assets: 28,
            games: 15,
            likes: 3120,
            downloads: 7560,
            rating: 4.8,
            activity: "Ежедневно"
        },
        {
            id: 3,
            rank: 3,
            username: "PixelArtist",
            avatar: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=100&h=100&fit=crop&crop=face",
            assets: 36,
            games: 4,
            likes: 1890,
            downloads: 6342,
            rating: 4.7,
            activity: "5 раз в неделю"
        },
        {
            id: 4,
            rank: 4,
            username: "SoundDesigner",
            avatar: "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?w=100&h=100&fit=crop&crop=face",
            assets: 22,
            games: 6,
            likes: 1567,
            downloads: 5231,
            rating: 4.6,
            activity: "4 раза в неделю"
        },
        {
            id: 5,
            rank: 5,
            username: "CodeWizard",
            avatar: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=100&h=100&fit=crop&crop=face",
            assets: 18,
            games: 12,
            likes: 2345,
            downloads: 4876,
            rating: 4.5,
            activity: "3 раза в неделю"
        },
        {
            id: 6,
            rank: 6,
            username: "VisualCreator",
            avatar: "https://images.unsplash.com/photo-1619895862022-09114b41f16f?w=100&h=100&fit=crop&crop=face",
            assets: 31,
            games: 3,
            likes: 1789,
            downloads: 4123,
            rating: 4.4,
            activity: "Ежедневно"
        },
        {
            id: 7,
            rank: 7,
            username: "LevelDesigner",
            avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
            assets: 15,
            games: 9,
            likes: 1987,
            downloads: 3987,
            rating: 4.3,
            activity: "5 раз в неделю"
        },
        {
            id: 8,
            rank: 8,
            username: "ShaderExpert",
            avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
            assets: 24,
            games: 2,
            likes: 1678,
            downloads: 3654,
            rating: 4.2,
            activity: "4 раза в неделю"
        },
        {
            id: 9,
            rank: 9,
            username: "UIMaster",
            avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
            assets: 19,
            games: 7,
            likes: 1456,
            downloads: 3421,
            rating: 4.1,
            activity: "3 раза в неделю"
        },
        {
            id: 10,
            rank: 10,
            username: "EnvironmentArt",
            avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&h=100&fit=crop&crop=face",
            assets: 27,
            games: 1,
            likes: 1324,
            downloads: 3210,
            rating: 4.0,
            activity: "Ежедневно"
        }
    ];

    const handleNavigation = (path) => {
        navigate(path);
    };

    const handleTimeFilterChange = (filter) => {
        setTimeFilter(filter);
    };

    const getRankIcon = (rank) => {
        switch(rank) {
            case 1: return <FaCrown className={styles.rankIcon} style={{color: '#FFD700'}} />;
            case 2: return <FaMedal className={styles.rankIcon} style={{color: '#C0C0C0'}} />;
            case 3: return <FaMedal className={styles.rankIcon} style={{color: '#CD7F32'}} />;
            default: return <span className={styles.rankNumber}>{rank}</span>;
        }
    };

    const filteredLeaders = mockLeaders.filter(leader =>
        leader.username.toLowerCase().includes(searchQuery.toLowerCase())
    );

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
                            placeholder="Поиск разработчиков..."
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
                            className={`${styles.navItem}`}
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
                    <h1 className={styles.pageTitle}>Таблица лидеров</h1>

                    <div className={styles.timeFilters}>
                        <button
                            className={`${styles.timeFilter} ${timeFilter === 'week' ? styles.active : ''}`}
                            onClick={() => handleTimeFilterChange('week')}
                        >
                            За неделю
                        </button>
                        <button
                            className={`${styles.timeFilter} ${timeFilter === 'month' ? styles.active : ''}`}
                            onClick={() => handleTimeFilterChange('month')}
                        >
                            За месяц
                        </button>
                        <button
                            className={`${styles.timeFilter} ${timeFilter === 'all' ? styles.active : ''}`}
                            onClick={() => handleTimeFilterChange('all')}
                        >
                            Все время
                        </button>
                    </div>
                </div>

                <div className={styles.leaderboardContainer}>
                    <div className={styles.leaderboardHeader}>
                        <div className={styles.rankColumn}>Место</div>
                        <div className={styles.userColumn}>Разработчик</div>
                        <div className={styles.statsColumn}>Ассеты</div>
                        <div className={styles.statsColumn}>Игры</div>
                        <div className={styles.statsColumn}>Лайки</div>
                        <div className={styles.statsColumn}>Загрузки</div>
                        <div className={styles.statsColumn}>Рейтинг</div>
                        <div className={styles.activityColumn}>Активность</div>
                    </div>

                    <div className={styles.leaderboardList}>
                        {filteredLeaders.map(leader => (
                            <div key={leader.id} className={styles.leaderboardItem}>
                                <div className={styles.rankColumn}>
                                    {getRankIcon(leader.rank)}
                                </div>

                                <div className={styles.userColumn}>
                                    <div className={styles.userInfo}>
                                        <img
                                            src={leader.avatar}
                                            alt={leader.username}
                                            className={styles.avatar}
                                        />
                                        <div className={styles.userDetails}>
                                            <span className={styles.username}>{leader.username}</span>
                                            <div className={styles.badges}>
                                                {leader.rank <= 3 && <FaFire className={styles.badgeIcon} />}
                                                {leader.rating >= 4.5 && <FaStar className={styles.badgeIcon} />}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className={styles.statsColumn}>
                                    <span className={styles.statValue}>{leader.assets}</span>
                                </div>

                                <div className={styles.statsColumn}>
                                    <span className={styles.statValue}>{leader.games}</span>
                                </div>

                                <div className={styles.statsColumn}>
                                    <span className={styles.statValue}>{leader.likes.toLocaleString()}</span>
                                </div>

                                <div className={styles.statsColumn}>
                                    <span className={styles.statValue}>{leader.downloads.toLocaleString()}</span>
                                </div>

                                <div className={styles.statsColumn}>
                                    <div className={styles.rating}>
                                        <FaStar className={styles.starIcon} />
                                        <span className={styles.ratingValue}>{leader.rating}</span>
                                    </div>
                                </div>

                                <div className={styles.activityColumn}>
                                    <span className={styles.activityText}>{leader.activity}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>


                <div className={styles.rankingInfo}>
                    <h3>Как рассчитывается рейтинг?</h3>
                    <p>
                        Рейтинг разработчиков рассчитывается на основе множества факторов, включая количество
                        опубликованных ассетов и игр, полученные лайки, количество загрузок и активность на платформе.
                        Топовые разработчики получают специальные значки отличия!
                    </p>
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

export default LeaderboardPage;