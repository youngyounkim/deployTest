import styles from './index.module.css';

const OnboardingLayout = ({ children, ...rest }) => {
  return (
    <div {...rest} className={styles.wrap}>
      {children}
    </div>
  );
};

export default OnboardingLayout;
