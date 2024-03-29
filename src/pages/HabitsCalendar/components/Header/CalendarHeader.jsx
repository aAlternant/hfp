import React from 'react';
import styles from './CalendarHeader.module.scss';
import { ProgressColumn } from '../ProgressColumn/ProgressColumn';
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';

export const CalendarHeader = ({
  monthProgress,
  daysProgress,
  countOfHabitsDays,
  countOfCompletedHabitsDays,
  colors,
}) => {
  const date = new Date();

  // Colors

  React.useEffect(() => {
    if (monthProgress >= 90) {
      setPathColor(colors.perfect);
    } else if (monthProgress >= 75) {
      setPathColor(colors.good);
    } else if (monthProgress >= 20) {
      setPathColor(colors.well);
    } else {
      setPathColor(colors.default);
    }
  }, [monthProgress, colors]);

  const [pathColor, setPathColor] = React.useState(colors.default);
  return (
    <header className={styles.header}>
      <div className={styles['header__date']}>
        <h1 className={styles['header__date-month']}>
          {date.toLocaleString('en-US', { month: 'long' })}
        </h1>
        <div className={styles['header__date__selectors']}>
          <div className={styles['header__date__selectors__selector']}>
            <h2 className={styles['header__date__selectors__selector-name']}>Month</h2>
            <div className={styles['header__date__selectors__selector-menu']}>
              <span>{date.toLocaleString('en-US', { month: 'short' })}</span>
              <div
                className={`${styles['header__date__selectors__selector-arrow']} ${styles['--up']}`}
              />
            </div>
          </div>
          <div className={styles['header__date__selectors__selector']}>
            <h2 className={styles['header__date__selectors__selector-name']}>Year</h2>
            <div className={styles['header__date__selectors__selector-menu']}>
              <span>{date.toLocaleString('en-US', { year: 'numeric' })}</span>
              <div
                className={`${styles['header__date__selectors__selector-arrow']} ${styles['--up']}`}
              />
            </div>
          </div>
        </div>
      </div>

      <div className={styles['header__dialystats']}>
        {daysProgress.map((dayProgress) => (
          <ProgressColumn progress={dayProgress} colors={colors} />
        ))}
      </div>

      <div className={styles['header__sumstats']}>
        <div className={styles['header__sumstats__progress']}>
          <h2 className={styles['header__sumstats__progress-title']}>progress</h2>
          <p className={styles['header__sumstats__progress-value']}>{monthProgress}%</p>
        </div>

        {/* Circular statistic  */}

        <div style={{ width: 80, height: 80 }}>
          <CircularProgressbarWithChildren
            value={monthProgress}
            background={true}
            strokeWidth={13}
            styles={{
              path: {
                stroke: pathColor,
                strokeLinecap: 'butt',
              },
              trail: {
                stroke: '#f8f8f8',
              },
              background: {
                fill: '#ffd3a0b3',
              },
            }}>
            <h3 className={styles['header__sumstats__circular__score-title']}>Score</h3>
            <p className={styles['header__sumstats__circular__score-value']}>
              {countOfCompletedHabitsDays}/{countOfHabitsDays}
            </p>
          </CircularProgressbarWithChildren>
        </div>
      </div>
    </header>
  );
};
