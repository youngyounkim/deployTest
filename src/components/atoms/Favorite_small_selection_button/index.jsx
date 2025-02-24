import styles from "./index.module.css";

const Favorite_small_selection_button = ({ children, onClick, className }) => {
  return (
    <button className={`${styles.wrap} ${className}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Favorite_small_selection_button;