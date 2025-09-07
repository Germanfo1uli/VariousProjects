import React from 'react';
import styles from './GameCard.module.css';
import { Game } from '../../types';

interface GameCardProps {
    game: Game;
}

const GameCard: React.FC<GameCardProps> = ({ game }) => {
    return (
        <div className={styles.card}>
            <div className={styles.imageContainer}>
                <img src={game.image} alt={game.title} className={styles.image} />
                <div className={styles.typeBadge}>
                    {game.type === 'game' ? '🎮 Игра' : '🛠️ Ассет'}
                </div>
            </div>

            <div className={styles.content}>
                <h3 className={styles.title}>{game.title}</h3>
                <p className={styles.description}>{game.description}</p>

                <div className={styles.tags}>
                    {game.tags.map((tag, index) => (
                        <span key={index} className={styles.tag}>#{tag}</span>
                    ))}
                </div>

                <div className={styles.author}>Автор: {game.author}</div>

                <div className={styles.stats}>
                    <div className={styles.stat}>
                        <span className={styles.statIcon}>👁️</span>
                        {game.views}
                    </div>
                    <div className={styles.stat}>
                        <span className={styles.statIcon}>❤️</span>
                        {game.likes}
                    </div>
                    <div className={styles.stat}>
                        <span className={styles.statIcon}>💬</span>
                        {game.comments}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GameCard;