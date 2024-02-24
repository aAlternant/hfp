import LoadingSpin from 'react-loading-spin';
import styles from './saveWarning.module.scss';

export const SaveWarning = ({ handleChangesSave, isActive, pending = false }) => {
  return (
    <div className={`${styles.saveWarning} ${isActive ? styles['slideIn'] : styles['slideOut']}`}>
      <span className={styles['saveWarning-text']}>You didn't save your changes</span>
      <button
        type="button"
        className={styles['saveWarning-btn']}
        onClick={() => {
          handleChangesSave();
        }}>
        {pending ? <LoadingSpin size={24} secondaryColor="purple" primaryColor="white" /> : 'SAVE'}
      </button>
    </div>
  );
};
