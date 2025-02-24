import styles from './index.module.css'; // CSS 모듈 import
import leftarrow from "../../../assets/leftarrow.svg";
import useNavigationPage from '../../../hooks/useNavigationPage';


const FavoriteTopNavbar = ({ children, className, onClick, ...rest }) => {

  const { routePage } = useNavigationPage();

  // 뒤로가기 핸들러
  const  handler = () => {
    if (onClick) {
      onClick()
    }
    else {routePage(-1)}; // -1만 넣기
  };
  
  return (
    <div {...rest} className={`${styles.navbar} ${className || ''}`}>
      <div className={styles.icon}>
        <img 
          src={leftarrow} 
          alt="뒤로가기" 
          width={28} 
          height={28} 
          onClick={handler} // 'onBack' 대신 직접 'handler' 호출
        />
      </div>
      <div className={styles.text}>{children}</div>
    </div>
  );
};

export default FavoriteTopNavbar;