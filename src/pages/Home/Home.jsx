import { Header } from '../../components/Header/Header';
import styles from './home.module.scss';

export const Home = () => {
  return (
    <>
      <Header />
      <section className={`${styles.slide} ${styles['--first']}`}>
        <div className={styles.container}>
          <h2 className={styles.slogan}>Достигай целей используя привычки</h2>
          <div className={styles.quote}>
            <img src="/images/james_klir_avatar.svg" alt="Портер" className={styles['quote-img']} />
            <span className={styles['quote-text']}>
              Это простой двухступенчатый процесс: <br />
              1. Решите, каким человеком хотите быть. <br /> 2. Докажите себе, что вы и есть такой
              человек, с помощью малых достижений. <br />
              <br />
              Джеймс Клир <br /> “Атомные Привычки”
            </span>
            <span className={styles['quote-quotes']}>“</span>
          </div>
        </div>
        <img src="/images/ded.svg" alt="" className={styles['bg-img']} />
      </section>

      <section className={`${styles.slide} ${styles['--second']}`}>
        <div className={styles.slider}>
          <div className={styles.info}>
            <div className={styles['info__slogan']}>
              <h2 className={styles.slogan}>Упрости свою рутину</h2>
              <span className={styles['info__slogan-text']}>
                Мы предлагаем вам можество инструментов для повышения вашей эффективности во всех
                сферах жизни
              </span>
            </div>
            <div className={styles['info__about']}>
              <h3 className={styles['info__about-title']}>Habits Calendar</h3>
              <p className={styles['info__about-desc']}>
                Мощное дополнение к вашей мотивации - дисциплина.
                <br />
                Наш календарь поможет вам контролировать себя и обязательно проведет вас на пути к
                успеху!
              </p>
            </div>
          </div>
          <img
            className={styles.images}
            src="https://placehold.co/600x400/png"
            alt="Demonstration"
          />
        </div>
        <div className={styles['dots-block']}>
          <p className={styles['slide-name']}>Habits Calendar</p>
          <div className={styles['dots-block__dots']}>
            <span className={`${styles['dots-block__dots-dot']} ${styles['active']}`}></span>
            <span className={styles['dots-block__dots-dot']} />
            <span className={styles['dots-block__dots-dot']} />
          </div>
        </div>
      </section>
      <section className={`${styles.slide} ${styles['--third']}`}>
        <div className={styles.inner}>
          <h2 className={styles.slogan}>
            Нет времени откладывать.
            <br /> Надо начинать сейчас.
          </h2>
          <div className={styles['reg-box']}>
            <div className={styles['reg-box__input-box']}>
              <img
                src="/icons/envelope-solid.svg"
                alt="Icon"
                style={{ opacity: 0.7, height: 28 }}
              />
              <input
                type="email"
                name="email"
                className={styles['reg-box__input']}
                placeholder="Ваш email"
              />
            </div>

            <div className={styles['reg-box__btn']}>
              <button type="button">Зарегистрироваться</button>
            </div>
          </div>
          <div className={styles.contacts}>
            <p className={styles['contacts-title']}>Наши контакты:</p>
            <p className={styles['contacts-text']}>Горячая линия: +38-(099)-123-12-34</p>
            <p className={styles['contacts-text']}>Email: support@hfp.com</p>
          </div>
        </div>
        <img src="/images/target.svg" alt="Target point" />
      </section>
    </>
  );
};
