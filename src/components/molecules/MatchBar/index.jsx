import styles from './index.module.css';
import information_circle from '../../../assets/information-circle.png';
import Tag from '../../atoms/Tag';

const color = ['skyblue', 'yellow', 'skyblue', 'yellow', 'gray'];

const MatchBar = ({ tags, ...rest }) => {
  return (
    <div {...rest} className={styles.wrap0}>
      <div {...rest} className={styles.wrap1}>
        <div className={styles.wrap2}>
          <div className={styles.wrap2_1}>
            <p className={styles.SubTitle_02_Bold}>
              김맹구님과 챕의 성향 일치율
            </p>
            <img
              src={information_circle}
              alt='information_circle'
              height='16px'
              width='16px'
            />
          </div>
          <p className={styles.SubTitle_02_ExtraBold}>96%</p>
        </div>

        <div className={styles.wraptag}>
          <div className={styles.wrap3}>
            {tags.map((el, idx) => (
              <Tag key={el} type={color[idx]}>
                #{el}
              </Tag>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MatchBar;
