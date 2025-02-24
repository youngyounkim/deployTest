import styles from './index.module.css';

const Chips = ({ isPressed, onClick, children, ...rest }) => {
  return (
    <button
      {...rest}
      className={isPressed ? styles.pressed : styles.wrap} // 클릭 상태에 따라 클래스 변경
      onClick={onClick} // 클릭 이벤트 핸들러
    >
      {children}
    </button>
  );
};

export default Chips;