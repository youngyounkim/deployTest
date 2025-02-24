import Button from '../../atoms/Button';
import Title from '../../atoms/Title';
import styles from './index.module.css';
import kakao_button_icon from '../../../assets/kakao_button_icon.svg';
import naver_button_icon from '../../../assets/naver_button_icon.svg';
import google_button_icon from '../../../assets/google_button_icon.svg';
import apple_button_icon from '../../../assets/apple_button_icon.svg';
import login_image from '../../../assets/image/login_image.svg';

const OnBoardingStep01 = ({ nextStep }) => {
  return (
    <div className={styles.wrap}>
      <div className={styles.imgtext_box}>
        <div className={styles.img_box}>
          <img className={styles.login_img} src={login_image} />
        </div>
        <div className={styles.text_box}>
          <Title
            type='Title02'
            className={styles.Title_02_ExtraBold}
            style={{ fontWeight: 'bold', textAlign: 'center', lineHeight: 1.5 }}
          >
            챕터와 채팅이 만나다
          </Title>
          <Title
            type='Body02'
            className={styles.Body_02_Regular}
            style={{ color: '#808080', textAlign: 'center', lineHeight: 1.5 }}
          >
            나만의 독서 커뮤니티를 시작해 보세요
          </Title>
        </div>
      </div>
      <div className={styles.button_wrap}>
        {/* 카카오 로그인 버튼 */}
        <Button
          onClick={() => nextStep('ok')}
          style={{ backgroundColor: '#FEE500', border: 'solid 0px' }}
        >
          <img src={kakao_button_icon} alt='카카오' />
          <Title
            type='Body01'
            className={styles.Body_01_ExtraBold}
            style={{
              textAlign: 'center',
              lineHeight: 1.5,
              fontWeight: 'bold',
            }}
          >
            카카오로 시작하기
          </Title>
        </Button>
        {/* 네이버 로그인 버튼 */}
        <Button
          onClick={() => nextStep('ok')}
          style={{ backgroundColor: '#02C602', border: 'solid 0px' }}
        >
          <img src={naver_button_icon} alt='네이버' />
          <Title
            type='Body01'
            className={styles.Body_01_ExtraBold}
            style={{
              textAlign: 'center',
              lineHeight: 1.5,
              fontWeight: 'bold',
              color: '#fff',
            }}
          >
            네이버로 시작하기
          </Title>
        </Button>
        {/* 구글 로그인 버튼 */}
        <Button
          onClick={() => nextStep('ok')}
          style={{ backgroundColor: '#fff', border: '1px solid #E6E6E6' }}
        >
          <img src={google_button_icon} alt='구글' />
          <Title
            type='Body01'
            className={styles.Body_01_ExtraBold}
            style={{
              textAlign: 'center',
              lineHeight: 1.5,
              fontWeight: 'bold',
              color: '#000',
            }}
          >
            구글로 시작하기
          </Title>
        </Button>
        {/* 애플 로그인 버튼 */}
        <Button
          onClick={() => nextStep('ok')}
          style={{ backgroundColor: '#000', border: 'solid 0px' }}
        >
          <img src={apple_button_icon} alt='애플' />
          <Title
            type='Body01'
            className={styles.Body_01_ExtraBold}
            style={{
              textAlign: 'center',
              lineHeight: 1.5,
              fontWeight: 'bold',
              color: '#fff',
            }}
          >
            애플로 시작하기
          </Title>
        </Button>
      </div>
    </div>
  );
};

export default OnBoardingStep01;
