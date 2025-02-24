import useNavigationPage from '../../hooks/useNavigationPage';
import styles from './index.module.css';
import TopNavBar from '../../components/atoms/TopNavBar';
import LiveShortChapCardL from '../../components/molecules/LiveShortChapCardL';
import MatchBar from '../../components/molecules/MatchBar';
import ChatterCarousel from '../../components/molecules/ChatterCarousel';
import RegisteredAnswerPreview from '../../components/molecules/RegisteredAnswerPreview';
import InfoCard from '../../components/molecules/InfoCard';
import MeetingCardS from '../../components/molecules/MeetingCardS';
import Title from '../../components/atoms/Title';
import right_arrow_mini from '../../assets/right_arrow_mini.svg';
import Button from '../../components/atoms/Button';
import { useRecoilValue } from 'recoil';
import { chapState } from '../../shared/recoil/chapState';
import _ from 'lodash';

const ChapDetail = () => {
  const { routePage, state } = useNavigationPage();
  const { chaps } = useRecoilValue(chapState);
  const { bookName, coverImage, date, genre, participants, tag, title } = state;

  const handlePage = (data) => {
    window.scrollTo(0, 0);
    routePage('/chapDetail', data);
  };

  const handleChatRoom = () => {
    window.scrollTo(0, 0);
    routePage('/chatRoom');
  };

  return (
    <div className={styles.wrap}>
      <TopNavBar navtitle='챕페이지' bell={true} dots={true} />
      <LiveShortChapCardL
        image={coverImage}
        topic={title}
        bookTitle={bookName}
      />
      <MatchBar tags={tag} />
      <ChatterCarousel />
      <RegisteredAnswerPreview />
      <InfoCard
        bookname='소설'
        bookname2={genre}
        date={date}
        participants={`${participants}/30`}
        participants2='자유참여'
        uploadtext='답변 등록 마감'
      />
      <div className={styles.same_book_group}>
        <div className={styles.title_box}>
          <Title
            type='Body01'
            style={{ fontFamily: 'bold', lineHeight: '1.5' }}
          >
            지금 [세상의 마지막 기차역]
            <br />
            으로 진행 중인 단기챕
          </Title>
          <div className={styles.all_list}>
            <Title type='Caption01' style={{ color: '#666666' }}>
              전체보기
            </Title>
            <div className={styles.arrow_box}>
              <img src={right_arrow_mini} alt='>' />
            </div>
          </div>
        </div>

        <div className={styles.list_box}>
          {_.shuffle(chaps).map((el, idx) => {
            if (idx < 3) {
              console.log('el', el);
              return (
                <MeetingCardS
                  key={el.title}
                  onClick={() => handlePage(el)}
                  title={el.title}
                  coverImage={el.coverImage}
                  bookname={el.bookName}
                  date={el.date}
                  participants={el.participants}
                  tags={el.tag}
                  matchRate={97}
                />
              );
            }
            return false;
          })}
        </div>
      </div>
      <div className={styles.same_genre_group}>
        <div className={styles.title_box}>
          <Title
            type='Body01'
            style={{ fontFamily: 'bold', lineHeight: '1.5' }}
          >
            비슷한 '소설' 단기챕 추천
          </Title>
          <div className={styles.all_list}>
            <Title type='Caption01' style={{ color: '#666666' }}>
              전체보기
            </Title>
            <div className={styles.arrow_box}>
              <img src={right_arrow_mini} alt='>' />
            </div>
          </div>
        </div>

        <div className={styles.list_box}>
          {_.shuffle(chaps).map((el, idx) => {
            if (idx < 3) {
              console.log('el', el);
              return (
                <MeetingCardS
                  key={el.title}
                  onClick={() => handlePage(el)}
                  title={el.title}
                  coverImage={el.coverImage}
                  bookname={el.bookName}
                  date={el.date}
                  participants={el.participants}
                  tags={el.tag}
                  matchRate={97}
                />
              );
            }
            return false;
          })}
        </div>
      </div>
      <div className={styles.same_tag_group}>
        <div className={styles.title_box}>
          <Title
            type='Body01'
            style={{ fontFamily: 'bold', lineHeight: '1.5' }}
          >
            비슷한 '성향' 단기챕 추천
          </Title>
          <div className={styles.all_list}>
            <Title type='Caption01' style={{ color: '#666666' }}>
              전체보기
            </Title>
            <div className={styles.arrow_box}>
              <img src={right_arrow_mini} alt='>' />
            </div>
          </div>
        </div>

        <div className={styles.list_box}>
          {_.shuffle(chaps).map((el, idx) => {
            if (idx < 3) {
              console.log('el', el);
              return (
                <MeetingCardS
                  key={el.title}
                  onClick={() => handlePage(el)}
                  title={el.title}
                  coverImage={el.coverImage}
                  bookname={el.bookName}
                  date={el.date}
                  participants={el.participants}
                  tags={el.tag}
                  matchRate={97}
                />
              );
            }
            return false;
          })}
        </div>
      </div>
      <div className={styles.button_container}>
        <div className={styles.button_text_box}>
          <Title
            type='Caption01'
            style={{ color: '#056BF0', fontFamily: 'bold', lineHeight: '1.5' }}
          >
            🔥현재 {participants}명 참여 중! 함께 이야기해 보세요!
          </Title>
        </div>
        <Button onClick={handleChatRoom}>지금 바로 참여하기</Button>
      </div>
    </div>
  );
};

export default ChapDetail;
