import Title from '../../atoms/Title';
import styles from './index.module.css';
import hipster_profile_image from '../../../assets/image/hipster_profile_image.svg';
import infohunter_profile_image from '../../../assets/image/infohunter_profile_image.svg';
import onebite_profile_image from '../../../assets/image/onebite_profile_image.svg';
import selfie_profile_image from '../../../assets/image/selfie_profile_image.svg';

const RegisteredAnswerPreview = ({
  answer1 = '따뜻한 밥 한 끼를 다시 함께 먹고 싶어요.',
  answer2 = '오해로 멀어진 친구와 화해하고 싶어요.',
  answer3 = '괜찮다고, 잘하고 있다고 말해주고 싶어요.',
  answer4 = '코인..몰빵...',
  answer5 = '풀대출 비트코인 박았을텐데...',
  time = '00:00:00',
  description = '현재 22명 참여 중! 함께 이야기 해보세요!',
  ...rest
}) => {
  return (
    <div {...rest} className={styles.wrap}>
      <Title type='SubTitle02' style={{ fontFamily: 'Bold' }}>
        등록된 답변
      </Title>
      <div className={styles.answer_container}>
        <div className={styles.answer_box}>
          <div className={styles.profile_box}>
            <img
              className={styles.profile_image}
              src={selfie_profile_image}
              alt='프로필1'
            />
          </div>
          <div className={styles.chat_bubble}>
            <Title
              type='Body02'
              style={{ fontFamily: 'regular', lineHeight: '1.5' }}
            >
              {answer1}
            </Title>
          </div>
        </div>
        <div className={styles.answer_box}>
          <div className={styles.profile_box}>
            <img
              className={styles.profile_image}
              src={infohunter_profile_image}
              alt='프로필2'
            />
          </div>
          <div className={styles.chat_bubble}>
            <Title
              type='Body02'
              style={{ fontFamily: 'regular', lineHeight: '1.5' }}
            >
              {answer2}
            </Title>
          </div>
        </div>
        <div className={styles.answer_box}>
          <div className={styles.profile_box}>
            <img
              className={styles.profile_image}
              src={hipster_profile_image}
              alt='프로필3'
            />
          </div>
          <div className={styles.chat_bubble}>
            <Title
              type='Body02'
              style={{ fontFamily: 'regular', lineHeight: '1.5' }}
            >
              {answer3}
            </Title>
          </div>
        </div>
        <div className={styles.answer_box}>
          <div className={styles.profile_box}>
            <img
              className={styles.profile_image}
              src={onebite_profile_image}
              alt='프로필4'
            />
          </div>
          <div className={styles.chat_bubble}>
            <Title
              type='Body02'
              style={{ fontFamily: 'regular', lineHeight: '1.5' }}
            >
              {answer4}
            </Title>
          </div>
        </div>
        <div className={styles.answer_box}>
          <div className={styles.profile_box}>
            <img
              className={styles.profile_image}
              src={selfie_profile_image}
              alt='프로필5'
            />
          </div>
          <div className={styles.chat_bubble}>
            <Title
              type='Body02'
              style={{ fontFamily: 'regular', lineHeight: '1.5' }}
            >
              {answer5}
            </Title>
          </div>
        </div>
      </div>
      <div className={styles.blur_box}>
        <div className={styles.time_box}>
          <Title
            type='Title01'
            style={{
              fontFamily: 'Bold',
              color: '#2D87FB',
              lineHeight: '1.5',
              marginBottom: '4px',
            }}
          >
            {time}
          </Title>
          <Title
            type='Body02'
            style={{ fontFamily: 'Bold', color: '#808080', lineHeight: '1.5' }}
          >
            {description}
          </Title>
        </div>
      </div>
    </div>
  );
};

export default RegisteredAnswerPreview;
