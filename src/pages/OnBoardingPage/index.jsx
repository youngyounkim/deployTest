import useNavigationPage from '../../hooks/useNavigationPage';
import styles from './index.module.css';
import OnBoardingStep00 from '../../components/molecules/OnBoardingStep00';
import { useSetRecoilState } from 'recoil';
import { myTasteState } from '../../shared/recoil/myTasteState';

const OnBoarding = () => {
  const { routePage } = useNavigationPage();
  const setTasteState = useSetRecoilState(myTasteState);

  const handlePage = () => {
    setTasteState((prev) => {
      return { ...prev, isOnboarding: true };
    });
    routePage('/');
  };

  return (
    <div className={styles.wrap}>
      <OnBoardingStep00 handlePage={handlePage} />
    </div>
  );
};

export default OnBoarding;
