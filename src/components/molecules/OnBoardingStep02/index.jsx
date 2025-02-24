import Title from '../../atoms/Title';
import Button from '../../atoms/Button';
import AppLogo from '../../../assets/step_logo_01.svg';
import styles from './index.module.css';

const OnBoardingStep02 = ({ nextStep }) => {
  return (
    <div className={styles.wrap}>
      <img src={AppLogo} />
      <Title
        type='Title02'
        className={styles.Title_02_Bold}
        style={{ textAlign: 'center', lineHeight: 1.5, fontWeight: 'bold' }}
      >
        1분안에
        <br />내 독서 스타일 알아보기!
      </Title>
      <div className={styles.button_container}>
        <Button onClick={() => nextStep('ok')}>독서 스타일 찾기</Button>
      </div>
    </div>
  );
};

export default OnBoardingStep02;
