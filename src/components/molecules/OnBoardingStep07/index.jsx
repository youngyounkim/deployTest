import FavoriteTopNavbar from '../../atoms/FavoriteTopNavbar';
import Title from '../../atoms/Title';
import Favorite_selection_button from '../../atoms/Favorite_selection_button';
import favorite_image07 from '../../../assets/image/favorite_image07.svg';
import favorite_image08 from '../../../assets/image/favorite_image08.svg';
import ProgressBar from '../../atoms/ProgressBar';
import styles from './index.module.css';

const OnBoardingStep07 = ({ nextStep, choice, beforeStep }) => {
  const handleNextStep = (choice) => {
    nextStep(choice);
  };

  if (choice === '감성적인 문장 및 리뷰를 찾아본다.') {
    return (
      <div className={styles.container}>
        <div className={styles.favoritetopnavbar}>
          <FavoriteTopNavbar onClick={beforeStep}>
            나의 독서 스타일은?
          </FavoriteTopNavbar>
        </div>

        {/* 프로그래스 바 추가 */}
        <div className={styles.align_progress}>
          <ProgressBar progress={5} /> {/* 5/7 상태 표시 */}
        </div>

        <div className={styles.image}>
          <img
            src={favorite_image07}
            alt='독서 스타일'
            className={styles.image}
          />
        </div>

        <div className={styles.titleContainer}>
          <Title
            type='Title02'
            className={styles.Title_02_Bold}
            style={{ textAlign: 'center', lineHeight: 1.5, fontWeight: 'bold' }}
          >
            하루 10분 독서 챌린지가 <br /> 유행 중이라고 한다.
          </Title>
        </div>

        <div className={styles.buttonGroup}>
          <Favorite_selection_button onClick={() => handleNextStep(0)}>
            감성적인 문장 필사하면서 기록 공유
          </Favorite_selection_button>
          <Favorite_selection_button onClick={() => handleNextStep(1)}>
            깊은 뜻이 있는 문장 필사하면서 기록 공유
          </Favorite_selection_button>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.favoritetopnavbar}>
        <FavoriteTopNavbar onClick={beforeStep}>
          나의 독서 스타일은?
        </FavoriteTopNavbar>
      </div>

      {/* 프로그래스 바 추가 */}
      <div className={styles.align_progress}>
        <ProgressBar progress={5} /> {/* 5/7 상태 표시 */}
      </div>

      <div className={styles.image}>
        <img
          src={favorite_image08}
          alt='독서 스타일'
          className={styles.image}
        />
      </div>

      <div className={styles.titleContainer}>
        <Title
          type='Title02'
          className={styles.Title_02_Bold}
          style={{ textAlign: 'center', lineHeight: 1.5, fontWeight: 'bold' }}
        >
          책을 다 읽고 난 후, 당신의 피드는?
        </Title>
      </div>

      <div className={styles.buttonGroup}>
        <Favorite_selection_button onClick={() => handleNextStep(2)}>
          실용적인 정보 공유
        </Favorite_selection_button>
        <Favorite_selection_button onClick={() => handleNextStep(3)}>
          가볍게 자신의 생각 공유
        </Favorite_selection_button>
      </div>
    </div>
  );
};

export default OnBoardingStep07;
