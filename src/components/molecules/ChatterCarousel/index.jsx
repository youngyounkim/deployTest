import styles from './index.module.css';
import chatter01 from '../../../assets/chatter01.png';
import chatter02 from '../../../assets/chatter02.png';
import chatter03 from '../../../assets/chatter03.png';
import chatter04 from '../../../assets/chatter04.png';
import chatter05 from '../../../assets/chatter05.png';
import chatter06 from '../../../assets/chatter06.png';

const ChatterCarousel = ({ ...rest }) => {
  return (
    <div {...rest} className={styles.wrap0}>
      <div {...rest} className={styles.wrap1}>
        <div className={styles.wrap2}>
          <p className={styles.SubTitle_02_Bold}>지금 참여중인 채터</p>
        </div>
        <div className={styles.wrap3}>
          <button {...rest} className={styles.button1}>
            <img src={chatter01} alt='chatter01' height='58px' width='58px' />
          </button>
          <button {...rest} className={styles.button1}>
            <img src={chatter02} alt='chatter02' height='58px' width='58px' />
          </button>
          <button {...rest} className={styles.button1}>
            <img src={chatter03} alt='chatter03' height='58px' width='58px' />
          </button>
          <button {...rest} className={styles.button1}>
            <img src={chatter04} alt='chatter04' height='58px' width='58px' />
          </button>
          <button {...rest} className={styles.button1}>
            <img src={chatter05} alt='chatter05' height='58px' width='58px' />
          </button>
          <button {...rest} className={styles.button1}>
            <img src={chatter06} alt='chatter06' height='58px' width='58px' />
          </button>
          <button {...rest} className={styles.button1}>
            <img src={chatter01} alt='chatter01' height='58px' width='58px' />
          </button>
          <button {...rest} className={styles.button1}>
            <img src={chatter02} alt='chatter02' height='58px' width='58px' />
          </button>
          <button {...rest} className={styles.button1}>
            <img src={chatter03} alt='chatter03' height='58px' width='58px' />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatterCarousel;
