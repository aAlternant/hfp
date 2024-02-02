import styles from './input.module.scss';

export const Input = ({ text, type, icon }) => {
  return (
    <div className={styles['input']}>
      <i className={icon}></i>
      <input type={type ? type : 'text'} placeholder={text} />
    </div>
  );
};
