import styles from './index.module.css';
import shortChap_image from '../../../assets/image/shortChap_image.svg';
import shortChapRightArrow from '../../../assets/image/shortChapRightArrow.svg';
import longChap_image from '../../../assets/image/longChap_image.svg';
import longChapRightArrow from '../../../assets/image/longChapRightArrow.svg';
import { useState } from 'react';

const CHAP_CONFIG = {
  shortChap: {
    title: '단기챕',
    subtitle: '가볍게 한마디!',
    text: '책을 읽고 떠오른 생각,\n단기챕에서 바로 나눠요!',
    bgColor: '#FFE8AD',
    borderColor: '#FFDA79',
    contentBgColor: '#FFFBF0',
    image: shortChap_image,
    arrow: shortChapRightArrow,
  },
  longChap: {
    title: '장기챕',
    subtitle: '한 권에 한 챕터씩!',
    text: '같은 사람들과 꾸준히,\n장기챕에서 생각을 나눠요!',
    bgColor: '#C4DEFE',
    borderColor: '#91C0FD',
    contentBgColor: '#F5F9FF',
    image: longChap_image,
    arrow: longChapRightArrow,
  },
};

const MainButton = ({ type = 'shortChap', ...rest }) => {
  const config = CHAP_CONFIG[type];
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      {...rest}
      className={styles.wrap}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={styles.container}
        style={{
          background: config.bgColor,
          borderColor: config.borderColor,
        }}
      >
        <div className={styles.header}>
          <p className={styles.title} style={{ color: '#333333' }}>
            {config.title}
          </p>
          <img src={config.arrow} alt='아이콘' width={24} height={24} />
        </div>
        <p className={styles.Subtitle}>{config.subtitle}</p>
        {/* hover 상태일 때만 기존 이미지(원래 .character 위치, 사이즈) 렌더링 */}
        {isHovered && (
          <img
            src={config.image}
            alt={`${config.title} 이미지`}
            className={styles.character}
          />
        )}
      </div>
      <div
        className={styles.Content}
        style={{
          background: config.contentBgColor,
          borderColor: config.borderColor,
        }}
      >
        {/* text의 줄바꿈(\n)을 <br /> 태그로 변환 */}
        <p className={styles.text}>
          {config.text.split('\n').map((line, index) => (
            <span key={index}>
              {line}
              <br />
            </span>
          ))}
        </p>
      </div>
    </div>
  );
};

export default MainButton;
