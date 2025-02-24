import styles from './index.module.css';
import Tag from '../../atoms/Tag';
import testRightArrow from '../../../assets/image/testRightArrow.svg';
import testResult_image from '../../../assets/image/testResult_image.svg';

const color = ['skyblue', 'gray', 'yellow'];

const HomeAfStep01 = ({ tags, handleClick, name, ...rest }) => {
  return (
    <div {...rest} className={styles.wrap}>
      <div className={styles.container}>
        <h2>{name}님의 취향은</h2>
        <div className={styles.tags}>
          {tags.map((el, idx) => (
            <Tag key={el} type={color[idx]}>
              #{el}
            </Tag>
          ))}
        </div>
        <div className={styles.retest}>
          <p onClick={handleClick} className={styles.retry}>
            다시 한 번 취향 테스트 해볼까요?
          </p>
          <img src={testRightArrow} alt='아이콘' width={18} height={18} />
        </div>
        <img
          className={styles.image}
          src={testResult_image}
          alt='김맹구님의 취향은'
        />
      </div>
    </div>
  );
};

export default HomeAfStep01;
