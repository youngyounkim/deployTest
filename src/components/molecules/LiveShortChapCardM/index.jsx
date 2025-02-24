import styles from './index.module.css';
import liveshortchapcard_m_image1 from '../../../assets/image/liveshortchapcard_m_image1.svg';
import Title from '../../atoms/Title';

const LiveShortChapCardM = ({
  image = liveshortchapcard_m_image1,
  booktitle = '[입속 지느러미] 토론 주제',
  topic = '소설 속 인물들이 겪는 차별과 혐오는 현실 사회와 어떻게 닮아 있을까?',
  children,
  ...rest
}) => {
  return (
    <div {...rest} className={styles.wrap}>
      <div className={styles.top_container}>
        <div className={styles.livetag}>
          <Title
            type='Caption01'
            style={{
              fontFamily: 'Bold',
              color: '#fff',
            }}
          >
            실시간
          </Title>
        </div>
        <div className={styles.img_box}>
          <img src={image} alt='책이미지' />
        </div>
      </div>
      <div className={styles.bottom_container}>
        <Title
          type='Body02'
          style={{
            fontFamily: 'Bold',
            color: '#AD7E00',
            lineHeight: '1.5',
            textAlign: 'center',
            marginBottom: '8px',
          }}
        >
          {booktitle}
        </Title>
        <Title
          type='Body01'
          style={{
            fontFamily: 'Bold',
            color: '#333',
            lineHeight: '1.5',
            textAlign: 'center',
            wordBreak: 'keep-all',
          }}
        >
          {topic}
        </Title>
      </div>
    </div>
  );
};

export default LiveShortChapCardM;
