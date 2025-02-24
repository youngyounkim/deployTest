import Title from '../../atoms/Title';
import styles from './index.module.css';
import Tag from '../../atoms/Tag';
import peopleIcon from '../../../assets/peopleIcon.svg';
import calendarIcon from '../../../assets/calendarIcon.svg';
import IconText from '../../atoms/IconText';

const MeetingCardS = ({
  title,
  coverImage,
  date,
  participants,
  tags,
  ...rest
}) => {
  return (
    <div
      {...rest}
      className={styles.wrap}
      style={{ backgroundImage: `url(${coverImage})` }}
    >
      <div className={styles.info}>
        <div className={styles.topblock}>
          <div className={styles.tags}>
            {tags.map((el) => (
              <div key={el} className={styles.tag_wrap1}>
                <Tag size='small' type='gray'>
                  # {el}
                </Tag>
              </div>
            ))}
          </div>

          <Title
            type='Body02'
            className={styles.Body_02_Bold}
            style={{
              textAlign: 'left',
              lineHeight: 1.5,
              fontFamily: 'bold',
              color: '#000000',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
            }}
          >
            {title}{' '}
          </Title>
        </div>

        <div className={styles.icontext}>
          <IconText icon={calendarIcon}>{date}</IconText>
          <IconText
            icon={peopleIcon}
          >{`${participants}명이 의견을 남겼어요`}</IconText>
        </div>
      </div>
    </div>
  );
};

export default MeetingCardS;
