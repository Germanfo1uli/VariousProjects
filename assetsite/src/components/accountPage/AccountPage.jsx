import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import {
    FaUser, FaEnvelope, FaLock, FaGoogle, FaFacebook, FaGithub,
    FaEye, FaEyeSlash, FaCheckCircle, FaGamepad, FaCube, FaTrophy
} from 'react-icons/fa';
import { useNavigate, useLocation } from 'react-router-dom';
import styles from './AccountPage.module.css';

const AccountPage = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();


    const getActiveMenu = () => {
        switch(location.pathname) {
            case '/assets': return 'assets';
            case '/account': return 'account';
            case '/leaderboard': return 'leaderboard';
            default: return 'games';
        }
    };

    const activeMenu = getActiveMenu();

    const handleNavigation = (path) => {
        navigate(path);
    };


    const loginSchema = Yup.object().shape({
        email: Yup.string()
            .email('Некорректный email')
            .required('Email обязателен'),
        password: Yup.string()
            .min(6, 'Пароль должен содержать минимум 6 символов')
            .required('Пароль обязателен')
    });

    const registerSchema = Yup.object().shape({
        username: Yup.string()
            .min(3, 'Имя пользователя должно содержать минимум 3 символа')
            .max(20, 'Имя пользователя должно содержать максимум 20 символов')
            .required('Имя пользователя обязательно'),
        email: Yup.string()
            .email('Некорректный email')
            .required('Email обязателен'),
        password: Yup.string()
            .min(6, 'Пароль должен содержать минимум 6 символов')
            .required('Пароль обязателен'),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Пароли должны совпадать')
            .required('Подтверждение пароля обязательно')
    });


    const handleLogin = (values, { setSubmitting }) => {
        console.log('Вход:', values);
        setTimeout(() => {
            setSubmitting(false);
            // Здесь будет логика входа... наверное
        }, 1000);
    };

    const handleRegister = (values, { setSubmitting }) => {
        console.log('Регистрация:', values);
        setTimeout(() => {
            setSubmitting(false);
            // Здесь будет логика регистрации... наверное
        }, 1000);
    };

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <div className={styles.headerContent}>
                    <div className={styles.logo}>
                        <FaGamepad className={styles.logoIcon} />
                        <span className={styles.logoText}>Playvixor</span>
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
                </div>
            </header>


            <main className={styles.main}>
                <div className={styles.accountContainer}>
                    <div className={styles.accountCard}>
                        <div className={styles.accountHeader}>
                            <h1 className={styles.accountTitle}>
                                {isLogin ? 'Вход в аккаунт' : 'Создание аккаунта'}
                            </h1>
                            <p className={styles.accountSubtitle}>
                                {isLogin ? 'Войдите, чтобы продолжить' : 'Присоединяйтесь к нашему сообществу'}
                            </p>
                        </div>


                        <div className={styles.formContainer}>
                            {isLogin ? (
                                <Formik
                                    initialValues={{ email: '', password: '' }}
                                    validationSchema={loginSchema}
                                    onSubmit={handleLogin}
                                >
                                    {({ isSubmitting, errors, touched }) => (
                                        <Form className={styles.form}>
                                            <div className={styles.formGroup}>
                                                <div className={styles.inputWrapper}>
                                                    <FaEnvelope className={styles.inputIcon} />
                                                    <Field
                                                        type="email"
                                                        name="email"
                                                        placeholder="Email"
                                                        className={`${styles.input} ${touched.email && errors.email ? styles.error : ''}`}
                                                    />
                                                </div>
                                                <ErrorMessage name="email" component="div" className={styles.errorMessage} />
                                            </div>

                                            <div className={styles.formGroup}>
                                                <div className={styles.inputWrapper}>
                                                    <FaLock className={styles.inputIcon} />
                                                    <Field
                                                        type={showPassword ? 'text' : 'password'}
                                                        name="password"
                                                        placeholder="Пароль"
                                                        className={`${styles.input} ${touched.password && errors.password ? styles.error : ''}`}
                                                    />
                                                    <button
                                                        type="button"
                                                        className={styles.passwordToggle}
                                                        onClick={() => setShowPassword(!showPassword)}
                                                    >
                                                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                                                    </button>
                                                </div>
                                                <ErrorMessage name="password" component="div" className={styles.errorMessage} />
                                            </div>

                                            <div className={styles.rememberForgot}>
                                                <label className={styles.rememberMe}>
                                                    <Field type="checkbox" name="remember" />
                                                    <span>Запомнить меня</span>
                                                </label>
                                                <button type="button" className={styles.forgotPassword}>
                                                    Забыли пароль?
                                                </button>
                                            </div>

                                            <button
                                                type="submit"
                                                disabled={isSubmitting}
                                                className={styles.submitButton}
                                            >
                                                {isSubmitting ? 'Вход...' : 'Войти'}
                                            </button>
                                        </Form>
                                    )}
                                </Formik>
                            ) : (
                                <Formik
                                    initialValues={{ username: '', email: '', password: '', confirmPassword: '' }}
                                    validationSchema={registerSchema}
                                    onSubmit={handleRegister}
                                >
                                    {({ isSubmitting, errors, touched }) => (
                                        <Form className={styles.form}>
                                            <div className={styles.formGroup}>
                                                <div className={styles.inputWrapper}>
                                                    <FaUser className={styles.inputIcon} />
                                                    <Field
                                                        type="text"
                                                        name="username"
                                                        placeholder="Имя пользователя"
                                                        className={`${styles.input} ${touched.username && errors.username ? styles.error : ''}`}
                                                    />
                                                </div>
                                                <ErrorMessage name="username" component="div" className={styles.errorMessage} />
                                            </div>

                                            <div className={styles.formGroup}>
                                                <div className={styles.inputWrapper}>
                                                    <FaEnvelope className={styles.inputIcon} />
                                                    <Field
                                                        type="email"
                                                        name="email"
                                                        placeholder="Email"
                                                        className={`${styles.input} ${touched.email && errors.email ? styles.error : ''}`}
                                                    />
                                                </div>
                                                <ErrorMessage name="email" component="div" className={styles.errorMessage} />
                                            </div>

                                            <div className={styles.formGroup}>
                                                <div className={styles.inputWrapper}>
                                                    <FaLock className={styles.inputIcon} />
                                                    <Field
                                                        type={showPassword ? 'text' : 'password'}
                                                        name="password"
                                                        placeholder="Пароль"
                                                        className={`${styles.input} ${touched.password && errors.password ? styles.error : ''}`}
                                                    />
                                                    <button
                                                        type="button"
                                                        className={styles.passwordToggle}
                                                        onClick={() => setShowPassword(!showPassword)}
                                                    >
                                                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                                                    </button>
                                                </div>
                                                <ErrorMessage name="password" component="div" className={styles.errorMessage} />
                                            </div>

                                            <div className={styles.formGroup}>
                                                <div className={styles.inputWrapper}>
                                                    <FaLock className={styles.inputIcon} />
                                                    <Field
                                                        type={showPassword ? 'text' : 'password'}
                                                        name="confirmPassword"
                                                        placeholder="Подтверждение пароля"
                                                        className={`${styles.input} ${touched.confirmPassword && errors.confirmPassword ? styles.error : ''}`}
                                                    />
                                                </div>
                                                <ErrorMessage name="confirmPassword" component="div" className={styles.errorMessage} />
                                            </div>

                                            <div className={styles.terms}>
                                                <label className={styles.termsLabel}>
                                                    <Field type="checkbox" name="terms" required />
                                                    <span>Я принимаю <a href="#">условия использования</a> и <a href="#">политику конфиденциальности</a></span>
                                                </label>
                                            </div>

                                            <button
                                                type="submit"
                                                disabled={isSubmitting}
                                                className={styles.submitButton}
                                            >
                                                {isSubmitting ? 'Регистрация...' : 'Зарегистрироваться'}
                                            </button>
                                        </Form>
                                    )}
                                </Formik>
                            )}

                            <div className={styles.socialLogin}>
                                <div className={styles.divider}>
                                    <span>или продолжить с</span>
                                </div>

                                <div className={styles.socialButtons}>
                                    <button type="button" className={styles.socialButtonGoogle}>
                                        <FaGoogle />
                                        <span>Google</span>
                                    </button>
                                    <button type="button" className={styles.socialButtonFacebook}>
                                        <FaFacebook />
                                        <span>Facebook</span>
                                    </button>
                                    <button type="button" className={styles.socialButtonGithub}>
                                        <FaGithub />
                                        <span>GitHub</span>
                                    </button>
                                </div>
                            </div>


                            <div className={styles.switchForm}>
                                <p>
                                    {isLogin ? 'Ещё нет аккаунта? ' : 'Уже есть аккаунт? '}
                                    <button
                                        type="button"
                                        className={styles.switchButton}
                                        onClick={() => setIsLogin(!isLogin)}
                                    >
                                        {isLogin ? 'Зарегистрироваться' : 'Войти'}
                                    </button>
                                </p>
                            </div>
                        </div>
                    </div>


                    <div className={styles.features}>
                        <h2>Преимущества аккаунта Playvixor</h2>
                        <div className={styles.featuresGrid}>
                            <div className={styles.feature}>
                                <FaCheckCircle className={styles.featureIcon} />
                                <h3>Сохраняйте работы</h3>
                                <p>Добавляйте понравившиеся игры и ассеты в избранное</p>
                            </div>
                            <div className={styles.feature}>
                                <FaCheckCircle className={styles.featureIcon} />
                                <h3>Публикуйте контент</h3>
                                <p>Делитесь своими играми и ассетами с сообществом</p>
                            </div>
                            <div className={styles.feature}>
                                <FaCheckCircle className={styles.featureIcon} />
                                <h3>Комментируйте</h3>
                                <p>Оставляйте отзывы и получайте обратную связь</p>
                            </div>
                            <div className={styles.feature}>
                                <FaCheckCircle className={styles.featureIcon} />
                                <h3>Следите за обновлениями</h3>
                                <p>Получайте уведомления о новых работах авторов</p>
                            </div>
                        </div>
                    </div>
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

export default AccountPage;