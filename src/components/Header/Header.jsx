import styles from './header.module.scss';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles['link-container']}>
        <div className={styles.logo}>
          <Link to="/">
            <span className={styles['logo-naming']}>HFP</span>
          </Link>
        </div>
        <nav className={styles.navigation}>
          <span className={styles['navigation-link']}>Habits calendar</span>
          <span className={styles['navigation-link']}>Pomodoro diary</span>
        </nav>
      </div>
      <div className={styles['login-block']}>
        <Link to="register">
          <span className={styles['login-block__registration']}>Регистрация</span>
        </Link>
        <Link to="login">
          <span className={styles['login-block__login']}>Вход</span>
        </Link>
      </div>
    </header>
  );
};
