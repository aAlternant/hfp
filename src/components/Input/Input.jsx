import styles from './input.module.scss';

export const Input = ({ text, type, icon, isRequired = false }) => {
  return (
    <div className={styles['input']}>
      {icon && <i className={icon}></i>}
      <input type={type || 'text'} placeholder={text} name={text} required={isRequired} />
    </div>
  );
};
