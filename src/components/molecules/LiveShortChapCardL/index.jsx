import Title from '../../atoms/Title';
import styles from './index.module.css';
import liveshortchapcard_l_default from '../../../assets/image/liveshortchapcard_L_default.svg';

const LiveShortChapCardL = ({
  bgImage = liveshortchapcard_l_default,
  image = liveshortchapcard_l_default,
  isLive = 'true',
  tagText = '실시간', //  디폴트
  nonLiveTagText = '진행예정',
  topic = '만약 단 하루, 과거로 돌아갈 수 있다면 누구를 만나고 싶나요?',
  bookTitle = '[세상의 마지막 기차역]',
  scheduleText = '🔥실시간 열람 가능',
  nonLiveScheduleText = '25.02.21(금) 19시 시작',
  ...rest
}) => {
  return (
    <div {...rest} className={styles.wrap}>
      <div className={isLive ? styles.tagText : styles.nonLiveTagText}>
        <Title type='Caption01' style={{ color: isLive ? '#fff' : '#808080' }}>
          {isLive ? tagText : nonLiveTagText}
        </Title>
      </div>
      <div className={styles.img_box}>
        <img className={styles.book_img} src={image} alt='책 표지' />
      </div>
      <div className={styles.text_box}>
        <Title
          type='SubTitle02'
          style={{
            fontFamily: 'Bold',
            textAlign: 'center',
            lineHeight: '1.5',
            color: '#333',
            marginBottom: '10px',
            wordBreak: 'keep-all',
          }}
        >
          {topic}
        </Title>
        <Title
          type='Body02'
          style={{
            fontFamily: 'regular',
            lineHeight: '1.5',
            color: '#666',
            marginBottom: '8px',
          }}
        >
          {`[${bookTitle}]`}
        </Title>
        <Title
          type='Body02'
          style={{
            fontFamily: 'extrBold',
            color: isLive ? '#E4575D' : '#808080',
          }}
        >
          {isLive ? scheduleText : nonLiveScheduleText}
        </Title>
      </div>
    </div>
  );
};

export default LiveShortChapCardL;
