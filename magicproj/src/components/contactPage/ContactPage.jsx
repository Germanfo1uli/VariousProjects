import React from 'react';
import { FaGithub, FaTelegram, FaEnvelope, FaLinkedin, FaCode, FaMagic, FaHeart } from 'react-icons/fa';
import NavigationBar from '../MoreComponents/NavigationBar';
import Footer from "../MoreComponents/Footer";
import styles from './ContactPage.module.css';


import developerImage from './asset/developer.jpg';

const ContactPage = () => {
    const [activeTab, setActiveTab] = React.useState('contacts');

    const socialLinks = [
        {
            name: 'GitHub',
            icon: <FaGithub />,
            url: 'https://github.com/Germanfo1uli',
            color: '#6e5494'
        },
        {
            name: 'Telegram',
            icon: <FaTelegram />,
            url: 'https://t.me/VHasComeToV',
            color: '#0088cc'
        },

    ];

    return (
        <div className={styles.container}>
            <NavigationBar activeTab={activeTab} onTabChange={setActiveTab} />

            <main className={styles.mainContent}>
                <div className={styles.scrollContainer}>
                    <div className={styles.pageHeader}>
                        <h1 className={styles.pageTitle}>Мастер Тёмных Искусств</h1>
                        <p className={styles.pageSubtitle}>Создатель этого магического Бестиария</p>
                    </div>

                    <div className={styles.contentWrapper}>
                        <div className={styles.developerCard}>
                            <div className={styles.developerImageContainer}>
                                <div className={styles.imageFrame}>
                                    <img
                                        src={developerImage}
                                        alt="Разработчик сайта"
                                        className={styles.developerImage}
                                    />
                                    <div className={styles.imageOverlay}></div>
                                </div>
                                <div className={styles.magicOrb}></div>
                            </div>

                            <div className={styles.developerInfo}>
                                <h2 className={styles.developerName}>Folen</h2>
                                <p className={styles.developerTitle}>Волшебник кода и бедный разраб</p>

                                <div className={styles.developerDescription}>
                                    <p>Вы нашли то, что искали. Этот ресурс — не просто собрание знаний. Это ключ. Ключ к силе, скрытой в тенях нашего мира, за пеленой лжи, которую называют реальностью.</p>
                                    <p>Здесь вы познаете азы колдовства — древнего искусства повелевать миром, игнорируя его жалкие законы. И вы узрите истинный лик ужаса, на котором зиждется нынешний порядок.</p>
                                    <p>Используйте это. Или будьте использованы. Выбор, как всегда, иллюзорен.

                                        Вперед. Ваше неведение начинает раздражать.</p>
                                </div>

                                <div className={styles.skillsSection}>
                                    <h3 className={styles.skillsTitle}>Магические умения</h3>
                                    <div className={styles.skillsGrid}>
                                        <div className={styles.skillItem}>
                                            <FaCode className={styles.skillIcon} />
                                            <span>React шизосоздание</span>
                                        </div>
                                        <div className={styles.skillItem}>
                                            <FaMagic className={styles.skillIcon} />
                                            <span>CSS Колдовство</span>
                                        </div>
                                        <div className={styles.skillItem}>
                                            <FaHeart className={styles.skillIcon} />
                                            <span>Сотворение Миров</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={styles.contactsSection}>
                            <h2 className={styles.contactsTitle}>Связь со мной</h2>
                            <p className={styles.contactsDescription}>
                                Если ты желаешь обсудить магические проекты, предложить улучшения для бестиария
                                или просто поговорить о тайнах вселенной - я всегда открыт для общения.
                            </p>

                            <div className={styles.socialLinks}>
                                {socialLinks.map((social, index) => (
                                    <a
                                        key={index}
                                        href={social.url}
                                        className={styles.socialLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{ '--hover-color': social.color }}
                                    >
                                        <div className={styles.socialIcon}>
                                            {social.icon}
                                        </div>
                                        <span className={styles.socialName}>{social.name}</span>
                                    </a>
                                ))}
                            </div>

                            <div className={styles.contactForm}>
                                <h3 className={styles.formTitle}>Отправить магическое послание</h3>
                                <form className={styles.form}>
                                    <div className={styles.formGroup}>
                                        <input
                                            type="text"
                                            placeholder="Ваше имя"
                                            className={styles.formInput}
                                        />
                                    </div>
                                    <div className={styles.formGroup}>
                                        <input
                                            type="email"
                                            placeholder="Ваш магический адрес"
                                            className={styles.formInput}
                                        />
                                    </div>
                                    <div className={styles.formGroup}>
                                        <textarea
                                            placeholder="Текст вашего заклинания..."
                                            rows="4"
                                            className={styles.formTextarea}
                                        ></textarea>
                                    </div>
                                    <button type="submit" className={styles.submitButton}>
                                        Отправить послание
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />

            <div className={styles.backgroundElements}>
                <div className={styles.floatingSymbols}>
                    {[...Array(8)].map((_, i) => (
                        <div key={i} className={styles.symbol}></div>
                    ))}
                </div>
                <div className={styles.magicParticles}></div>
            </div>
        </div>
    );
};

export default ContactPage;