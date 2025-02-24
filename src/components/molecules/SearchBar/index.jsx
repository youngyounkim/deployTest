import styles from './index.module.css';
import useCallModal from '../../../hooks/useCallModal';
import icon from '../../../assets/reading_glasses.png';

const SearchBar = () => {
  const { callModal } = useCallModal();

  return (
    /* 전체 콘텐츠감싸고 있는 div*/
    <div className={styles.wrap} id='info__id' onClick={callModal}>
      <p>원하는 모임 키워드로 검색</p>
      <img className={styles.search_icon} src={icon} />
    </div>
  );
};
export default SearchBar;
