import Title from '../../atoms/Title';
import IconText from '../../atoms/IconText';
import Tag from '../../atoms/Tag';
import styles from './index.module.css';
import bookIcon from '../../../assets/bookIcon.svg';
import peopleIcon from '../../../assets/peopleIcon.svg';
import calendarIcon from '../../../assets/calendarIcon.svg';

// 북카드 컴포넌트
const Top3Card = ({
  ranking,
  title,
  coverImage,
  bookname,
  date,
  participants,
  tags,
  ...rest
}) => {
  return (
    <div className={styles.card} {...rest}>
      <div className={styles.leftbox}>
        <Title
          type='Title02'
          className={styles.Title_02_ExtraBold}
          style={{
            textAlign: 'left',
            lineHeight: 1.5,
            fontFamily: 'extrabold',
            color: '#FFBE14',
          }}
        >
          {ranking}
        </Title>

        <div className={styles.cover}>
          <img src={coverImage} alt='책표지' className={styles.image} />
        </div>
      </div>

      {/* 책 정보 */}
      <div className={styles.info}>
        <div className={styles.topblock}>
          {/* 태그 리스트 */}
          <div className={styles.tags}>
            {tags.map((el) => (
              <Tag key={el} type='yellow'>
                # {el}
              </Tag>
            ))}
          </div>

          {/* 제목 */}
          <Title
            type='Body01'
            className={styles.Body_01_Bold}
            style={{
              textAlign: 'left',
              lineHeight: 1.5,
              fontFamily: 'bold',
              color: '#333333',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              width: '200px',
            }}
          >
            {title}{' '}
          </Title>
        </div>

        {/* 책 정보 리스트 (아이콘 + 텍스트 조합) */}
        <div className={styles.icontext}>
          <IconText icon={bookIcon}>{bookname}</IconText>
          <IconText icon={calendarIcon}>{date}</IconText>
          <IconText
            icon={peopleIcon}
          >{`${participants}명이 의견을 남겼어요`}</IconText>
        </div>
      </div>
    </div>
  );
};

export default Top3Card;
