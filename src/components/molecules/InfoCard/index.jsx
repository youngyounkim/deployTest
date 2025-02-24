import Title from '../../atoms/Title';
import styles from './index.module.css';
import IconText from '../../atoms/IconText';
import bookIcon from '../../../assets/image/bookIcon.svg';
import calendarIcon from '../../../assets/image/calendarIcon.svg';
import peopleIcon from '../../../assets/image/peopleIcon.svg';
import uploadIcon from '../../../assets/image/uploadIcon.svg';

const InfoCard = ({
  bookname,
  bookname2,
  date,
  date2,
  participants,
  participants2,
  uploadtext,
  ...rest
}) => {
  return (
    <div {...rest} className={styles.wrap}>
      <Title
        type='SubTitle02'
        className={styles.SubTitle_02_Bold}
        style={{
          textAlign: 'left',
          lineHeight: 1.5,
          fontFamily: 'bold',
          color: '#1A1A1A',
        }}
      >
        안내사항
      </Title>

      <div className={styles.icontext_container}>
        <IconText icon={bookIcon}> {`${bookname}>${bookname2}`} </IconText>

        <IconText icon={calendarIcon}>{`${date}`}</IconText>

        <IconText
          icon={peopleIcon}
        >{`${participants}∙${participants2}`}</IconText>

        <IconText icon={uploadIcon}>{uploadtext}</IconText>
      </div>
    </div>
  );
};

export default InfoCard;
