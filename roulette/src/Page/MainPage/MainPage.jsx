import React, { useState, useRef, useEffect } from 'react';
import styles from './MainPage.module.css';

const MainPage = () => {
    const [items, setItems] = useState([]);
    const [newItem, setNewItem] = useState('');
    const [selectedItem, setSelectedItem] = useState(null);
    const [isSpinning, setIsSpinning] = useState(false);
    const wheelRef = useRef(null);

    const addItem = () => {
        if (newItem.trim() && items.length < 12) {
            setItems([...items, newItem.trim()]);
            setNewItem('');
        }
    };

    const removeItem = (index) => {
        setItems(items.filter((_, i) => i !== index));
    };

    const spinWheel = () => {
        if (items.length < 2 || isSpinning) return;

        setIsSpinning(true);
        setSelectedItem(null);

        const wheel = wheelRef.current;
        const rotation = 3600 + Math.random() * 3600;
        const selectedIndex = Math.floor(Math.random() * items.length);

        wheel.style.transition = 'transform 5s cubic-bezier(0.17, 0.67, 0.83, 0.67)';
        wheel.style.transform = `rotate(${rotation}deg)`;

        setTimeout(() => {
            // Рассчитываем реальный выбранный индекс на основе вращения
            const normalizedRotation = rotation % 360;
            const degreesPerItem = 360 / items.length;
            // Вычисляем индекс элемента под указателем (указатель вверху)
            const calculatedIndex = Math.floor((360 - normalizedRotation) / degreesPerItem) % items.length;

            setSelectedItem(items[calculatedIndex]);
            setIsSpinning(false);


            setTimeout(() => {
                wheel.style.transition = 'none';
                wheel.style.transform = `rotate(${normalizedRotation % 360}deg)`;
            }, 100);
        }, 5000);
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            addItem();
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1 className={styles.title}>Колесо Рулетки</h1>
                <p className={styles.subtitle}>Добавьте варианты и испытайте удачу</p>
            </div>

            <div className={styles.content}>
                <div className={styles.wheelSection}>
                    <div className={styles.wheelContainer}>
                        <div
                            ref={wheelRef}
                            className={styles.wheel}
                            style={{
                                background: items.length > 0 ? 'transparent' : 'rgba(255,255,255,0.05)'
                            }}
                        >
                            {items.map((item, index) => (
                                <div
                                    key={index}
                                    className={styles.wheelItem}
                                    style={{
                                        transform: `rotate(${index * (360 / items.length)}deg)`,
                                        '--item-index': index,
                                        '--total-items': items.length
                                    }}
                                >
                                    <span
                                        className={styles.wheelText}
                                        style={{
                                            transform: `rotate(${-index * (360 / items.length)}deg)`
                                        }}
                                    >
                                        {item}
                                    </span>
                                </div>
                            ))}
                            {items.length === 0 && (
                                <div className={styles.emptyWheel}>
                                    <span>Добавьте варианты</span>
                                </div>
                            )}
                        </div>

                        <div className={styles.wheelCenter}>
                            <div className={styles.wheelPointer}></div>
                        </div>
                    </div>

                    <button
                        className={`${styles.spinButton} ${isSpinning ? styles.spinning : ''} ${items.length < 2 ? styles.disabled : ''}`}
                        onClick={spinWheel}
                        disabled={items.length < 2 || isSpinning}
                    >
                        {isSpinning ? 'Крутится...' : 'Крутить рулетку'}
                    </button>
                </div>

                <div className={styles.controlSection}>
                    <div className={styles.controlPanel}>
                        <h3 className={styles.panelTitle}>Управление вариантами</h3>

                        <div className={styles.inputGroup}>
                            <input
                                type="text"
                                value={newItem}
                                onChange={(e) => setNewItem(e.target.value)}
                                onKeyPress={handleKeyPress}
                                placeholder="Введите вариант..."
                                className={styles.input}
                                maxLength={30}
                            />
                            <button
                                onClick={addItem}
                                className={styles.addButton}
                                disabled={!newItem.trim() || items.length >= 12}
                            >
                                +
                            </button>
                        </div>

                        <div className={styles.itemsList}>
                            {items.map((item, index) => (
                                <div key={index} className={styles.listItem}>
                                    <span className={styles.itemText}>{item}</span>
                                    <button
                                        onClick={() => removeItem(index)}
                                        className={styles.removeButton}
                                    >
                                        ×
                                    </button>
                                </div>
                            ))}

                            {items.length === 0 && (
                                <div className={styles.emptyList}>
                                    <span>Нет добавленных вариантов</span>
                                </div>
                            )}
                        </div>

                        <div className={styles.stats}>
                            <span>Добавлено: {items.length}/12</span>
                        </div>
                    </div>

                    {selectedItem && (
                        <div className={styles.resultSection}>
                            <h3 className={styles.resultTitle}>Результат:</h3>
                            <div className={styles.selectedItem}>
                                {selectedItem}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default MainPage;