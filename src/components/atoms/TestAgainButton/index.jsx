import styles from './index.module.css';

const TestAgainButton = ({ children, className, ...rest }) => {
  return (
    <button {...rest} className={`${styles.wrap} ${className || ""}`}>
      {children}
    </button>
  );
};

export default TestAgainButton;