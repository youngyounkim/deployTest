import styles from './index.module.css';
import rightarrow from '../../../assets/rightarrow.svg';

const Viewbutton = ({ children, className, ...rest }) => {
  return (
    <button {...rest} className={`${styles.wrap} ${className || ''}`}>
      {children}
      <div className={styles.logoWrapper}>
        <img src={rightarrow} alt='로고' width={16} height={16} />
      </div>
    </button>
  );
};

export default Viewbutton;
