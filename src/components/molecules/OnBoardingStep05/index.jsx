import { useState } from 'react';
import Title from '../../atoms/Title';
import Button from '../../atoms/Button';
import Favorite_small_selection_button from '../../atoms/Favorite_small_selection_button';
import ProgressBar from '../../atoms/ProgressBar';
import styles from './index.module.css';
import FavoriteTopNavbar from '../../atoms/FavoriteTopNavbar';
import OnboardingLayout from '../../atoms/OnboardingLayout';

// 온보딩 프로세스의 다섯 번째 스텝 컴포넌트
const OnBoardingStep05 = ({ nextStep, beforeStep }) => {
  // 사용자가 선택한 장르를 저장하는 상태
  const [selectedGenres, setSelectedGenres] = useState([]);

  // 장르 선택 핸들러
  const handleGenreSelection = (genre) => {
    if (selectedGenres.length > 2) {
      return;
    }

    if (selectedGenres.includes(genre)) {
      // 이미 선택된 장르라면 선택 해제
      setSelectedGenres(selectedGenres.filter((g) => g !== genre));
    } else if (selectedGenres.length < 2) {
      // 선택된 장르가 2개 미만일 경우 새로운 장르 추가
      setSelectedGenres([...selectedGenres, genre]);
    }
  };

  // '다음' 버튼 클릭 시 실행되는 함수
  const handleNextStep = () => {
    nextStep(selectedGenres); // 선택된 장르 목록을 다음 스텝에 전달
  };

  // 선택 가능한 장르 목록
  const genres = [
    '소설/문학',
    '판타지',
    'SF',
    '미스터리',
    '에세이/시',
    '자기계발',
    '사회/경제',
    '인문/철학',
    '심리학',
  ];

  return (
    <OnboardingLayout>
      {/* 최상단 네비게이션 바 */}
      <div className={styles.favoritetopnavbar}>
        <FavoriteTopNavbar onClick={beforeStep}>
          나의 독서 스타일은?
        </FavoriteTopNavbar>
      </div>

      <div className={styles.contents}>
        <div className={styles.content}>
          {/* 진행률 바 표시 */}
          <div className={styles.progressBar}>
            <ProgressBar progress={3} />
          </div>

          {/* 제목 및 설명 */}
          <div className={styles.subtitle}>
            <Title style={{ fontSize: '20px', fontWeight: '600' }}>
              나의 선호하는 장르를 선택해주세요!
            </Title>
            <Title style={{ fontSize: '14px', fontWeight: '400' }}>
              최대 2개까지 선택 가능합니다.
            </Title>
          </div>
        </div>

        {/* 장르 선택 버튼 목록 */}
        <div className={styles.genreGrid}>
          {genres.map((genre, index) => (
            <Favorite_small_selection_button
              key={index}
              onClick={() => handleGenreSelection(genre)}
              className={selectedGenres.includes(genre) ? styles.selected : ''}
            >
              {genre}
            </Favorite_small_selection_button>
          ))}
        </div>
      </div>

      {/* '다음' 버튼 (선택된 장르가 없을 경우 비활성화) */}
      <div className={styles.buttonWrap}>
        <Button onClick={handleNextStep} disabled={selectedGenres.length === 0}>
          다음
        </Button>
      </div>
    </OnboardingLayout>
  );
};

export default OnBoardingStep05;
