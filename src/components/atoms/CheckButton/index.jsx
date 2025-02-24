import styles from "./index.module.css";

const CheckButton = ({ isPress, children, ...rest }) => {
  if (isPress) {
    return (
      <button {...rest} className={styles.pressed}>
        {children}
      </button>
    );
  }
  return (
    <>
      <button {...rest} className={styles.wrap}>
        {children}
      </button>
    </>
  );
};

export default CheckButton;
