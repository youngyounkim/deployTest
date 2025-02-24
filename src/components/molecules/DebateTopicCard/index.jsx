import styles from './index.module.css';
import upArrow_icon from '../../../assets/image/upArrow_icon.svg';

const DebateTopicCard = ({ subtitle, title, replyCount, ...rest }) => {
  return (
    <div {...rest} className={styles.wrap}>
      <div className={styles.card}>
        <div className={styles.topic}>
          <div className={styles.header}>
            <p className={styles.subtitle}>{subtitle}</p>
            <div className={styles.up}>
              <img src={upArrow_icon} alt='접기 아이콘' />
            </div>
          </div>
          <p className={styles.title}>{title}</p>
        </div>
      </div>
      <p className={styles.reply}>응답 {replyCount}</p>
    </div>
  );
};

export default DebateTopicCard;
