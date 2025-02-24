import { useEffect } from 'react';
import loading from '../../../assets/loading.gif';
import styles from './index.module.css';
import OnboardingLayout from '../../atoms/OnboardingLayout';

const OnBoardingStep10 = ({ nextStep }) => {
  useEffect(() => {
    setTimeout(() => {
      nextStep();
    }, 3000);
  }, []);
  return (
    <OnboardingLayout>
      <div className={styles.img_wrap}>
        <img src={loading} alt='chaploading' height='250px' width='278px' />
      </div>
    </OnboardingLayout>
  );
};

export default OnBoardingStep10;