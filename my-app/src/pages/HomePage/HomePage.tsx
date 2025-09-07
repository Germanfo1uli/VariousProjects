import React, { useState } from 'react';
import GameCard from '../../components/GameCard/GameCard';
import Pagination from '../../components/Pagination/Pagination';
import styles from './HomePage.module.css';
import { Game } from '../../types';

// Mock данные для демонстрации
const mockGames: Game[] = [
    {
        id: 1,
        title: "Space Adventure",
        image: "https://via.placeholder.com/300x200/667eea/ffffff",
        description: "Захватывающее космическое приключение с красивой графикой",
        tags: ["action", "space", "adventure"],
        author: "CosmicDev",
        comments: 23,
        likes: 156,
        views: 1200,
        type: "game"
    },
    {
        id: 2,
        title: "Fantasy Assets Pack",
        image: "https://via.placeholder.com/300x200/764ba2/ffffff",
        description: "Набор ассетов для фэнтезийных игр",
        tags: ["fantasy", "assets", "medieval"],
        author: "ArtMaster",
        comments: 45,
        likes: 89,
        views: 850,
        type: "asset"
    },
    {
        id: 3,
        title: "Pixel Platformer",
        image: "https://via.placeholder.com/300x200/f093fb/ffffff",
        description: "Классический платформер в пиксельном стиле",
        tags: ["platformer", "pixel", "retro"],
        author: "PixelArtist",
        comments: 67,
        likes: 234,
        views: 1800,
        type: "game"
    },
    {
        id: 4,
        title: "UI Kit Modern",
        image: "https://via.placeholder.com/300x200/4facfe/ffffff",
        description: "Современный набор UI элементов для игр",
        tags: ["ui", "modern", "design"],
        author: "UIDesigner",
        comments: 34,
        likes: 178,
        views: 950,
        type: "asset"
    },
    {
        id: 5,
        title: "Racing Extreme",
        image: "https://via.placeholder.com/300x200/43e97b/ffffff",
        description: "Экстремальные гонки с реалистичной физикой",
        tags: ["racing", "extreme", "sports"],
        author: "SpeedDev",
        comments: 89,
        likes: 345,
        views: 2100,
        type: "game"
    },
    {
        id: 6,
        title: "Sound Effects Pack",
        image: "https://via.placeholder.com/300x200/ff9a9e/ffffff",
        description: "Коллекция звуковых эффектов для игр",
        tags: ["sound", "audio", "effects"],
        author: "SoundMaster",
        comments: 56,
        likes: 123,
        views: 780,
        type: "asset"
    }
];

const ITEMS_PER_PAGE = 6;

const HomePage: React.FC = () => {
    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = Math.ceil(mockGames.length / ITEMS_PER_PAGE);
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const currentGames = mockGames.slice(startIndex, startIndex + ITEMS_PER_PAGE);

    return (
        <div className={styles.homePage}>
            <h2 className={styles.title}>Популярные игры и ассеты</h2>

            <div className={styles.grid}>
                {currentGames.map(game => (
                    <GameCard key={game.id} game={game} />
                ))}
            </div>

            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
            />
        </div>
    );
};

export default HomePage;