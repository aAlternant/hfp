import styles from './header.module.scss';
import { Link, useNavigate } from 'react-router-dom';

export const Header = () => {
  const navigate = useNavigate();
  return (
    <header className={styles.header}>
      <div className={styles['link-container']}>
        <div className={styles.logo}>
          <Link to="/">
            <span className={styles['logo-naming']}>HFP</span>
          </Link>
        </div>
        <nav className={styles.navigation}>
          <a
            href="/habits-calendar"
            aria-label="Go to the habit calendar(You must be authorized)"
            className={styles['navigation-link']}
            onClick={(e) => {
              e.preventDefault();
              navigate('/habits-calendar');
            }}>
            Habits calendar
          </a>
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
