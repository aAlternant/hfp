import styles from './header.module.scss';
import { Link, useNavigate } from 'react-router-dom';
import React from 'react';
import axios from '../../api/axios';
import { LogOut } from 'react-feather';

export const Header = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = React.useState();
  const [isOptionsTriggerActive, setIsOptionsTriggerActive] = React.useState(false);

  const getUserData = async () => {
    try {
      const reqResponse = await axios.get('/users/get-user');
      const { username } = reqResponse.data.data;
      setUserData({
        username,
      });
    } catch (error) {
      return; // Ничего не делаем
    }
  };

  React.useEffect(() => {
    getUserData();
  }, []);

  const logOutClickHandler = async () => {
    try {
      await axios.post('/users/logout');
      setUserData(undefined);
    } catch (error) {
      return console.error(error);
    }
  };

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
      <div className={styles['loginBlock']}>
        {userData ? (
          <>
            <b className={styles['loginBlock-username']}>{userData.username}</b>
            <div className={styles['loginBlock__actions']}>
              <div
                className={`${styles['loginBlock__actions-trigger']} ${
                  isOptionsTriggerActive ? styles.active : ''
                }`}
                onClick={() => setIsOptionsTriggerActive(!isOptionsTriggerActive)}
              />

              {isOptionsTriggerActive && (
                <div className={styles['loginBlock__actions__modal']}>
                  <button
                    type="button"
                    className={styles['loginBlock__actions__modal-element']}
                    onClick={logOutClickHandler}>
                    Log out
                    <LogOut size={16} />
                  </button>
                </div>
              )}
            </div>
          </>
        ) : (
          <>
            <Link to="register">
              <span className={styles['loginBlock__registration']}>Регистрация</span>
            </Link>
            <Link to="login">
              <span className={styles['loginBlock__login']}>Вход</span>
            </Link>
          </>
        )}
      </div>
    </header>
  );
};
