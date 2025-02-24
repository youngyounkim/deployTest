import styles from './index.module.css';
import FavoriteTopNavbar from '../../atoms/FavoriteTopNavbar';
import ProgressBar from '../../atoms/ProgressBar';
import favorite_image10 from '../../../assets/image/favorite_image10.svg';
import favorite_image11 from '../../../assets/image/favorite_image11.svg';
import Title from '../../atoms/Title';
import Favorite_selection_button from '../../atoms/Favorite_selection_button';

const OnBoardingStep09 = ({ nextStep, choice, beforeStep }) => {
  const handleNextStep = (choice) => {
    nextStep(choice);
  };

  if (choice === '책에 몰입 할 수 있는 곳') {
    return (
      <div className={styles.container}>
        <FavoriteTopNavbar onClick={beforeStep}>
          나의 독서 스타일은?
        </FavoriteTopNavbar>

        <div className={styles.progressContainer}>
          <ProgressBar progress={7} />
        </div>

        <div className={styles.image}>
          <img src={favorite_image10} alt='독서 스타일' />
        </div>

        <div className={styles.titleContainer}>
          <Title
            type='Title02'
            className={styles.Title_02_Bold}
            style={{ textAlign: 'center', lineHeight: 1.5, fontWeight: 'bold' }}
          >
            모임에서 고른 자리는?
          </Title>
        </div>
        <div className={styles.buttonGroup}>
          <Favorite_selection_button onClick={() => handleNextStep(0)}>
            조용한 프라이빗 독서룸
          </Favorite_selection_button>
          <Favorite_selection_button onClick={() => handleNextStep(1)}>
            서로의 얼굴을 마주보는 원형 테이블
          </Favorite_selection_button>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <FavoriteTopNavbar onClick={beforeStep}>
        나의 독서 스타일은?
      </FavoriteTopNavbar>

      <div className={styles.progressContainer}>
        <ProgressBar progress={7} />
      </div>

      <div className={styles.image}>
        <img src={favorite_image11} alt='독서 스타일' />
      </div>

      <div className={styles.titleContainer}>
        <Title
          type='Title02'
          className={styles.Title_02_Bold}
          style={{ textAlign: 'center', lineHeight: 1.5, fontWeight: 'bold' }}
        >
          모임에서 책을 다 읽고
          <br />
          분위기가 풀어졌다!
        </Title>
      </div>

      <div className={styles.buttonGroup}>
        <Favorite_selection_button onClick={() => handleNextStep(2)}>
          편안하게 감상 공유
        </Favorite_selection_button>
        <Favorite_selection_button onClick={() => handleNextStep(3)}>
          생각을 정리하며, 남들의 이야기를 경청
        </Favorite_selection_button>
      </div>
    </div>
  );
};

export default OnBoardingStep09;
