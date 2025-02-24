import { useState } from 'react';
import Title from '../../atoms/Title';
import Button from '../../atoms/Button';
import Favorite_small_selection_button from '../../atoms/Favorite_small_selection_button';
import ProgressBar from '../../atoms/ProgressBar';
import styles from './index.module.css';
import FavoriteTopNavbar from '../../atoms/FavoriteTopNavbar';
import OnboardingLayout from '../../atoms/OnboardingLayout';

// 온보딩 프로세스의 네 번째 스텝 컴포넌트
const OnBoardingStep04 = ({ nextStep, beforeStep }) => {
  // 사용자가 선택한 성별을 저장하는 상태
  const [selectedGender, setSelectedGender] = useState(null);

  // 성별 선택 핸들러
  const handleGenderSelection = (gender) => {
    setSelectedGender(gender);
  };

  // '다음' 버튼 클릭 시 실행되는 함수
  const handleNextStep = () => {
    nextStep(selectedGender); // 선택된 성별 정보를 다음 스텝에 전달
  };

  return (
    <OnboardingLayout>
      <div className={styles.contents}>
        <FavoriteTopNavbar onClick={beforeStep}>
           <div className={styles.text_box2}>나의 독서 스타일은?</div>
        </FavoriteTopNavbar>
        <div className={styles.progressBar}>
          <ProgressBar progress={2} />
        </div>

        <div className={styles.subtitle}>
          <Title style={{ fontSize: '20px', fontWeight: '600' }}>
            성별을 선택해주세요!
          </Title>
        </div>

        <div className={styles.genderGrid}>
          <Favorite_small_selection_button
            onClick={() => handleGenderSelection('male')}
            className={selectedGender === 'male' ? styles.selected : ''}
          >
            남자
          </Favorite_small_selection_button>
          <Favorite_small_selection_button
            onClick={() => handleGenderSelection('female')}
            className={selectedGender === 'female' ? styles.selected : ''}
          >
            여자
          </Favorite_small_selection_button>
        </div>
      </div>
      <div className={styles.buttonWrap}>
        <Button onClick={handleNextStep} disabled={!selectedGender}>
          다음
        </Button>
      </div>
    </OnboardingLayout>
  );
};

export default OnBoardingStep04;
