import React, { useState, useEffect, useCallback, useRef } from 'react';
import styles from './GamePage.module.css';

const GRID_SIZE = 10;
const CELL_SIZE = 50;
const INITIAL_ENEMY_SPEED = 800; // ms
const MIN_ENEMY_SPEED = 300; // ms
const SPEED_INCREASE_INTERVAL = 10000; // ms
const BOX_RESPAWN_TIME = 25000; // ms
const PLAYER_MOVE_COOLDOWN = 500; // ms
const BOX_BREAK_TIME = 10; // seconds

const GamePage = ({ onBackToWelcome }) => {
    const [playerPos, setPlayerPos] = useState({ x: 0, y: 0 });
    const [enemyPos, setEnemyPos] = useState({ x: 9, y: 9 });
    const [boxPos, setBoxPos] = useState({ x: 5, y: 5 });
    const [hasBox, setHasBox] = useState(false);
    const [isHidden, setIsHidden] = useState(false);
    const [gameOver, setGameOver] = useState(false);
    const [enemyDirection, setEnemyDirection] = useState('up');
    const [enemySpeed, setEnemySpeed] = useState(INITIAL_ENEMY_SPEED);
    const [gameTime, setGameTime] = useState(0);
    const [bestTime, setBestTime] = useState(0);
    const [boxRespawnTimer, setBoxRespawnTimer] = useState(0);
    const [moveCooldown, setMoveCooldown] = useState(false);
    const [hideTimer, setHideTimer] = useState(0);
    const [keysPressed, setKeysPressed] = useState({
        w: false,
        a: false,
        s: false,
        d: false
    });

    // Используем useRef для получения актуальной позиции игрока
    const playerPosRef = useRef(playerPos);
    const isHiddenRef = useRef(isHidden);

    // Обновляем ref при изменении состояния
    useEffect(() => {
        playerPosRef.current = playerPos;
        isHiddenRef.current = isHidden;
    }, [playerPos, isHidden]);

    // Generate random position
    const getRandomPosition = useCallback(() => {
        return {
            x: Math.floor(Math.random() * GRID_SIZE),
            y: Math.floor(Math.random() * GRID_SIZE)
        };
    }, []);

    // Check for collisions
    const checkCollision = useCallback((pos1, pos2) => {
        return pos1.x === pos2.x && pos1.y === pos2.y;
    }, []);

    // Game timer
    useEffect(() => {
        if (gameOver) return;

        const timer = setInterval(() => {
            setGameTime(prev => prev + 1);
        }, 1000);

        return () => clearInterval(timer);
    }, [gameOver]);

    // Increase enemy speed over time
    useEffect(() => {
        if (gameOver) return;

        const speedTimer = setInterval(() => {
            setEnemySpeed(prev => Math.max(MIN_ENEMY_SPEED, prev - 50));
        }, SPEED_INCREASE_INTERVAL);

        return () => clearInterval(speedTimer);
    }, [gameOver]);

    // Box respawn timer
    useEffect(() => {
        if (hasBox || boxPos.x !== -1) return;

        const respawnTimer = setInterval(() => {
            setBoxRespawnTimer(prev => {
                if (prev >= BOX_RESPAWN_TIME / 1000) {
                    setBoxPos(getRandomPosition());
                    return 0;
                }
                return prev + 1;
            });
        }, 1000);

        return () => clearInterval(respawnTimer);
    }, [hasBox, boxPos, getRandomPosition]);

    // Box break timer when hidden
    useEffect(() => {
        if (!isHidden) {
            setHideTimer(0);
            return;
        }

        const breakTimer = setInterval(() => {
            setHideTimer(prev => {
                if (prev >= BOX_BREAK_TIME) {
                    setIsHidden(false);
                    setHasBox(false);
                    setBoxPos(getRandomPosition());
                    return 0;
                }
                return prev + 1;
            });
        }, 1000);

        return () => clearInterval(breakTimer);
    }, [isHidden, getRandomPosition]);

    // Enemy movement
    const moveEnemy = useCallback(() => {
        if (gameOver) return;

        setEnemyPos(prev => {
            const directions = [
                { x: 0, y: -1, dir: 'up' },
                { x: 1, y: 0, dir: 'right' },
                { x: 0, y: 1, dir: 'down' },
                { x: -1, y: 0, dir: 'left' }
            ];

            // Используем актуальные значения из ref
            const currentIsHidden = isHiddenRef.current;
            const currentPlayerPos = playerPosRef.current;

            if (currentIsHidden) {
                const randomDir = directions[Math.floor(Math.random() * directions.length)];
                const newX = Math.max(0, Math.min(GRID_SIZE - 1, prev.x + randomDir.x));
                const newY = Math.max(0, Math.min(GRID_SIZE - 1, prev.y + randomDir.y));
                setEnemyDirection(randomDir.dir);
                return { x: newX, y: newY };
            }

            const dx = currentPlayerPos.x - prev.x;
            const dy = currentPlayerPos.y - prev.y;

            let moveX = 0;
            let moveY = 0;
            let newDir = enemyDirection;

            if (Math.abs(dx) > Math.abs(dy)) {
                moveX = dx > 0 ? 1 : -1;
                newDir = dx > 0 ? 'right' : 'left';
            } else {
                moveY = dy > 0 ? 1 : -1;
                newDir = dy > 0 ? 'down' : 'up';
            }

            const newX = Math.max(0, Math.min(GRID_SIZE - 1, prev.x + moveX));
            const newY = Math.max(0, Math.min(GRID_SIZE - 1, prev.y + moveY));

            setEnemyDirection(newDir);
            return { x: newX, y: newY };
        });
    }, [gameOver, enemyDirection]);

    // Handle key presses
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (gameOver) return;

            const key = e.key.toLowerCase();

            // Обработка пробела для выхода из укрытия
            if (key === ' ' && isHidden) {
                setIsHidden(false);
                return;
            }

            // Обработка H для укрытия
            if (key === 'h' && hasBox && !isHidden) {
                setIsHidden(true);
                setEnemyPos(prev => ({
                    x: Math.max(0, Math.min(GRID_SIZE - 1, prev.x + (prev.x > playerPos.x ? 2 : -2))),
                    y: Math.max(0, Math.min(GRID_SIZE - 1, prev.y + (prev.y > playerPos.y ? 2 : -2)))
                }));
                setHasBox(false);
                return;
            }

            // Обновляем состояние нажатых клавиш
            if (['w', 'a', 's', 'd'].includes(key)) {
                setKeysPressed(prev => ({ ...prev, [key]: true }));
            }
        };

        const handleKeyUp = (e) => {
            const key = e.key.toLowerCase();
            if (['w', 'a', 's', 'd'].includes(key)) {
                setKeysPressed(prev => ({ ...prev, [key]: false }));
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        window.addEventListener('keyup', handleKeyUp);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            window.removeEventListener('keyup', handleKeyUp);
        };
    }, [gameOver, isHidden, hasBox, playerPos]);

    // Handle player movement
    useEffect(() => {
        if (gameOver || isHidden || moveCooldown) return;

        let moveX = 0;
        let moveY = 0;

        if (keysPressed.w) moveY = -1;
        if (keysPressed.a) moveX = -1;
        if (keysPressed.s) moveY = 1;
        if (keysPressed.d) moveX = 1;

        // Если нажато несколько клавиш, двигаем по диагонали
        if (moveX !== 0 && moveY !== 0) {
            moveX = moveX > 0 ? 1 : -1;
            moveY = moveY > 0 ? 1 : -1;
        }

        if (moveX !== 0 || moveY !== 0) {
            const newX = Math.max(0, Math.min(GRID_SIZE - 1, playerPos.x + moveX));
            const newY = Math.max(0, Math.min(GRID_SIZE - 1, playerPos.y + moveY));

            const newPos = { x: newX, y: newY };
            setPlayerPos(newPos);
            setMoveCooldown(true);

            // Проверяем сбор коробки
            if (checkCollision(newPos, boxPos) && !hasBox && !isHidden) {
                setHasBox(true);
                setBoxPos({ x: -1, y: -1 });
                setBoxRespawnTimer(0);
            }

            // Устанавливаем кулдаун
            setTimeout(() => setMoveCooldown(false), PLAYER_MOVE_COOLDOWN);
        }
    }, [keysPressed, playerPos, gameOver, isHidden, moveCooldown, hasBox, boxPos, checkCollision]);

    // Check for game over
    useEffect(() => {
        if (checkCollision(playerPos, enemyPos) && !isHidden) {
            setGameOver(true);
            if (gameTime > bestTime) {
                setBestTime(gameTime);
                localStorage.setItem('bestTime', gameTime.toString());
            }
        }
    }, [playerPos, enemyPos, isHidden, checkCollision, gameTime, bestTime]);

    // Load best time
    useEffect(() => {
        const savedBestTime = localStorage.getItem('bestTime');
        if (savedBestTime) {
            setBestTime(parseInt(savedBestTime));
        }
    }, []);

    // Enemy movement timer
    useEffect(() => {
        const enemyInterval = setInterval(moveEnemy, enemySpeed);
        return () => clearInterval(enemyInterval);
    }, [moveEnemy, enemySpeed]);

    // Restart game
    const restartGame = () => {
        setPlayerPos({ x: 0, y: 0 });
        setEnemyPos({ x: 9, y: 9 });
        setBoxPos(getRandomPosition());
        setHasBox(false);
        setIsHidden(false);
        setGameOver(false);
        setEnemyDirection('up');
        setEnemySpeed(INITIAL_ENEMY_SPEED);
        setGameTime(0);
        setBoxRespawnTimer(0);
        setMoveCooldown(false);
        setHideTimer(0);
        setKeysPressed({ w: false, a: false, s: false, d: false });
    };

    // Format time
    const formatTime = (seconds) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins}:${secs.toString().padStart(2, '0')}`;
    };

    // Render cell
    const renderCell = (x, y) => {
        const isPlayer = playerPos.x === x && playerPos.y === y;
        const isEnemy = enemyPos.x === x && enemyPos.y === y;
        const isBox = boxPos.x === x && boxPos.y === y;

        let cellClass = styles.cell;
        if (isPlayer) cellClass += ` ${styles.player}`;
        if (isEnemy) cellClass += ` ${styles.enemy}`;
        if (isBox) cellClass += ` ${styles.box}`;
        if ((x + y) % 2 === 0) cellClass += ` ${styles.cellEven}`;
        if (isPlayer && moveCooldown) cellClass += ` ${styles.cooldown}`;

        return (
            <div key={`${x}-${y}`} className={cellClass}>
                {isPlayer && isHidden && <div className={styles.hiddenIndicator}>📦</div>}
                {isEnemy && <div className={styles[`enemy${enemyDirection}`]}></div>}
            </div>
        );
    };

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <button className={styles.backButton} onClick={onBackToWelcome}>
                    ← Назад
                </button>
                <h1 className={styles.title}>MetalWeb - Охотник</h1>
                <div className={styles.stats}>
                    <div className={styles.timer}>
                        ⏱️ {formatTime(gameTime)}
                    </div>
                    <div className={styles.bestTime}>
                        🏆 {formatTime(bestTime)}
                    </div>
                    {hasBox && (
                        <div className={styles.boxIndicator}>
                            📦: {isHidden ? 'Спрятан' : 'Готов'}
                        </div>
                    )}
                    {boxRespawnTimer > 0 && (
                        <div className={styles.respawnTimer}>
                            📦: {BOX_RESPAWN_TIME / 1000 - boxRespawnTimer}с
                        </div>
                    )}
                    {isHidden && (
                        <div className={styles.hideTimer}>
                            🕒: {BOX_BREAK_TIME - hideTimer}с
                        </div>
                    )}
                    <button className={styles.restartButton} onClick={restartGame}>
                        🔄
                    </button>
                </div>
            </div>

            <div className={styles.gameInfo}>
                <div className={styles.enemySpeed}>
                    Скорость врага: {((INITIAL_ENEMY_SPEED - enemySpeed) / (INITIAL_ENEMY_SPEED - MIN_ENEMY_SPEED) * 100).toFixed(0)}%
                </div>
            </div>

            <div className={styles.gameContainer}>
                <div
                    className={styles.grid}
                    style={{
                        gridTemplateColumns: `repeat(${GRID_SIZE}, ${CELL_SIZE}px)`,
                        gridTemplateRows: `repeat(${GRID_SIZE}, ${CELL_SIZE}px)`
                    }}
                >
                    {Array.from({ length: GRID_SIZE * GRID_SIZE }, (_, index) => {
                        const x = index % GRID_SIZE;
                        const y = Math.floor(index / GRID_SIZE);
                        return renderCell(x, y);
                    })}
                </div>

                {gameOver && (
                    <div className={styles.gameOver}>
                        <h2>Обнаружен!</h2>
                        <p>Время выживания: {formatTime(gameTime)}</p>
                        <p>Лучшее время: {formatTime(bestTime)}</p>
                        <button className={styles.restartGameButton} onClick={restartGame}>
                            Новая игра
                        </button>
                    </div>
                )}
            </div>

            <div className={styles.controls}>
                <h3>Управление:</h3>
                <div className={styles.controlKeys}>
                    <div>W - Вверх</div>
                    <div>A - Влево</div>
                    <div>S - Вниз</div>
                    <div>D - Вправо</div>
                    {hasBox && <div>H - Спрятаться (тратит коробку)</div>}
                    {isHidden && <div>ПРОБЕЛ - Выйти из укрытия</div>}
                </div>
            </div>

            {isHidden && (
                <div className={styles.hiddenWarning}>
                    ⚠️ Вы спрятаны! Не можете двигаться. Нажмите ПРОБЕЛ чтобы выйти
                </div>
            )}
        </div>
    );
};

export default GamePage;